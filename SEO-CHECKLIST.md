# FIT X FREAK – SEO checklist

## 1. Deploy karte waqt (zaroori)

```bash
SITE_URL=https://www.YOURDOMAIN.com npm run build   # phir dist/ folder deploy karo
```

- `SITE_URL` set nahi kiya to canonical / sitemap / schema abhi bhi temporary AI Studio (`run.app`) URL par jayenge.
- `dist/` ko **static host** par deploy karo (Netlify, Cloudflare Pages, Firebase Hosting, Vercel, Nginx). `404.html` ko 404 status ke saath serve hona chahiye.
- Deploy ke baad **Google Search Console** me domain add karo, `sitemap.xml` submit karo, aur home + 2 branch pages par "Request Indexing" karo.

## 2. Google Business Profile (local ranking ka sabse bada factor)

"Vadodara best gym" / "gym near me" jaise searches me Google Maps pack (top 3) sabse zyada traffic deta hai, aur wo website se nahi, **Business Profile** se decide hota hai.

- Har branch ka alag profile banao aur verify karo (category: *Gym*). Website = branch page URL
  (`/gym-in-old-padra-road-vadodara/`, `/gym-in-fatehgunj-vadodara/`).
- Name / Address / Phone profile me **bilkul website jaisa** ho (NAP consistency).
- Hours, 15–20 real photos, services add karo; har hafte 1 post.
- Real members se Google reviews maango (link WhatsApp par bhejo) aur har review ka reply do. Fake reviews mat lo.
- JustDial, Sulekha, Facebook, Instagram bio me wahi NAP + website link daalo.

## 3. Content jo ranking badhata hai

- Naye URLs par guides/blog: "Gym fees in Vadodara", "Weight loss plan in Vadodara", "Best gym for beginners near Old Padra Road".
- Reels/YouTube me "FIT X FREAK Vadodara" naam bolo aur description me website link do.

## 4. Confirm karna baaki hai (data me inconsistency mili)

- Dono branches ka phone number same (`6354661053`) hai. Agar alag numbers hain to `src/data/gymData.ts` aur `src/seo.ts` me update karo.
- Sunday timing: `timings` me 07:00–21:00 hai, par `hoursSummary` me "Mon–Sun 06:00–23:00". Schema `timings` wali value use karta hai.
- `BRANCH_GEO` (latitude/longitude) in `src/seo.ts` ko Google Maps se verify karo.
- Facebook link (`facebook.com/fitxfreakvadodara`), YouTube (`@fitxfreak`) aur trainers ke Instagram handles real hone chahiye, check karo.
