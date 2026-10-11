# Larisha Health Care — marketing site

Next.js 16 (App Router) + Tailwind v4. Every page is a server component, prerendered to static HTML at build time. The only client JS is the mobile-menu closer.

## Run

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) before building for production. It drives canonical URLs, the sitemap, robots.txt and Open Graph tags.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, pain points, services, process, why Larisha |
| `/services` | The six services + engagement models |
| `/how-it-works` | Six claim stages + onboarding (HowTo schema) |
| `/for-hospitals` | Audiences, outcomes, portal features |
| `/about` | Story, values, what we are and aren't |
| `/faq` | 12 Q&As (FAQPage schema) |
| `/contact` | Demo form (server action) → `/contact/thank-you` |

## Contact form → backend

The form's server action posts each enquiry to the claims backend (`POST /v1/leads` in
`lavisha-insurance-processing-BE`), which stores it and notifies every SUPER_ADMIN / ADMIN in the app.
The request is made server-to-server with a shared key, so the key never reaches the browser.

| Env var | Where | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | website | `https://larishahealthcare.com` |
| `LEADS_API_URL` | website | `https://api.larishahealthcare.com/v1` |
| `LEADS_API_KEY` | website **and** backend | same random secret in both, e.g. `openssl rand -hex 32` |

If the key is missing or the backend is down, the visitor stays on the form and sees an error. No fake
"thank you" page is shown.

## Before going live

- [ ] Set the env vars above (website host + backend `.env`), and deploy the backend change.
- [ ] Point `larishahealthcare.com` DNS at the host and submit `/sitemap.xml` in Google Search Console.

## SEO / performance notes

- Per-page `title`, `description`, canonical, OG/Twitter tags via `src/lib/seo.ts`
- JSON-LD: ProfessionalService (site-wide), BreadcrumbList (inner pages), FAQPage, HowTo
- Generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, OG image, favicons
- Fonts self-hosted through `next/font`, critical CSS inlined, modern browserslist, no hero image (the LCP element is text)
