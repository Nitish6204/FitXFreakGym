/**
 * Build-time SEO: per-page <head> markup + JSON-LD structured data.
 * Used only by the prerender step (Node), never shipped to the browser.
 */
import { BRAND_ASSETS, FAQ_ITEMS, FOUNDER, LOCATIONS } from './data/gymData';
import { BRANCH_ROUTES, HOME_ROUTE, type BranchId } from './routes';

/** ⚠️ Set your real domain: `SITE_URL=https://www.yourgym.com npm run build` (or edit the fallback). */
const FALLBACK_SITE_URL = 'https://ais-pre-iaqvpgzcddwkq4tovouw7p-970294430153.asia-southeast1.run.app';
export const SITE_URL: string = (
  (typeof process !== 'undefined' && process.env?.SITE_URL) || FALLBACK_SITE_URL
).replace(/\/+$/, '');
export const USING_FALLBACK_URL = SITE_URL === FALLBACK_SITE_URL;

const abs = (p: string) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonLd = (obj: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const ORG_ID = `${SITE_URL}/#organization`;
const PHONE = '+91-6354661053';
const BRAND_NAMES = ['FitX Freak Gym', 'FIT X FREAK Gym Vadodara', 'Fitxfreak', 'FitX Freak Vadodara'];

/** ⚠️ Please verify these against Google Maps / your Business Profile. */
const BRANCH_GEO: Record<BranchId, { lat: string; lng: string; street: string; postal: string }> = {
  'op-road': {
    lat: '22.2965',
    lng: '73.1678',
    street: "7-8th Floor, Avishkar Complex, Old Padra Road, Near McDonald's, Opposite Bankars Heart Hospital, Haripura",
    postal: '390007',
  },
  fatehgunj: { lat: '22.3218', lng: '73.1894', street: 'Jayesh Colony, Fatehgunj', postal: '390008' },
};

const DAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
/** Mirrors `timings` in gymData.ts (Mon–Sat 06:00–23:00, Sun 07:00–21:00). */
const OPENING_HOURS = [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: DAY.slice(0, 6), opens: '06:00', closes: '23:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '07:00', closes: '21:00' },
];

const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'FIT X FREAK',
  alternateName: BRAND_NAMES,
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: abs(BRAND_ASSETS.logo), width: 178, height: 180 },
  image: abs('/og-image.jpg'),
  telephone: PHONE,
  founder: { '@type': 'Person', name: FOUNDER.name },
  sameAs: [BRAND_ASSETS.instagramUrl, BRAND_ASSETS.youtubeUrl, BRAND_ASSETS.facebookUrl],
});

const gym = (id: BranchId, pageUrl: string) => {
  const loc = LOCATIONS.find((l) => l.id === id)!;
  const g = BRANCH_GEO[id];
  return {
    '@type': 'ExerciseGym',
    '@id': `${pageUrl}#gym`,
    name: loc.name,
    alternateName: [`FitX Freak Gym ${BRANCH_ROUTES[id].area}`],
    url: pageUrl,
    telephone: PHONE,
    image: [abs(loc.photo)],
    description: BRANCH_ROUTES[id].intro,
    address: {
      '@type': 'PostalAddress',
      streetAddress: g.street,
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      postalCode: g.postal,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: g.lat, longitude: g.lng },
    openingHoursSpecification: OPENING_HOURS,
    hasMap: loc.googleMapsUrl,
    areaServed: { '@type': 'City', name: 'Vadodara' },
    parentOrganization: { '@id': ORG_ID },
  };
};

export interface Page {
  /** URL path, '/' or '/slug' (no trailing slash). */
  path: string;
  /** Output file relative to dist/. */
  file: string;
  /** Rendered into <head> between the seo markers. */
  head: string;
  notFound?: boolean;
}

const commonHead = (o: { title: string; description: string; url: string; image: string; imageAlt: string; noindex?: boolean }) =>
  [
    `<title>${esc(o.title)}</title>`,
    `<meta name="description" content="${esc(o.description)}" />`,
    o.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
    ...(o.noindex
      ? []
      : [
          `<link rel="canonical" href="${o.url}" />`,
          `<link rel="alternate" hreflang="en-IN" href="${o.url}" />`,
          `<link rel="alternate" hreflang="x-default" href="${o.url}" />`,
        ]),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="FIT X FREAK" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(o.title)}" />`,
    `<meta property="og:description" content="${esc(o.description)}" />`,
    `<meta property="og:url" content="${o.url}" />`,
    `<meta property="og:image" content="${o.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(o.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(o.title)}" />`,
    `<meta name="twitter:description" content="${esc(o.description)}" />`,
    `<meta name="twitter:image" content="${o.image}" />`,
  ].join('\n    ');

export function getPages(): Page[] {
  const ogImage = abs('/og-image.jpg');
  const homeUrl = `${SITE_URL}/`;

  const homeGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      organization(),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: homeUrl,
        name: 'FIT X FREAK – Best Gym in Vadodara',
        inLanguage: 'en-IN',
        publisher: { '@id': ORG_ID },
      },
      gym('op-road', `${SITE_URL}${BRANCH_ROUTES['op-road'].path}/`),
      gym('fatehgunj', `${SITE_URL}${BRANCH_ROUTES.fatehgunj.path}/`),
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  const pages: Page[] = [
    {
      path: '/',
      file: 'index.html',
      head: [
        commonHead({
          title: HOME_ROUTE.title,
          description: HOME_ROUTE.description,
          url: homeUrl,
          image: ogImage,
          imageAlt: 'FIT X FREAK gym in Vadodara – training floor',
        }),
        `<link rel="preload" as="image" href="${BRAND_ASSETS.heroBg}" fetchpriority="high" />`,
        jsonLd(homeGraph),
      ].join('\n    '),
    },
  ];

  (Object.keys(BRANCH_ROUTES) as BranchId[]).forEach((id) => {
    const r = BRANCH_ROUTES[id];
    const url = `${SITE_URL}${r.path}/`;
    const loc = LOCATIONS.find((l) => l.id === id)!;
    pages.push({
      path: r.path,
      file: `${r.path.slice(1)}/index.html`,
      head: [
        commonHead({ title: r.title, description: r.description, url, image: ogImage, imageAlt: loc.photoAlt }),
        jsonLd({
          '@context': 'https://schema.org',
          '@graph': [
            organization(),
            gym(id, url),
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'FIT X FREAK – Best Gym in Vadodara', item: homeUrl },
                { '@type': 'ListItem', position: 2, name: r.h1, item: url },
              ],
            },
          ],
        }),
      ].join('\n    '),
    });
  });

  pages.push({
    path: '/404',
    file: '404.html',
    notFound: true,
    head: commonHead({
      title: 'Page not found | FIT X FREAK Vadodara',
      description: 'This page does not exist. Visit FIT X FREAK – gym in Vadodara at OP Road and Fatehgunj.',
      url: homeUrl,
      image: ogImage,
      imageAlt: 'FIT X FREAK gym in Vadodara',
      noindex: true,
    }),
  });

  return pages;
}
