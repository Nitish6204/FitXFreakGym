import { BRAND_ASSETS, LOCATIONS, TRAINERS, UNIFIED_EQUIPMENT } from './data/gymData';
import { BRANCH_ROUTES, branchHref, type BranchId } from './routes';

/**
 * Static, crawlable landing page for one gym branch.
 * No client-side state on purpose: it is prerendered to plain HTML at build time.
 */
export default function BranchPage({ branchId }: { branchId: BranchId }) {
  const route = BRANCH_ROUTES[branchId];
  const other: BranchId = branchId === 'op-road' ? 'fatehgunj' : 'op-road';
  const otherRoute = BRANCH_ROUTES[other];
  const branch = LOCATIONS.find((l) => l.id === branchId)!;
  const equipment = UNIFIED_EQUIPMENT.filter((e) => e.branchId === branchId);
  const waText = encodeURIComponent(`Hello ${branch.name}, I would like to enquire about membership and a free trial.`);

  const faqs = [
    {
      q: `Where is FIT X FREAK ${route.area} gym located in Vadodara?`,
      a: `FIT X FREAK ${route.area} is at ${branch.address}.`,
    },
    {
      q: `What are the gym timings at FIT X FREAK ${route.area}?`,
      a: branch.timings.map((t) => `${t.day}: ${t.hours}`).join('; ') + '.',
    },
    {
      q: `How can I get a free trial at FIT X FREAK ${route.area}?`,
      a: `Call ${branch.contactNumberFormatted}, message us on WhatsApp, or fill the enquiry form on our home page and choose the ${route.area} branch.`,
    },
  ];

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface dark">
      <header className="border-b border-outline-variant/20 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-gutter h-16 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2.5" title="FIT X FREAK – Best Gym in Vadodara">
            <img
              src={BRAND_ASSETS.logo}
              alt="FIT X FREAK gym logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain bg-white/95 p-0.5"
            />
            <span className="font-headline-md uppercase tracking-wider text-lg">FIT X FREAK</span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-4 text-sm">
            <a href="/#locations" className="text-on-surface-variant hover:text-on-surface">Locations</a>
            <a href="/#trainers" className="hidden sm:inline text-on-surface-variant hover:text-on-surface">Trainers</a>
            <a href="/#contact" className="px-3 py-1.5 rounded bg-primary text-on-primary font-bold text-xs uppercase">
              Free Trial
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
        <nav aria-label="Breadcrumb" className="text-xs text-on-surface-variant">
          <a href="/" className="hover:text-on-surface">Best Gym in Vadodara</a>
          <span className="mx-2">/</span>
          <span className="text-on-surface">{route.area}</span>
        </nav>

        <section className="flex flex-col gap-space-md">
          <h1 className="font-headline-lg uppercase text-3xl sm:text-5xl leading-tight">{route.h1}</h1>
          <p className="text-on-surface-variant leading-relaxed max-w-3xl">{route.intro}</p>
          <div className="flex flex-wrap gap-space-sm pt-space-xs">
            <a
              href={`tel:+91${branch.contactNumber}`}
              className="px-5 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-bold uppercase"
            >
              Call {branch.contactNumberFormatted}
            </a>
            <a
              href={`https://wa.me/91${branch.contactNumber}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-bold uppercase"
            >
              WhatsApp
            </a>
            <a
              href={branch.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-sm font-semibold uppercase"
            >
              Get Directions
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <img
            src={branch.photo}
            alt={branch.photoAlt}
            width={1000}
            height={1778}
            decoding="async"
            className="w-full h-72 md:h-full max-h-[460px] object-cover rounded-2xl border border-outline-variant/30"
          />
          <div className="flex flex-col gap-space-md p-space-lg rounded-2xl bg-surface-container border border-outline-variant/30">
            <h2 className="font-headline-md uppercase text-xl">Address &amp; Timings</h2>
            <address className="not-italic text-sm leading-relaxed text-on-surface">
              <strong>{branch.name}</strong>
              <br />
              {branch.address}
            </address>
            <p className="text-sm">
              Phone:{' '}
              <a className="text-primary font-mono font-bold" href={`tel:+91${branch.contactNumber}`}>
                {branch.contactNumberFormatted}
              </a>
            </p>
            <table className="text-sm w-full">
              <caption className="sr-only">Gym timings at FIT X FREAK {route.area}</caption>
              <tbody>
                {branch.timings.map((t) => (
                  <tr key={t.day} className="border-t border-outline-variant/20">
                    <th scope="row" className="py-1.5 pr-3 text-left font-medium text-on-surface-variant">{t.day}</th>
                    <td className="py-1.5 text-right">{t.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-space-md">
          <h2 className="font-headline-lg uppercase text-2xl sm:text-3xl">Why train at FIT X FREAK {route.area}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm text-sm">
            {route.whyPoints.map((pt) => (
              <li key={pt} className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20">{pt}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-space-md">
          <h2 className="font-headline-lg uppercase text-2xl sm:text-3xl">Gym equipment at {route.area}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {equipment.map((item) => (
              <article key={item.id} className="rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={1778}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover"
                />
                <div className="p-space-md flex flex-col gap-1">
                  <h3 className="font-headline-sm uppercase text-base">{item.name}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.description}</p>
                  <p className="text-xs text-primary font-semibold">Targets: {item.targetMuscle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-space-sm">
          <h2 className="font-headline-lg uppercase text-2xl sm:text-3xl">Personal trainers in Vadodara</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-3xl">
            Our coaching team includes{' '}
            {TRAINERS.slice(0, 5).map((t) => t.name).join(', ')} and more.{' '}
            <a href="/#trainers" className="text-primary font-semibold hover:underline">
              Meet all FIT X FREAK trainers
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-space-sm">
          <h2 className="font-headline-lg uppercase text-2xl sm:text-3xl">FAQs – gym in {route.area}</h2>
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl bg-surface-container border border-outline-variant/20 p-space-md">
              <summary className="cursor-pointer font-semibold text-sm sm:text-base">{f.q}</summary>
              <p className="pt-space-sm text-sm text-on-surface-variant leading-relaxed">{f.a}</p>
            </details>
          ))}
        </section>

        <section className="p-space-lg rounded-2xl bg-surface-container border border-primary/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div>
            <h2 className="font-headline-md uppercase text-xl">Also in Vadodara: FIT X FREAK {otherRoute.area}</h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Prefer a different side of the city? Visit our second branch.
            </p>
          </div>
          <a
            href={branchHref(other)}
            className="px-5 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-sm font-semibold uppercase whitespace-nowrap"
          >
            Gym in {otherRoute.area} →
          </a>
        </section>
      </main>

      <footer className="border-t border-outline-variant/20 bg-surface-container-low py-space-lg">
        <div className="max-w-5xl mx-auto px-gutter text-xs text-on-surface-variant flex flex-col gap-1">
          <strong className="text-on-surface">FIT X FREAK (FitX Freak Gym) – Vadodara, Gujarat</strong>
          <span>{branch.address}</span>
          <span>
            <a href="/" className="hover:text-on-surface">Home</a> ·{' '}
            <a href={branchHref('op-road')} className="hover:text-on-surface">Gym in Old Padra Road</a> ·{' '}
            <a href={branchHref('fatehgunj')} className="hover:text-on-surface">Gym in Fatehgunj</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
