# Project plan

## Goal

Give Mediterráneo Real Estate a simple public site for Sueca and the Ribera Baixa: explain the agency, send people to live listings, and collect contact leads. The site should also be findable on Google at the current Vercel URL.

The public pages are in Spanish. This document is in English for anyone reading the GitHub repo.

## What it is and is not

**It is** a static two-page site (HTML, CSS, JavaScript). There is no framework, CMS, or database.

**It is not** a property portal. Homes are not imported or listed here. The visitor leaves to Idealista or Instagram. There is also no custom mail server: the form is delivered by Web3Forms to the inbox tied to that Web3Forms account.

## Pages and content

**Home (`index.html`)**

1. Full-bleed hero with the house photo, headline, and a contact CTA
2. **Ver propiedades** — two cards linking out to Idealista and Instagram
3. **Sobre nosotros** — three short blocks about the agency
4. **Contacto** — phone, email, hours, and the form

**Contact (`contacto.html`)**

Same office details and form, without the rest of the homepage. The nav “Contacto” link goes here so the page has its own URL for sharing and Google.

Public contact shown on the site: phone `961 230 000`, email `mediterraneorealestate24@gmail.com`, hours weekdays 10:00–14:00 / 17:00–20:00 and Saturdays 10:00–14:00.

## Folder layout

```
index.html          Home
contacto.html       Contact page
css/styles.css      Layout, brand tokens, form card, hero animation
js/app.js           Mobile nav, header on scroll, form validation and send
assets/             Logo, hero photo, about photos, platform icons
robots.txt          Allow indexing; points to the sitemap
sitemap.xml         Home and contacto.html
ANALYTICS-Y-SEO.md  Internal Google Analytics / Search Console notes (Spanish)
```

## Contact form

Both pages use the same fields: name, email, phone (required), and an optional message.

`js/app.js` checks the fields in the browser, then POSTs JSON to Web3Forms (`https://api.web3forms.com/submit`). The email subject is *Nuevo mensaje desde la web — Mediterráneo Real Estate*. On success the form shows *¡Mensaje enviado!*; on failure it asks the visitor to retry or write to the fallback address in the error text.

The Web3Forms access key lives in `js/app.js`. It is public by design for that service; do not commit a different private API secret into this repo.

## Design

- Ink `#1d1d1f`, teal accent `#0f6f8a`, sand `#d9c7a0` / `#e8f2f4` on the form card
- Newsreader (headings) and Geist (body), loaded from Google Fonts
- Pill buttons (40px, full rounding) and 28px cards
- Overlay header that turns solid on scroll; hero text slides in
- Mobile: hamburger nav

## Hosting

| Piece | Role |
| --- | --- |
| GitHub `main` | Source of truth |
| Vercel | Builds nothing — it just serves the static files after each push |
| Live URL | [https://mediterraneorealestate.vercel.app/](https://mediterraneorealestate.vercel.app/) |

To publish:

1. Commit the change in this repo
2. `git push origin main`
3. Vercel deploys that commit

No Vercel CLI step is required on the laptop.

## SEO and measurement

Already in the HTML and config files:

- Canonical tags, Open Graph, and Twitter cards using the live Vercel URL
- `RealEstateAgent` JSON-LD (Sueca, phone, email, Idealista, Instagram, opening hours)
- `robots.txt` + `sitemap.xml` for `/` and `/contacto.html`
- Google Analytics 4 ID `G-HPLTVZCX7P` on both pages
- Search Console HTML verification tag

Analytics measures visits. Search Console is what Google uses to index the URL. For “inmobiliaria Sueca”, a Google Business Profile usually matters more than the site alone. Step-by-step notes (in Spanish) are in [ANALYTICS-Y-SEO.md](ANALYTICS-Y-SEO.md).

Because the public host is `mediterraneorealestate.vercel.app`, Analytics data streams and Search Console must use **that** URL prefix, not an older `*.vercel.app` hostname.

## Out of scope (for now)

- In-site property catalogue or Idealista API
- Custom domain (when that exists: update canonicals, sitemap, robots, and add a 301 from the Vercel URL)
- Backend, user accounts, or a CMS
