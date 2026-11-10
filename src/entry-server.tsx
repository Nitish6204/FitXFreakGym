import { renderToString } from 'react-dom/server';
import App from './App';

export { getPages, SITE_URL, USING_FALLBACK_URL } from './seo';

/** Renders one route to an HTML string (used at build time by scripts/prerender.mjs). */
export function renderRoute(path: string, opts: { notFound?: boolean } = {}): string {
  return renderToString(<App path={path} force404={opts.notFound} />);
}
