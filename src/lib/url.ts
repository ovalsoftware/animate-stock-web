// Internal links must respect the configured base path: '/' on animatestock.com,
// '/animate-stock-web' on the GitHub Pages test URL (see astro.config.mjs).
const raw = import.meta.env.BASE_URL;
export const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;

export const withBase = (path: string) => `${base}${path}` || '/';
