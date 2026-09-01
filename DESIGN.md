---
version: alpha
name: Taskrabbit
description: "Taskrabbit's system reads as approachable and trustworthy home-services UI: clean white surfaces, a confident deep-green primary action color, warm yellow accents for highlights, and dark charcoal ink for body copy — all set in Inter with a friendly, rounded, pill-shaped button and chip language."
colors:
  primary: "#0D7A5F"
  secondary: "#F9C339"
  tertiary: "#0A2B14"
  ink: "#242A30"
  ink-secondary: "#1A1E1D"
  muted: "#595C5B"
  muted-light: "#B1B9C3"
  neutral: "#67727E"
  surface: "#FFFFFF"
  surface-alt: "#FFFCE4"
  surface-mint: "#E3FFEF"
  border: "#595C5B"
  info: "#BAE7FF"
  info-strong: "#6AAAE4"
  info-muted: "#6699CC"
  accent-lavender: "#D7D7FD"
  on-primary: "#FFFFFF"
  forest: "#2B4C32"
typography:
  hero-display:
    fontFamily: Inter
    fontSize: 55px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: normal
  display-lg:
    fontFamily: Inter
    fontSize: 34px
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: normal
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: normal
  h3-strong:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.12px
  title:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.12px
  subtitle:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  body-strong:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.09px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -0.09px
  input-text:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.09px
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: normal
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  body-emphasis:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: -0.12px
  nav-link:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: normal
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.07px
  label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -0.07px
rounded:
  sm: 8px
  md: 10px
  lg: 16px
  xl: 24px
  full: 1000px
spacing:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  section-sm: 80px
  section: 88px
  section-lg: 96px
  section-xl: 104px
components:
  navbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    height: 70px
    borderColor: "{colors.border}"
    borderWidth: 1px
    position: static
  footer:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    height: 419px
    borderWidth: 0px
    columns: "3"
  nav-link:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.nav-link}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-primary-active:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-primary}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.input-text}"
    borderColor: "{colors.border}"
    borderWidth: 1px
    rounded: "{rounded.sm}"
    padding: 12px 16px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    boxShadow: rgba(7, 7, 7, 0.1) 0px 0px 4px 0px, rgba(4, 46, 41, 0.14) 0px 0px 8px 0px
    padding: 24px
  card-elevated:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    boxShadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px
  badge:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  chip:
    backgroundColor: "{colors.surface-mint}"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  avatar:
    rounded: "{rounded.full}"
    size: 40px
---

# Taskrabbit

## Overview

Taskrabbit's interface is a warm, service-first consumer product built for trust at a glance: a crisp white canvas, a confident forest-green primary, and a sunny yellow secondary that together read as friendly and reliable rather than premium or tech-forward. Density is generous — sections breathe with large vertical rhythm (spacing scale runs up to {spacing.8xl} 104px) while individual components (cards, badges, inputs) stay compact and rounded, so the page feels approachable at a glance and scannable in detail.

Hierarchy is carried almost entirely by type scale and color, not by borders or heavy elevation. A single Inter family spans an 800-weight, 55px hero ({typography.display-hero}) down to a 400-weight, 14px caption ({typography.caption}), and headline weight/size jumps do the work that dividers or boxes would do elsewhere. Color reinforces this: primary green ({colors.primary}) and ink ({colors.ink}) anchor calls to action and body copy, while pastel tint surfaces (yellow, blue, lavender, mint) are used sparingly to mark illustrative callouts and badges rather than to segment large layout regions.

Elevation is used surgically — most of the page is flat, and the only strong shadow appears on the promotional modal, so "lifted" surfaces are rare and meaningful. Shape language is uniformly soft: buttons and badges are true pills ({rounded.pill}), cards use a generous {rounded.lg}/{rounded.xl}, and there is no sharp-cornered geometry anywhere in the system.

**Key Characteristics:**
- Single-typeface system (Inter) covering an 8-step size ladder from 14px to 55px
- Primary actions are always pill-shaped, never square-cornered
- Elevation is reserved for a single top-priority surface (the promo modal); everything else reads via color, not shadow
- Pastel tint surfaces (mint, blue, lavender, pale yellow) exist purely for accenting, not as primary backgrounds
- No CTA button lives in the header — trust is built site-wide via copy and cards, not header pressure
- Letter-spacing tightens as type gets smaller (down to -0.3px), while large display sizes keep normal tracking
- Footer is a dense, dark-toned utility block (25 links, 3 columns) contrasting sharply with the light body of the page
- Spacing scale is generous and section-level (up to 104px), while component-internal padding stays tight (8–24px)

## Colors

No gradients appear anywhere in this system — every fill is a flat, solid color. The palette is small and disciplined: one brand green, one accent yellow, a handful of neutrals for text/surfaces, and four pastel tints reserved for small decorative or badge surfaces.

### Brand & Accent
- **Forest Green** ({colors.primary} — #0D7A5F): the primary action color, used on {components.button-primary} and links; carries the brand's "trust" signal.
- **Deep Forest** ({colors.primary-deep} — #0A2B14): the pressed/active state of the primary button ({components.button-primary-active}), not used as a standalone surface.
- **Sunny Yellow** ({colors.secondary} — #F9C339): the secondary CTA fill ({components.button-secondary}), used for friendlier, lower-commitment actions (e.g. "send me a discount").

### Surface
- **Paper White** ({colors.surface} — #FFFFFF): the dominant page and card background; nearly all layout is built on this single surface.
- **Pale Yellow Tint** ({colors.surface-tint-yellow} — #FFFCE4): badge background ({components.badge}) and small illustrative callouts.
- **Sky Tint** ({colors.surface-tint-blue} — #BAE7FF), **Lavender Tint** ({colors.surface-tint-purple} — #D7D7FD), **Mint Tint** ({colors.surface-tint-mint} — #E3FFEF): a set of pastel accent surfaces used interchangeably for small decorative blocks and iconography backdrops — never for full-section backgrounds.

### Text
- **Ink** ({colors.ink} — #242A30): primary body/heading text color, and the header's text color ({components.navbar.textColor}).
- **Ink Strong** ({colors.ink-strong} — #1A1E1D): reserved for the highest-emphasis text, including nav links ({components.nav-link.textColor}).
- **Muted** ({colors.muted} — #595C5B) and **Muted Blue-Gray** ({colors.muted-2} — #67727E): secondary/tertiary text, and {colors.muted-2} doubles as the footer's background fill ({components.footer.backgroundColor}) — an unusual but deliberate choice that makes the footer read as a distinct, weightier zone against the white body.
- **Neutral Gray** ({colors.neutral-gray} — #B1B9C3): lowest-emphasis text/disabled-adjacent use.

### Hairlines & Accent Blues
- **Accent Blue** ({colors.accent-blue} — #6AAAE4) and **Muted Accent Blue** ({colors.accent-blue-muted} — #6699CC): occasional accent text/surface use, distinct from the pastel sky tint; treat as a secondary accent family rather than a primary interactive color.

This system defines no dark-mode token block — theming is single-mode (light only); do not invent dark overrides.

## Typography

### Font Family
- **Inter** — the sole typeface across the entire system, spanning display headlines, body copy, buttons, labels, and captions. There is no secondary/serif/monospace family anywhere in the tokens.

### Hierarchy
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-hero | 55px | 800 | 1.4 | normal | Hero headline |
| display-lg | 34px | 800 | 1.4 | normal | Large section display |
| h2 | 30px | 700 | 1.4 | normal | Section heading |
| h3-strong | 24px | 700 | 1.3 | -0.12px | High-emphasis subheading |
| h3 | 24px | 600 | 1.3 | -0.12px | Standard subheading |
| title-sm | 20px | 600 | 1.3 | -0.3px | Small card/module title |
| body-lg-strong | 18px | 600 | 1.4 | -0.09px | Emphasized lead paragraph |
| body-lg | 18px | 400 | 1.35 | -0.09px | Lead paragraph |
| input | 18px | 400 | 1.45 | -0.09px | Form field text |
| body-strong | 16px | 600 | 1.5 | normal | Emphasized body / nav links |
| body | 16px | 400 | 1.5 | normal | Default body copy |
| body-strong-tight | 16px | 600 | 1.6 | -0.12px | Links and compact emphasis |
| button-flat | 16px | 600 | 1 | normal | Button label |
| label | 14px | 500 | 1.4 | -0.07px | Form labels |
| caption | 14px | 400 | 1.45 | -0.07px | Fine print / captions |

### Principles
Only five weights exist — 400, 500, 600, 700, 800 — with 500 appearing exactly once (label) and 700/800 reserved for headings; there is no light (300) or black (900) weight anywhere, so builders should never introduce them. Letter-spacing is size-dependent: sizes 24px and below (h3, title-sm, body-lg, input, label, caption, body-strong-tight) carry negative tracking from -0.07px to -0.3px to keep smaller/mid-size type from feeling loose, while the largest display sizes and the two plain 16px styles (body, body-strong, button-flat) keep normal tracking. Line-height loosens as size drops: tight 1.3 on large headings, expanding to 1.4–1.6 on body/caption sizes, which keeps long paragraphs readable at 16–18px. Note the two competing 16px families — {typography.body-strong} (normal tracking, line-height 1.5) for general emphasis, and {typography.body-strong-tight} (-0.12px tracking, line-height 1.6) specifically for links — use the latter only for inline links, not general bold text.

## Layout

### Spacing System
The scale is a near-doubling progression rooted at a 4px unit: {spacing.xs} 4px, {spacing.sm} 6px, {spacing.md} 8px, {spacing.lg} 12px, {spacing.xl} 16px, {spacing.2xl} 24px, {spacing.3xl} 32px, {spacing.4xl} 40px, then jumping to large section breaks at {spacing.5xl} 80px, {spacing.6xl} 88px, {spacing.7xl} 96px, {spacing.8xl} 104px. Evidence weighting shows 16px, 24px, 8px and 12px are the workhorse values for component padding and internal gaps; the 80–104px band is reserved for gaps between major page sections.

### Grid & Container
Desktop layout is a centered, single-column content flow with two internal grid patterns observed: a 4-column grid for the "popular projects" card set (wrapping to a partial final row) and a 3-column grid for testimonials and satisfaction/feature blocks. Stats are arranged in an evenly spaced horizontal row. Gutters read consistently around {spacing.2xl} (24px) based on spacing-token weighting. No explicit container max-width was measurable from the evidence, so builders should treat the observed 3-/4-column patterns as the binding constraint rather than inventing a pixel container width.

### Whitespace Philosophy
Whitespace is used at two distinct scales: large, deliberate breathing room between page sections (the 80–104px tier) signals "new topic," while tight, consistent padding inside cards and buttons ({spacing.xl}–{spacing.2xl}, i.e. 16–24px) keeps components dense and touchable. This two-tier rhythm — generous macro spacing, tight micro spacing — is what gives the page an airy feel without individual components feeling loose.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, color/tint blocking only | Nearly all page sections — white or pastel-tint backgrounds sit directly adjacent with no shadow separation |
| Card | Soft dual shadow: `rgba(7,7,7,0.1) 0 0 4px`, `rgba(4,46,41,0.14) 0 0 8px` | Project and testimonial cards ({components.card}) |
| Elevated/Modal | Stronger single shadow: `rgba(0,0,0,0.2) 0 4px 8px` | Email-capture / promo modal only ({components.elevated-card}) |

**Shadow philosophy.** Depth on this site is earned, not decorative — the overwhelming majority of the page is flat, and hierarchy between adjacent sections comes from background-color changes (white → pastel tint → white) rather than shadow. The card shadow is deliberately soft and tinted toward the brand green (`rgba(4,46,41,...)`), a subtle signature rather than a generic gray drop shadow. The one strong, neutral-gray shadow in the system is reserved for the single most interruptive surface — the promotional modal — making elevation itself a scarce, attention-directing signal rather than an ambient styling default.

## Shapes

### Border Radius Scale
| Token | Value | Use |
|---|---|---|
| rounded.sm | 8px | Small controls, tight-corner elements |
| rounded.md | 10px | Inputs ({components.input}) |
| rounded.lg | 16px | Cards ({components.card}) |
| rounded.xl | 24px | Elevated/modal surfaces ({components.elevated-card}) |
| rounded.pill | 1000px | Buttons ({components.button-primary}, {components.button-secondary}) and badges ({components.badge}) |

The geometry is consistently soft and friendly — there is no sharp/square-cornered treatment anywhere in the token set, and radius increases with a surface's visual weight (inputs and small controls stay near 8–10px, cards move to 16px, the most prominent overlay surface reaches 24px). Pill radius (1000px) is used exclusively for actionable, tappable elements — buttons and badges — never for cards or containers, making "fully rounded" a reliable visual signal for "this is clickable." Screenshots additionally show circular treatment for avatars and rating icons, reinforcing the same rounded-everything language, though no dedicated circle token exists — use `rounded.pill` on square aspect-ratio elements to achieve it.

## Components

### Navigation
- **`navbar`** — A static (non-sticky) white bar ({components.navbar.backgroundColor} #FFFFFF) at {components.navbar.height} 70px tall, with ink text ({components.navbar.textColor} #242A30) and a 1px bottom hairline ({components.navbar.borderWidth}; exact hairline color was not confidently observed — see Known Gaps). It carries exactly 4 nav links, styled in {components.nav-link.typography} (16px/600, {components.nav-link.textColor} #1A1E1D) — and notably **no CTA button in the header** (landmark evidence confirms `hasCtaButton:false`), meaning primary conversion pressure lives in page content, not the header.

### Buttons
- **`button-primary`** — Pill-rounded ({rounded.pill}), {colors.primary} (#0D7A5F) fill with white text, 12px/24px padding, set in {typography.body-strong}; the primary action across the site (e.g. "Become a Tasker"). Active/pressed state darkens to {colors.primary-deep} (#0A2B14) via {components.button-primary-active}.
- **`button-secondary`** — Same pill shape and padding, but filled with {colors.secondary} (#F9C339) and ink text ({colors.ink}); used for lighter-commitment or promotional actions (e.g. "Send me a discount").

### Cards & Containers
- **`card`** — White surface, {rounded.lg} (16px) corners, 24px padding, lifted with the dual green-tinted shadow described in Elevation; used for popular-project tiles and testimonials.
- **`elevated-card`** — White surface, {rounded.xl} (24px) corners, stronger neutral shadow; the modal/overlay treatment (the email-capture promo box observed floating over a dimmed backdrop).
- **`badge`** — Pill-rounded, {colors.surface-tint-yellow} background, ink text, {typography.caption} (14px/400), 6px/12px padding; used for small illustrative/status tags.

### Inputs & Forms
- **`input`** — White background, {rounded.md} (10px) corners, 1px border, {typography.input} (18px/400), 12px/16px padding; used for the site search field and lead-capture forms. Border color is defined via a `{colors.border}` reference that could not be confirmed against the live site (see Known Gaps) — treat {colors.muted} (#595C5B) as the closest observed neutral if a concrete hairline is needed.

### Links
- **`link`** — Set in {colors.primary} (#0D7A5F) with {typography.body-strong-tight} (16px/600, -0.12px tracking, 1.6 line-height); reserve this tight-tracking style for inline links specifically, not general bold body text.

### Footer
- **`footer`** — A visually heavy, dark-toned block: {colors.muted-2} (#67727E) background, white text, {components.footer.height} 419px tall, borderless, arranged in {components.footer.columns} 3 link columns holding 25 total links in {components.footer-link.typography} (16px/600 white). The stark shift from the light body to this gray-blue footer makes it read as a distinct "utility" zone rather than a continuation of the page's pastel palette.

## Do's and Don'ts

### Do
- Do set all text in Inter, from {typography.display-hero} down to {typography.caption}; never introduce a second typeface.
- Do build every primary and secondary action as a true pill using {rounded.pill}, never a rectangular button.
- Do pair {colors.primary} (#0D7A5F) fills with white text, and {colors.secondary} (#F9C339) fills with {colors.ink} text — don't cross the pairing.
- Do lift cards with the specific dual shadow defined on {components.card} (a green-tinted soft shadow), not a generic gray drop shadow.
- Do reserve pastel tint surfaces ({colors.surface-tint-yellow}, {colors.surface-tint-blue}, {colors.surface-tint-purple}, {colors.surface-tint-mint}) for small callouts and badges, keeping large sections on {colors.surface} white.
- Do keep the header at {components.navbar.height} 70px with exactly the nav-link styling in {components.nav-link.typography} — no header CTA button, per observed structure.
- Do use {typography.body-strong-tight} specifically for links, distinct from the plain {typography.body-strong} bold style used elsewhere.

### Don't
- Don't use font weights outside the observed set (400, 500, 600, 700, 800) — no light (300) or black (900) weight exists in this system.
- Don't apply hard, square corners anywhere; the radius floor is {rounded.sm} 8px, and pill/{rounded.lg}/{rounded.xl} cover everything larger.
- Don't add strong shadows to ordinary sections; the {components.elevated-card} shadow (`rgba(0,0,0,0.2) 0 4px 8px`) is reserved for modal-level overlays only.
- Don't fill large page backgrounds with {colors.accent-blue} or {colors.secondary}; these read as accent, not surface, colors.
- Don't stack multiple bold 16px styles inconsistently — pick {typography.body-strong} for general emphasis or {typography.body-strong-tight} for links, not either interchangeably.
- Don't invent a dark theme; no dark-mode token block exists in this system.

## Responsive Behavior

This analysis is based on two captured viewports (desktop and mobile) on a single page, not a full breakpoint sweep, so treat specifics as directional. On desktop, the popular-projects module renders as a 4-column card grid and testimonials/features as a 3-column grid, with stats laid out in a single horizontal row. On mobile, the same content collapses to a strict single column: the project grid becomes a vertical list of horizontally-oriented cards (thumbnail + text side by side), testimonials stack vertically with a horizontal-scroll/cut-off affordance, and stat pairs regroup into a 2-by-2 arrangement. The multi-link header collapses to a hamburger affordance, replacing the 4 visible {components.nav-link} items seen on desktop. Section order is preserved between viewports; only column count and internal padding change — mobile tightens section padding but keeps the same macro spacing rhythm relative to content. Because {components.button-primary} and {components.button-secondary} both use 12px/24px padding at pill radius, tap targets stay comfortably large across both viewports; no separate mobile-specific sizing tokens were observed, so the same button and input dimensions should be reused as-is on small screens rather than shrunk. No pixel breakpoint values could be confirmed from the evidence — do not hardcode a specific breakpoint (e.g. 768px) without further verification.

## Iteration Guide

1. Never introduce a font beyond Inter, and never add a weight outside {400,500,600,700,800} — the ladder in {typography.*} is exhaustive and deliberate.
2. All interactive/actionable surfaces (buttons, badges) must use {rounded.pill}; reserve {rounded.lg}/{rounded.xl} for non-interactive cards and overlays, and {rounded.sm}/{rounded.md} for inputs and small controls.
3. When adding a new CTA, choose between {colors.primary} (default/primary weight) and {colors.secondary} (lighter-commitment/promotional) — do not create a third button color; use {components.button-primary-active}'s pattern ({colors.primary-deep}) as the template for any new pressed state.
4. Keep elevation scarce: default new surfaces to flat (no shadow); only apply the {components.card} dual shadow to card-style content blocks, and only apply the {components.elevated-card} shadow to modal/overlay-level surfaces.
5. Use pastel tint tokens (surface-tint-yellow/blue/purple/mint) only for small decorative or badge-scale surfaces — if a new section needs a background tint, pick the closest existing tint rather than inventing a new pastel.
6. Preserve the header's no-CTA, 4-link, 70px static structure ({components.navbar}) when editing navigation; don't add a header button as that contradicts the observed pattern.
7. When building new type styles, pick negative letter-spacing for sizes ≤24px and normal tracking for the largest display sizes and the two plain 16px styles, matching the existing size-dependent tracking rule rather than applying one spacing value system-wide.

## Known Gaps

- The navbar's and input's border colors both reference a `{colors.border}` value (#DCE0E6) that was dropped during grounding because it could not be confirmed as actually observed on the live site — treat any hairline color as unverified and default to {colors.muted} (#595C5B, the confirmed border-role neutral) until re-verified.
- Only one page (the homepage) was captured, so component patterns for interior pages (booking flow, task category pages, checkout, account/auth-walled screens) are entirely unverified.
- Hover, focus, and active states are unconfirmed for nearly all components except {components.button-primary-active}; disabled states have no tokens at all.
- Animation/transition behavior (modal entrance, hover transforms, scroll reveals) was not captured and is not represented in these tokens.
- No dark-mode token block exists in the source; this is asserted as light-only based on absence of evidence, not a confirmed "no dark mode" statement from the site itself.
- Mobile breakpoint pixel values were not measurable from the two-viewport capture; only qualitative collapse behavior (grid → single column, nav → hamburger) is confirmed.
- Container max-width and precise gutter pixel values for the desktop grid were not directly measurable; grid column counts (4-col projects, 3-col testimonials) are visually confirmed but exact gutter sizing is inferred from spacing-token weighting only.
