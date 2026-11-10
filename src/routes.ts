/**
 * Route table for the site. Client-safe (no Node APIs) – used by the React app,
 * the server renderer and the sitemap generator.
 *
 * Each branch gets its own crawlable URL so that Google can rank it for
 * "gym in Old Padra Road Vadodara" / "gym in Fatehgunj Vadodara" searches.
 */
export type BranchId = 'op-road' | 'fatehgunj';

export interface BranchRoute {
  id: BranchId;
  /** Path without trailing slash. */
  path: string;
  title: string;
  description: string;
  h1: string;
  area: string;
  intro: string;
  whyPoints: string[];
}

export const HOME_ROUTE = {
  path: '/',
  title: 'Best Gym in Vadodara | FIT X FREAK – OP Road & Fatehgunj',
  description:
    'FIT X FREAK – gym in Vadodara with 2 branches: OP Road & Fatehgunj. Certified trainers, imported equipment, 1-day free trial. Call +91 6354661053.',
};

export const BRANCH_ROUTES: Record<BranchId, BranchRoute> = {
  'op-road': {
    id: 'op-road',
    path: '/gym-in-old-padra-road-vadodara',
    title: 'Gym in Old Padra Road, Vadodara | FIT X FREAK OP Road',
    description:
      'FIT X FREAK OP Road: gym on 7-8th Floor, Avishkar Complex, Old Padra Road, Vadodara. Strength equipment, certified trainers, free trial. Call +91 6354661053.',
    h1: 'Gym in Old Padra Road, Vadodara – FIT X FREAK OP Road',
    area: 'Old Padra Road',
    intro:
      'FIT X FREAK OP Road is our flagship gym in Vadodara, located on the 7th and 8th floors of Avishkar Complex on Old Padra Road – near McDonald’s and opposite Bankars Heart Hospital, close to Haripura and IOC Nagar. Members train on imported biomechanical machines, an Olympic free-weight deck and plate-loaded racks, with certified coaches on the floor.',
    whyPoints: [
      'Rooftop-elevation training floor on the 7th and 8th floor',
      'Imported biomechanical racks and an Olympic free-weight deck',
      'Certified personal trainers for fat loss, hypertrophy and strength',
      'Open early morning to late evening, every day of the week',
    ],
  },
  fatehgunj: {
    id: 'fatehgunj',
    path: '/gym-in-fatehgunj-vadodara',
    title: 'Gym in Fatehgunj, Vadodara | FIT X FREAK Fatehgunj',
    description:
      'FIT X FREAK Fatehgunj: gym at Jayesh Colony, Fatehgunj, Vadodara. Strength equipment, certified trainers, free trial. Call +91 6354661053.',
    h1: 'Gym in Fatehgunj, Vadodara – FIT X FREAK Fatehgunj',
    area: 'Fatehgunj',
    intro:
      'FIT X FREAK Fatehgunj is our hypertrophy-focused gym at Jayesh Colony, Fatehgunj, Vadodara. The branch has a high-intensity muscle-building floor, cable stations and a dedicated personal-coaching area, so you can train for strength, fat loss or general fitness with certified trainers guiding you.',
    whyPoints: [
      'High-intensity hypertrophy floor with cable stations',
      'Dedicated personal-coaching area',
      'Certified personal trainers for fat loss, hypertrophy and strength',
      'Open early morning to late evening, every day of the week',
    ],
  },
};

export const normalizePath = (p: string): string => {
  const clean = p.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export const branchForPath = (p: string): BranchRoute | null =>
  Object.values(BRANCH_ROUTES).find((r) => r.path === normalizePath(p)) ?? null;

/** Public URL path with trailing slash (matches the generated folder/index.html). */
export const branchHref = (id: BranchId): string => `${BRANCH_ROUTES[id].path}/`;
