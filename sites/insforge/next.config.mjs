import { existsSync } from 'node:fs';
import path from 'node:path';

/** Supports repository-shared dependencies and a self-contained deployment install. */
const appRoot = process.cwd();
export default {
  output: 'standalone',
  outputFileTracingRoot: existsSync(path.join(appRoot, 'node_modules/next'))
    ? appRoot : path.resolve(appRoot, '../..'),
};
