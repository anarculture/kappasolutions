---
name: Kappa Solutions
description: The category standard for a global logistics company, at the finish level of Flexport, Maersk, and DHL.
colors:
  navy: "#0a1e3c"
  navy-800: "#122a4d"
  ocean: "#1b5fbf"
  ocean-700: "#164d9b"
  amber: "#f5a524"
  amber-600: "#dd8f0e"
  ink: "#0f172a"
  ink-2: "#3b4a63"
  ink-3: "#64748b"
  line: "#d7dee8"
  grey: "#eef2f7"
  white: "#ffffff"
  on-navy-2: "#b9c7dd"
  error: "#c0392b"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "normal"
  small:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "3px"
  md: "6px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "36px"
  xxl: "64px"
  grid-gap: "32px"
  gutter: "clamp(20px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 120px)"
  section-head: "clamp(40px, 5vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.navy}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.amber-600}"
    textColor: "{colors.navy}"
  button-primary-lg:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-primary-sm:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "16px 26px"
  button-ghost-hover:
    backgroundColor: "rgba(255, 255, 255, 0.14)"
    textColor: "{colors.white}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  card-service:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "28px 28px 32px"
  form-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(24px, 3vw, 36px)"
  industry-tile:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "32px 28px 30px"
  industry-tile-hover:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.white}"
  nav:
    backgroundColor: "rgba(255, 255, 255, 0.92)"
    textColor: "{colors.ink}"
    height: "72px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 0"
  industry-strip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    height: "64px"
  footer:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy-2}"
    padding: "64px 0 28px"
---

# Design System: Kappa Solutions

## Overview

**Creative North Star: "The Port Authority"**

The system is the category standard for a global logistics company, executed at the finish level of Flexport, Maersk, and DHL and chosen deliberately over any signature quirk. It reads as the institution that runs the port: deep navy bands anchor the page at the top (hero), the middle (industries), and the bottom (footer), and white and cool-grey content sections alternate between them. Photography is real industrial work (a container terminal, a loading dock, a warehouse aisle, a welder) and it is either full-bleed or framed in 4:3 blocks; it never sits inside an icon tile.

Density is corporate-comfortable: generous section padding, a 1200px container, three-up card grids, and one column of copy that never exceeds about 62 characters. One typeface carries everything. Archivo variable is widened to 112 and set bold with negative tracking for every heading, then returned to normal width and regular weight for body text. That width shift is the entire typographic hierarchy; there is no second family, no uppercase, no tracked-out label.

Motion is a single authored moment (the hero's rise-and-fade on load) plus quiet hover responses on cards, tiles, and links. Confirmed rejections: no eyebrow or kicker labels above headings, no glyph or icon-font icons, no shadows on resting cards, no black.

**Key Characteristics:**
- Navy anchors at top, middle, and bottom; white and grey alternate between them.
- One accent for action (amber), one for wayfinding (ocean blue); both rare.
- One face, two widths: Archivo at width 112 / weight 700 for headings, 100 / 400 for text.
- Hairlines draw structure; shadows are reserved for two lifted surfaces and hover.
- A single 6px radius on every rectangle.
- Authored inline SVG icons on a 24px grid, 1.75px stroke, round caps, no fill.

## Colors

A navy-and-white institutional palette with one ocean blue for wayfinding and one signal amber held back for the primary action.

### Primary
- **Harbor Navy** (`{colors.navy}`): The anchoring surface. Hero base and overlay tint, the industries band, the footer, the industry tiles, the logo mark, primary-button text, and the theme color. Paired with white text and `{colors.on-navy-2}` secondary text.
- **Harbor Navy, Raised** (`{colors.navy-800}`): The one step up from navy: industry-tile hover, the "Another industry?" tile at rest, and the scrollbar thumb.

### Secondary
- **Ocean Blue** (`{colors.ocean}`): Wayfinding and system state. Inline links, the underline on hovered nav links, every icon stroke on light surfaces (benefits, contact list, address pin), the dots on the industry strip, the global `:focus-visible` outline on light surfaces, input focus border and ring, `accent-color`, and `caret-color`.
- **Ocean Blue, Deep** (`{colors.ocean-700}`): Form status text on the grey contact section; text-weight ocean where the lighter step would fall short.

### Tertiary
- **Signal Amber** (`{colors.amber}`): The primary action and the system's own attention states only: the "Request a quote" and "Send request" buttons, text selection, and the `:focus-visible` outline inside navy surfaces (hero, industries band, footer), where ocean would vanish against navy.
- **Signal Amber, Pressed** (`{colors.amber-600}`): Primary-button hover.

### Neutral
- **Ink** (`{colors.ink}`): Body text, headings on light surfaces, nav links, contact links, form labels and input text. The darkest value in the system; there is no black.
- **Ink, Secondary** (`{colors.ink-2}`): Supporting copy in cards, section leads, benefit and company paragraphs, and the lighter half of the wordmark.
- **Ink, Tertiary** (`{colors.ink-3}`): Placeholders, the form note, the "(optional)" label.
- **Hairline** (`{colors.line}`): Every 1px divider and border on light surfaces: card borders, check-list rules, the benefits grid, the nav's scrolled hairline, the strip's bottom edge, and the 1.5px input border at rest.
- **Cool Grey** (`{colors.grey}`): The alternating section background (contact) and the placeholder behind loading card media.
- **White** (`{colors.white}`): Page background, card and form surfaces, the industry strip, text on navy, and the nav at 92% with a saturate/blur backdrop.
- **On-Navy Secondary** (`{colors.on-navy-2}`): Supporting text on navy: industry-tile descriptions, the industries section lead, footer body text, and the wordmark's second half in the footer.
- **Error** (`{colors.error}`): Invalid-field border after a submit attempt and the error status line. The only warm value besides amber.

### Named Rules
**The Amber Once Rule.** Amber marks the primary action and nothing else on a screen: one button per view, plus text selection and the focus ring only inside navy surfaces. It is never a text color, an icon stroke, a divider, or a decoration.

**The Navy Anchors Rule.** Navy owns whole bands, not fragments: the hero, the industries section, the footer. Between them, sections alternate white and cool grey. Text on navy is white; secondary text on navy is `{colors.on-navy-2}`, never a grey from the light palette.

**The Ocean Wayfinding Rule.** Anything that points somewhere or reports state is ocean blue: links, icon strokes on light surfaces, strip dots, the focus ring on light surfaces, input focus borders. Ocean never fills a button.

## Typography

**Display Font:** Archivo variable (wght 100–900, wdth 62–125), self-hosted; fallback Helvetica Neue, Arial, sans-serif
**Body Font:** Archivo variable (same file)
**Label/Mono Font:** none; labels are Archivo at 500–600

**Character:** A single grotesk that changes shape rather than family. Headings are Archivo pushed to width 112, bold, tight (`-0.02em` to `-0.025em`), balanced with `text-wrap: balance`; body is the same face at normal width and regular weight, set large (17px) with a 1.6 line height. Nothing is uppercase, nothing is tracked out.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 1.6rem + 4.2vw, 4.5rem)`, 1.04, width 112, `-0.025em`): The hero headline only; white on the navy overlay, capped at 14 characters per line (12 on mobile).
- **Headline** (700, `clamp(2rem, 1.4rem + 2.2vw, 3rem)`, 1.1, width 112, `-0.02em`): Section titles ("What we do", "Industries we serve"). White on navy sections.
- **Title** (700, 1.375rem, 1.25, width 112, `-0.02em`): Card and tile headings. Steps down to 1.25rem in industry tiles and 1.1875rem in the benefits row.
- **Lead** (400, 1.125rem, 1.6, `{colors.ink-2}`): The paragraph under a section headline and the contact intro; max width 62ch under headlines, 44ch in the contact column. The hero lead is its own fluid step, `clamp(1.0625rem, 1rem + 0.5vw, 1.3125rem)` at 1.5, max 52ch. The company vision paragraph is 1.25rem at weight 500 in ink.
- **Body** (400, 1.0625rem, 1.6): Everything else; card copy, company paragraphs, footer text.
- **Label** (500–600, 0.9375rem): Nav links (500), form labels (600), the industry strip (600, `0.01em`), card check-lists (400 in ink-2), buttons (600 at body size; small buttons at 0.9375rem, large at 1.0625rem). Sentence case, never uppercase.
- **Small** (400, 0.875rem): The form note and the footer legal line.

### Named Rules
**The One Face, Two Widths Rule.** Every heading is Archivo at width 112, weight 700, negative tracking; every text run is width 100, weight 400. Hierarchy comes from width, weight, and size; never from a second family, uppercase, or letter-spacing above `0.01em`.

**The Balanced Heading Rule.** Headings use `text-wrap: balance` and a character cap (14ch display, 62ch section head) so the last line is never an orphan.

## Layout

A single centered container of `min(100% - 2 * gutter, 1200px)` with a fluid gutter of `{spacing.gutter}`. The nav is sticky at 72px with a translucent white backdrop (92%, saturate 180% and 10px blur) and gains a hairline bottom border after 8px of scroll. The hero fills the remaining viewport below the nav but is capped at 900px (`min(100svh - 72px, 900px)`); on taller screens it stops rather than stretches. A 64px white strip is pinned to the hero's bottom edge and lists the seven industries in one row, each led by an 8px ocean dot.

Sections carry `{spacing.section}` of block padding and alternate surfaces in the order white, navy, white, grey, navy. Each section opens with a head block (headline plus lead, max 62ch) followed by `{spacing.section-head}` before the content. Grids: services three-up with `{spacing.grid-gap}`, industries four-up with 1px translucent-white gutters, benefits three-up divided by hairlines, company 1.1fr / 1fr, contact 1fr / 1.15fr, footer 1.4fr / 1fr / 1.2fr. A full-bleed two-image photo band (16:9 each) separates the industries section from the company section.

Spacing runs on a 4px rhythm; the reused steps are 8, 12, 14, 18, 20, 24, 28, 32, 36, 40, 48, and 64px. Inside a card body the gap is 14px; between form fields 18px; card padding is 28px with 32px at the bottom.

Breakpoints (max-width): **1024px** services go two-up, industries three-up, footer two columns. **860px** the nav collapses to a toggle and a white dropdown with hairline rows; the hero loses its cap and its overlay becomes a uniform 70% navy; the strip unpins and wraps; band, company, benefits, contact, and footer all stack to one column, with the company photo moving above its text. **640px** services and the form rows go one-up, industries two-up, hero buttons go full width. **360px** industries go one-up.

## Elevation & Depth

Depth is drawn, not cast. Structure comes from 1px hairlines (`{colors.line}` on light surfaces; white at 12% for the industry grid and its border, 14% for the footer's legal rule) and from tonal bands (white / grey / navy). Two surfaces are lifted at rest with a soft navy-tinted shadow: the quote form panel and the company photograph. Service cards are flat at rest and lift 2px with the standard shadow on hover. The mobile nav dropdown uses the same standard shadow. The hero carries no shadow; its depth is the overlay gradient (navy 92% at the left edge fading to 10% at the right, plus a top-to-bottom 15% / 0% / 45% pass) over the photograph. The nav's translucency and backdrop blur are the only glass in the system.

### Shadow Vocabulary
- **Standard** (`box-shadow: 0 8px 24px rgba(10, 30, 60, 0.10)`): The form panel at rest, service cards on hover, the mobile nav dropdown.
- **Large** (`box-shadow: 0 16px 40px rgba(10, 30, 60, 0.16)`): The company photograph at rest; the one image that is presented as an object rather than a fill.
- **Focus ring, inputs** (`box-shadow: 0 0 0 3px rgba(27, 95, 191, 0.18)` with a `{colors.ocean}` border): Text inputs and textareas on focus.
- **Focus outline, global** (`outline: 3px solid`, 3px offset, 3px radius): `{colors.ocean}` on white and grey surfaces; `{colors.amber}` inside the hero, the industries band, and the footer.

### Named Rules
**The Hairline First Rule.** Draw structure with 1px hairlines and tonal bands. A shadow is reserved for surfaces that are genuinely lifted (the form panel, the company photo) or for a hover response; never on a resting card, tile, or button.

**The Navy Shadow Rule.** Every shadow is tinted with navy (`rgba(10, 30, 60, …)`), never neutral black, so lifted surfaces sit in the same air as the bands.

## Shapes

One radius for everything: 6px (`{rounded.md}`) on buttons, inputs, cards, the form panel, the industry grid's outer edge, the company photo, the skip link, and the nav toggle. The `:focus-visible` outline uses 3px (`{rounded.sm}`). The logo mark is a 40px square with an 8px corner. Corners never go larger, never go fully round on a rectangle; the only circles are the 8px ocean dots on the industry strip.

Borders are 1px hairlines on cards, check-lists, and dividers; 1.5px on inputs and on the ghost button. Icons are authored inline SVG on a 24px viewBox, 1.75px stroke, round caps and joins, no fill; they render at 36px in industry tiles, 32px in the benefits row, 22px in the contact list, 20px inline in buttons and the address, and 18px for the arrow in a text link. Images sit in 4:3 frames (service cards, company photo) or run full-bleed in 16:9 halves (the photo band; 3:2 when stacked), always `object-fit: cover`, and are clipped by the container's 6px corner where they sit inside a card.

## Components

### Buttons
Confident and flat: solid amber for the one action, white outline for the peer action on navy.
- **Shape:** Gently rounded (6px), 1.5px border (transparent on the primary), inline-flex with a 10px gap for an inline icon, weight 600, `white-space: nowrap`.
- **Primary:** Amber background, navy text (`{components.button-primary}`), 12px 20px padding; large (`{components.button-primary-lg}`) is 16px 26px at 1.0625rem for hero and form; small (`{components.button-primary-sm}`) is 10px 16px at 0.9375rem in the nav.
- **Hover / Focus:** Background shifts to `{colors.amber-600}` over 200ms with the exponential ease-out; `:active` presses 1px down; `:focus-visible` shows the 3px outline at 3px offset, ocean on light surfaces and amber inside navy. Disabled: 60% opacity with a progress cursor.
- **Ghost:** On navy only. White text, 6% white fill, 70% white 1.5px border (`{components.button-ghost}`); hover raises the fill to 14% and the border to solid white. Used for the hero's call action.

### Cards / Containers
Quiet white panels defined by a hairline, not a shadow.
- **Corner Style:** 6px, `overflow: hidden` so media clips to the corner.
- **Background:** White on white sections; the media area shows `{colors.grey}` while the image loads.
- **Shadow Strategy:** None at rest; on hover the service card lifts 2px and takes the standard shadow over 300ms while its 4:3 image scales to 1.03 over 600ms.
- **Border:** 1px `{colors.line}`.
- **Internal Padding:** 28px, 32px at the bottom, 14px between the title, paragraph, and check-list. The check-list is a set of hairline-ruled rows at 0.9375rem in `{colors.ink-2}`, 9px of padding per row.

### Inputs / Fields
Plain and legible, with ocean as the only state color.
- **Style:** White field, 1.5px `{colors.line}` border, 6px radius, 12px 14px padding, 1rem text in ink, placeholder in `{colors.ink-3}`. Labels sit above at 0.9375rem / 600 with an 8px gap; "(optional)" is appended at weight 400 in `{colors.ink-3}`. Textareas resize vertically from a 120px minimum.
- **Focus:** Border turns `{colors.ocean}` and a 3px ring at 18% ocean appears; the browser outline is suppressed in favor of the ring. Hover only darkens the border slightly.
- **Error / Disabled:** After a submit attempt, invalid fields take an `{colors.error}` border and the status line (0.9375rem / 500, normally `{colors.ocean-700}`) switches to error red. The submit button is a large primary button aligned to the start with 6px of top margin.

### Navigation
- **Style:** Sticky, 72px, translucent white with backdrop blur; a hairline appears on the bottom edge once the page has scrolled 8px. Logo (40px navy mark plus the wordmark at 1.25rem: "Kappa" 700 / width 112 / `-0.02em`, " Solutions" 500 / width 100 in `{colors.ink-2}`) on the left; four links and a small primary button on the right with 28px between links.
- **Typography:** Links at 0.9375rem / 500 in ink, 6px vertical padding, a 2px transparent bottom border.
- **States:** Hover draws the 2px bottom border in `{colors.ocean}`; no active-section indicator.
- **Mobile (≤860px):** A 24px hamburger toggle in navy replaces the links; the menu drops as a white panel under the nav with hairline-separated rows at 1.0625rem, the standard shadow, and the primary button stretched full width at the bottom. Hover on a row turns the text ocean.

### Industry Tiles (signature)
A navy grid of eight tiles separated by 1px gutters of 12% white, framed by a matching 1px border with a 6px outer radius. Each tile stacks a 36px white icon, a 1.25rem title, and a 0.9375rem description in `{colors.on-navy-2}` with 12px gaps and 32px 28px 30px padding; hover shifts the tile to `{colors.navy-800}` over 250ms. The eighth tile ("Another industry?") rests on navy-800 and carries a white 600-weight text link with an 18px arrow that slides 3px right on hover.

### Industry Strip (signature)
A 64px white bar anchored to the hero's bottom edge, listing the seven industries in a single row at 0.9375rem / 600 with `0.01em` tracking, each item led by an 8px ocean dot. Scope reads before the first scroll. Below 860px it unpins, wraps, and pads to 16px.

### Hero
Navy base with a full-bleed cover photograph (positioned 60% / 50%; 55% on small screens) under the two-pass overlay gradient. Copy sits in the container's left half: display headline capped at 14ch, hero lead at 52ch with 24px above, two large buttons (primary and ghost) 14px apart with 36px above. Entrance: title, lead, and actions each rise 24px and fade in over 700ms with the exponential ease-out, staggered 120ms; nothing else on the page animates on entrance, and the whole sequence is disabled under `prefers-reduced-motion`.

### Footer
Navy, `{colors.on-navy-2}` text, 64px top / 28px bottom padding. Three columns: light logo and a 32ch tagline, a stacked link list, and a stacked contact list; links are white at 500 with underline on hover. A 14% white hairline separates the 0.875rem legal line, 48px below.

## Do's and Don'ts

### Do:
- **Do** reserve amber for the single primary action on a view, text selection, and the focus ring inside navy surfaces only; the Amber Once Rule.
- **Do** use ocean blue for links, icon strokes on light surfaces, strip dots, input focus, and the focus ring on light surfaces; the Ocean Wayfinding Rule.
- **Do** set every heading in Archivo at width 112, weight 700, with `-0.02em` tracking (`-0.025em` for the display), and every text run at width 100, weight 400.
- **Do** keep amber buttons paired with navy text and ghost buttons on navy only.
- **Do** draw structure with 1px hairlines: `{colors.line}` on light, white at 12–14% on navy.
- **Do** author icons as inline SVG on a 24px viewBox, 1.75px stroke, round caps and joins, no fill.
- **Do** present photography full-bleed or in 4:3 frames with `object-fit: cover`, and keep images out of icon tiles.
- **Do** use the exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) for every transition: 200ms for color and border, 300ms for lifts and arrows, 600ms for image scale, 700ms for the hero entrance.
- **Do** honor `prefers-reduced-motion` by removing the entrance animation and smooth scrolling.
- **Do** cap the hero at 900px and keep it capped rather than stretching it on tall screens.

### Don't:
- **Don't** place an eyebrow or kicker label above a heading; headings open sections directly.
- **Don't** set text in uppercase or track it out beyond `0.01em`; hierarchy is width and weight.
- **Don't** introduce a second typeface or fall back to a system display face; the fallback stack exists only for font swap.
- **Don't** put a shadow on a resting card, tile, or button; shadows belong to the form panel, the company photo, and hover.
- **Don't** use pure black; ink `{colors.ink}` is the darkest text and navy the darkest surface.
- **Don't** use a radius other than 6px on rectangles (3px on the focus outline); no pill buttons, no rounded-corner scale.
- **Don't** fill a button with ocean blue or navy on light surfaces; ocean is for wayfinding, and the only filled button is amber.
- **Don't** use amber as text, icon stroke, divider, or background tint.
- **Don't** use glyph or icon-font icons, or icons with a different stroke weight than 1.75px.
- **Don't** tint a shadow with neutral black; every shadow is navy-based.
