# Comfort Techs — Website Build Brief

## Project goal
Rebuild comforttechsac.com as a premium, scroll-animated, conversion-focused single-page website that elevates the Comfort Techs brand above competitor norms while preserving the warm, family-owned, bilingual-Latino-owned story.

## Design direction

### Color system (locked)
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0B1220` | Primary text, dark sections |
| `--navy` | `#0B3D91` | Primary brand, headings on light, dark blocks |
| `--sky` | `#0E72D6` | Secondary blue, links, accents |
| `--ember` | `#FF6A2B` | Primary CTA, urgency, highlights |
| `--ember-deep` | `#E5531A` | CTA hover |
| `--paper` | `#F5F8FC` | Page background |
| `--mist` | `#E6EEF8` | Card backgrounds, dividers |
| `--white` | `#FFFFFF` | Cards, contrast |
| `--muted` | `#5B6776` | Secondary copy, captions |

### Typography
- Headings + display: **Inter** (700/800, tight tracking)
- Editorial pull-quote: **Instrument Serif** (regular)
- Body: **Inter** (400/500, 1.6 line-height)
- Eyebrows: Inter, 12px, uppercase, `letter-spacing: .18em`

### Animation language
- GSAP + ScrollTrigger
- Hero: parallax on background, text reveal on stagger, animated trust bar
- Section transitions: fade-up + slight Y translate (40px), stagger children
- Cards: hover lift (translateY -6px) + shadow expand
- Numbers (combined experience, awards, year): count-up with 2s fallback timeout
- Marquee row of accreditation badges (slow horizontal loop)
- All animations respect `prefers-reduced-motion`

### Photography style
- Real team and founder portraits (Isidro front and center)
- HVAC equipment shots from existing site, restyled with overlay gradient
- 3D placeholder slot reserved in hero for future scroll-stop video

## Site architecture (single-page + 1 client deliverable)

```
site/
├── index.html                      # Single long-scroll homepage
├── competitive-analysis.html       # Client-only PDF-ready report (noindex)
├── 404.html
├── robots.txt
├── sitemap.xml
├── css/styles.css
├── js/main.js
└── assets/...
```

### Single-page sections (in scroll order)
1. **Sticky nav** — logo, services menu, phone + Book Service CTA
2. **Hero** — headline, founder portrait, trust bar (Amana 2x, NATE, TACCA, Daikin), dual CTA
3. **Trust marquee** — accreditations scrolling
4. **Services** — 12-card grid with hover reveal
5. **Why Comfort Techs** — 4 pillars (Family-owned, 70 yrs combined, Bilingual, 24/7)
6. **Specials** — $8,888 / $89mo / $29 tune-up / Free water heater
7. **Founder story** — Isidro Ramirez portrait + bio + values
8. **Team** — meet the techs (6 portraits)
9. **Service area** — visual list of cities
10. **Testimonials placeholder** — Google + Yelp links, sample carousel
11. **Final CTA** — emergency 24/7 banner with phone + form
12. **Footer** — contact, hours, address, social, sitemap, **Chatbot Boy AI credit**

## Content framework

### Homepage headline (3 options — choose A)
- **A. "Your HVAC Lifesaver in San Antonio."** *(keeps existing positioning)*
- B. "When the Texas heat won't quit, neither do we."
- C. "Family-owned comfort. NATE-certified care."

Selected sub: *Free same-day estimates. 24/7 emergency service. Family-owned since 2017.*

### Primary CTA (locked)
- Mobile/desktop: **"Call (210) 201-0771"** (phone, ember background)
- Secondary: **"Request Service"** (form anchor, outlined)

### Word count target per section
- Hero: 25–35 words
- Each service card: 15 words
- Founder story: 120–150 words
- Why-us pillars: 20 words each

## Conversion playbook

| Goal | Mechanism | Placement |
|---|---|---|
| Phone call | tel: link, sticky bottom on mobile | Header, hero, every CTA section, footer, sticky |
| Form lead | Inline form anchored at `#book` | Hero secondary, final CTA |
| Special-offer claim | Direct mention in form pre-fill via URL hash | Specials section |

### Trust signal stack (placement, top → bottom)
1. Hero trust bar: Amana Newcomer 2024 + 2025, NATE-certified, TACCA, Daikin Comfort Pro
2. "70+ years combined experience" stat row
3. 12-year warranty callout
4. Founder credential line: "TDLR-licensed since 2006"
5. Real Google + Yelp links in testimonials
6. Service area roll showing local depth

## SEO targets
- Primary: "hvac san antonio", "ac repair san antonio", "emergency hvac san antonio"
- Differentiators: "amana hvac dealer san antonio", "bilingual hvac san antonio", "latino owned hvac"
- Schema: `LocalBusiness` + `HVACBusiness` with full address, hours, geo, service area

## Tech stack
- Static HTML + CSS + vanilla JS
- GSAP 3.12 + ScrollTrigger via CDN
- Inter + Instrument Serif via Google Fonts
- Form action placeholder (Formspree/Netlify Forms — note in README)
- Self-hosted images in `site/assets/`
- `netlify.toml` pinning publish dir to `site/`

## Mobile-first decisions (locked from skill gotchas)
- Real drawer nav (toggle `.open`, body scroll lock, ESC + backdrop close)
- All inputs `font-size: 16px` on mobile (no iOS zoom)
- All tap targets ≥ 44px
- Wordmark hides at ≤380px
- Scroll-reveal 3-layer fallback (IO + 600ms + 3s force)
- Count-up only on real quantities, year fields stay static

## Out of scope (v1)
- Backend form processing (placeholder only)
- Blog content (link to existing if needed)
- Booking calendar / payment portal
- Individual service detail pages (single-page for v1)
