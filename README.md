# Comfort Techs — Website Rebuild

A premium scroll-animated rebuild of [comforttechsac.com](https://www.comforttechsac.com/) — Comfort Techs Air Conditioning and Heating, San Antonio's family-owned, NATE-certified HVAC company.

## What's in this repo

```
.
├── netlify.toml                    # publish = "site", asset cache headers
├── vercel.json                     # outputDirectory = "site"
├── research/
│   ├── 01-client-brand.md          # Brand extraction from existing site
│   ├── 02-competitor-analysis.md   # San Antonio HVAC market analysis
│   ├── 03-build-brief.md           # Locked design + build decisions
│   └── 04-quality-audit.md         # Final audit results
└── site/                           # ← this is the publish directory
    ├── index.html
    ├── 404.html
    ├── competitive-analysis.html   # Client deliverable, noindex
    ├── robots.txt
    ├── sitemap.xml
    ├── css/styles.css
    ├── js/main.js
    └── assets/
        ├── logo.png
        ├── portfolio/              # Hero, content imagery
        └── founders/               # Founder + team portraits
```

## Run locally

```bash
cd site
python -m http.server 8765
# → http://localhost:8765
```

## Deploy

### Netlify
Drag the project root into Netlify. `netlify.toml` already pins `publish = "site"`.

### Vercel
```bash
vercel deploy
```
`vercel.json` pins `outputDirectory: "site"`.

## Form integration

The "Request service" form in `index.html` currently has a JS-only success message. To make it live:

- **Netlify Forms:** add `netlify` and `data-netlify="true"` to the `<form>` tag.
- **Formspree:** change `action="#"` to `action="https://formspree.io/f/YOUR_FORM_ID"`.

## Content sources

All text and images were extracted from comforttechsac.com via WebFetch. Founder and team portraits are downloaded and self-hosted in `site/assets/founders/` — never hot-linked.

## Tech

- Vanilla HTML + CSS + JS (no framework)
- GSAP 3.12 + ScrollTrigger via CDN
- Inter + Instrument Serif via Google Fonts
- Mobile-first responsive
- Lighthouse-targeted: 90+ across the board
- `prefers-reduced-motion` respected throughout

## Design tokens

| Token | Value |
|---|---|
| `--navy` | `#0B3D91` |
| `--sky` | `#0E72D6` |
| `--ember` | `#FF6A2B` |
| `--ink` | `#0B1220` |
| `--paper` | `#F5F8FC` |

Heading font: Inter (700/800). Editorial accent: Instrument Serif.

## Credits

Built by [Chatbot Boy AI](https://www.chatbotboy.ai/).
