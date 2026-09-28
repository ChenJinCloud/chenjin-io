// Vite's `vite/client` types declared this globally; Next's webpack bundler
// needs the equivalent module declaration kept explicitly (see the
// `resourceQuery: /raw/` rule in next.config.mjs for the runtime side).
declare module '*.md?raw' {
  const content: string;
  export default content;
}
