# Mediterráneo Real Estate

Marketing site for **Mediterráneo Real Estate**, a local agency in Sueca (Valencia) and the Ribera Baixa. It is a static site: who they are, where to see listings, and how to get in touch.

**Live site:** [mediterraneorealestate.vercel.app](https://mediterraneorealestate.vercel.app/)

The site language is Spanish. This README and [PROJECT_PLAN.md](PROJECT_PLAN.md) are in English so GitHub visitors can understand the project.

## Pages

- **Home** (`index.html`) — hero, listings shortcuts, about, and the contact form
- **Contact** (`contacto.html`) — office details and the same form, on its own URL

Listings are not stored here. Visitors open [Idealista](https://www.idealista.com/pro/mediterraneo-real-estate/) or [Instagram](https://www.instagram.com/inmobiliaria.mediterraneo/).

## Run locally

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Design

- Ink `#1d1d1f`, Mediterranean teal `#0f6f8a`, sand accents
- Newsreader for headings, Geist for body text
- Responsive layout with a mobile menu
