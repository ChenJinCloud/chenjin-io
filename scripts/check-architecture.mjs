import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = path.resolve('src');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(entry.name)) walk(file);
    }
    else if (/\.(tsx?|jsx?)$/.test(file) && !file.endsWith('.d.ts')) files.push(file);
  }
}
walk(root);
const sitesRoot = path.resolve('sites');
if (fs.existsSync(sitesRoot)) walk(sitesRoot);
const relative = (file) => path.relative(root, file).split(path.sep).join('/');
function resolve(from, specifier) {
  if (!specifier.startsWith('@/') && !specifier.startsWith('.')) return null;
  const base = specifier.startsWith('@/') ? path.join(root, specifier.slice(2)) : path.resolve(path.dirname(from), specifier);
  return [base, ...['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx'].map((suffix) => base + suffix)]
    .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) ?? null;
}
const graph = new Map();
for (const file of files) {
  const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  const directives = source.statements.filter(ts.isExpressionStatement).filter((s) => ts.isStringLiteral(s.expression)).map((s) => s.expression.text);
  const imports = [];
  function visit(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      const typeOnly = node.isTypeOnly || node.importClause?.isTypeOnly || (
        node.importClause && !node.importClause.name && ts.isNamedImports(node.importClause.namedBindings)
        && node.importClause.namedBindings.elements.every((e) => e.isTypeOnly)
      );
      if (!typeOnly) imports.push(node.moduleSpecifier.text);
    }
    if (ts.isCallExpression(node) && (node.expression.kind === ts.SyntaxKind.ImportKeyword || node.expression.getText(source) === 'require')
      && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) imports.push(node.arguments[0].text);
    ts.forEachChild(node, visit);
  }
  visit(source);
  graph.set(file, { client: directives.includes('use client'), server: imports.includes('server-only') || relative(file).includes('.server.'), imports,
    edges: imports.map((s) => resolve(file, s)).filter(Boolean) });
}
const errors = [];
for (const [file, info] of graph) {
  const source = relative(file);
  for (const target of info.edges) {
    const destination = relative(target);
    if (!source.startsWith('../sites/') && destination.startsWith('../sites/') && !destination.endsWith('/site.json')) {
      errors.push(`Parent imports sub-site implementation: ${source} -> ${destination}`);
    }
    const sourceSite = source.match(/^\.\.\/sites\/([^/]+)\//)?.[1];
    const destinationSite = destination.match(/^\.\.\/sites\/([^/]+)\//)?.[1];
    if (sourceSite && destinationSite && sourceSite !== destinationSite && !destination.endsWith('/site.json')) {
      errors.push(`Sub-site imports sibling implementation: ${source} -> ${destination}`);
    }
    if (source.startsWith('../sites/') && !destination.startsWith('../sites/') && !destination.startsWith('../packages/')) {
      errors.push(`Sub-site imports parent implementation: ${source} -> ${destination}`);
    }
  }
}
// Follow every runtime edge; an indirect import is just as unsafe as a direct one.
for (const [file, info] of graph) {
  if (!info.client) continue;
  const visited = new Set();
  function trace(current, chain) {
    if (visited.has(current)) return;
    visited.add(current);
    const node = graph.get(current);
    if (!node) return;
    if (node.server || node.imports.some((s) => s.includes('?raw'))) {
      errors.push(`Client reaches server/private source: ${chain.map(relative).join(' -> ')}`);
      return;
    }
    for (const edge of node.edges) trace(edge, [...chain, edge]);
  }
  trace(file, [file]);
}
// New domains use data-only contracts across feature boundaries.
const controlled = new Set(['identity', 'site', 'auth', 'chat', 'topics']);
for (const [file, info] of graph) {
  const domain = relative(file).match(/^features\/([^/]+)\//)?.[1];
  if (!controlled.has(domain)) continue;
  for (const specifier of info.imports) {
    const target = resolve(file, specifier);
    if (!target) continue;
    const targetPath = relative(target);
    const other = targetPath.match(/^features\/([^/]+)\//)?.[1];
    if (other && other !== domain) errors.push(`Cross-domain runtime import: ${relative(file)} -> ${targetPath}`);
    if (targetPath.startsWith('content/')) errors.push(`Feature bypasses public content facade: ${relative(file)} -> ${targetPath}`);
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Architecture boundaries passed (${files.length} source files; client graphs and domain runtime imports checked).`);
