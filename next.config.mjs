/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  webpack(config) {
    // Vite supported `import x from './file.md?raw'` as a built-in asset
    // query. Webpack (Next's bundler) needs this rule to get the same
    // raw-string-import behavior for the markdown-backed blog content.
    config.module.rules.push({
      resourceQuery: /raw/,
      type: 'asset/source',
    });
    return config;
  },
  async redirects() {
    return [
      // Legacy /blog aliases (Vite-era) → canonical /writing
      { source: '/blog', destination: '/writing', permanent: true },
      { source: '/blog/:slug', destination: '/writing/:slug', permanent: true },

      // Bookshelf & Picks used to live under /writing — now curated resources
      { source: '/writing/bookshelf', destination: '/resources/bookshelf', permanent: true },
      { source: '/writing/picks', destination: '/resources/picks', permanent: true },

      // Playbooks folded into /writing as a tag
      { source: '/playbooks', destination: '/writing/tag/playbook', permanent: true },

      // Workbench/Stack → curated third-party tool list
      { source: '/workbench', destination: '/resources/stack', permanent: true },
      { source: '/stack', destination: '/resources/stack', permanent: true },

      // Experience timeline folded into /about
      { source: '/experience', destination: '/about', permanent: true },
      { source: '/experience/:path*', destination: '/about', permanent: true },

      // Historical routes killed in the 2026-04 IA cut — robots.txt has always
      // allowed full crawling, so these may still be indexed. Do not 404 them.
      { source: '/tools', destination: '/', permanent: true },
      { source: '/tools/:path*', destination: '/', permanent: true },
      { source: '/sources', destination: '/', permanent: true },
      { source: '/sources/:path*', destination: '/', permanent: true },
      { source: '/tutorials', destination: '/', permanent: true },
      { source: '/tutorials/:path*', destination: '/', permanent: true },
      { source: '/social', destination: '/', permanent: true },
      { source: '/social/:path*', destination: '/', permanent: true },
      { source: '/support', destination: '/', permanent: true },
      { source: '/support/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
