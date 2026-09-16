---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: index.html (landing page)

Mode: Persuade. Single-page marketing landing for Kappa Solutions, English, static HTML/CSS.

## Audience and job
Procurement managers, plant/operations leads, and project owners at industrial companies evaluating a first call with a Miami trading + logistics partner. Job: confirm scope (sourcing + logistics + industries), judge legitimacy, get a human on the line.

## Action
Primary: request a quote (form, no backend; composes a `mailto:` to info.kappasolutions26@gmail.com). Equal peers: call +1 (645) 202-9009, email. Address shown as proof of a physical office.

## Proof / content on hand
Four services, seven industries, three stated benefits, confirmed contact data (PRODUCT.md). Seven Unsplash photos in `assets/img/` with embedded origin. No clients, testimonials, certifications, or numbers; none may be invented.

## Constraints
No eyebrow/kicker labels. Authored SVG icons in one stroke weight. Self-hosted Archivo variable. Logo is a generated inline SVG placeholder pending owner approval.

## Direction contract

THESIS: The category standard for a global logistics company, executed at the finish level of Flexport, Maersk, and DHL: one photographic port hero, one headline, one action, then services, industries, benefits, and contact in the order a buyer expects. It refuses the unfinished Wix-template arrangement the reference site shipped: a thin hero band, industry names as bare stacked H1s, placeholder social links, and stock icons without a system.

OWN-WORLD: Navy `#0A1E3C` owns the hero overlay, the industries band, and the footer; white content sections alternate with cool grey `#EEF2F7`. Ocean blue `#1B5FBF` for links and secondary marks; signal amber `#F5A524` reserved for the primary action only. Ink `#0F172A`, hairlines `#D7DEE8`, radius 6px, shadows offset 0/8px with 24px blur at 10% navy. One face, Archivo variable: display at width 112 / weight 700 with -0.02em tracking, body at width 100 / weight 400. Icons authored inline SVG, 24px grid, 1.75px stroke, round caps. Photography full-bleed or in 4:3 blocks, never inside icon cards.

STORY: The visitor understands in one screen that Kappa Solutions buys, sells, and distributes industrial products across seven sectors and moves them locally and internationally from Miami. They believe it because the scope is specific, the office address and phone are real, and the finish matches the logistics majors they already trust. They act by calling, emailing, or sending the quote form.

FIRST VIEWPORT: Sticky white nav, 72px: logo left, Services / Industries / Company / Contact center-right, amber "Request a quote" button right. Below, a hero filling the remaining viewport, capped at 900px on taller screens (canon sites cap the hero rather than stretch it): full-bleed aerial container-terminal photo with a navy-to-transparent overlay from the left. Left 7 of 12 columns: H1 at 4.5rem desktop "Industrial sourcing and logistics, from Miami to anywhere.", one 1.25rem line naming buy/sell/distribute + transport/storage/distribution, then two actions side by side: amber "Request a quote" and a white-outlined "Call +1 (645) 202-9009". Anchored to the hero's bottom edge: a white strip listing the seven industries as a single horizontal row (scroll-snap on mobile) so scope reads before the first scroll.

FORM: The category standard (canon), the standing exit, chosen by the user over the roll (index 5 of 7 grounded candidates, Container Stencil) and the pick (Pro-forma Quotation). Referents named by the user: Flexport, Maersk, DHL. Seed key 28dc6f9f. Code-led build; no comp.

SIGNATURE INTERACTION AND MOTION: One authored entrance: on load the H1, subline, and actions rise 24px and fade in with a 120ms stagger, exponential ease-out, 700ms; nothing else animates on entrance. Service blocks: image scales 1.03 over 600ms on hover, block lifts 2px with the offset shadow. The nav gains its hairline after 8px of scroll. Focus rings, selection color, and scrollbar are themed from the palette.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Form backend (Formspree/Netlify Forms) — mailto until decided.
- Logo approval by the owner.
- Social links: none confirmed; omitted rather than placeholdered.
