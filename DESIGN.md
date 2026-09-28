---
name: Oops Lab sculptural studio
description: Cool pale fields, graphite type, restrained sage and original dimensional
  artwork.
colors:
  ground: '#f7f8f6'
  ground-2: '#f1f3f0'
  panel: '#fdfdfc'
  ink: '#151918'
  ink-2: '#545a56'
  ink-3: '#666c68'
  line: rgba(21, 25, 24, 0.12)
  line-soft: rgba(21, 25, 24, 0.07)
  sage-bg: '#e4e9e1'
  sage: '#a9b6a5'
  sage-deep: '#7f8c7b'
  sage-ink: '#46504a'
  on-dark: '#f7f8f6'
  on-dark-2: '#b9bfba'
typography:
  display:
    fontFamily: Manrope, Avenir Next, Segoe UI, system-ui, sans-serif
    fontSize: clamp(2.5rem, 4.6vw, 4.4rem)
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: -0.03em
  headline:
    fontFamily: Manrope, Avenir Next, Segoe UI, system-ui, sans-serif
    fontSize: clamp(2rem, 4.3vw, 4.125rem)
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: -0.03em
  title:
    fontFamily: Manrope, Avenir Next, Segoe UI, system-ui, sans-serif
    fontSize: clamp(1.375rem, 1.8vw, 1.75rem)
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  lede:
    fontFamily: Manrope, Avenir Next, Segoe UI, system-ui, sans-serif
    fontSize: clamp(1.0625rem, 1.5625vw, 1.5rem)
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -0.01em
  body:
    fontFamily: Manrope, Avenir Next, Segoe UI, system-ui, sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Manrope, Avenir Next, Segoe UI, system-ui, sans-serif
    fontSize: 1.0625rem
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: -0.01em
rounded:
  inset: 10px
  card: 14px
  browser: 16px
  pill: 999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  page: clamp(20px, 3.9vw, 60px)
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.on-dark}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: 0 36px
  button-light:
    backgroundColor: '{colors.on-dark}'
    textColor: '{colors.ink}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: 0 36px
  button-outline:
    backgroundColor: transparent
    textColor: '{colors.ink}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: 0 36px
  button-small:
    rounded: '{rounded.pill}'
    padding: 0 24px
  text-link:
    textColor: '{colors.ink}'
  navigation:
    textColor: '{colors.ink}'
  status-tag:
    backgroundColor: '{colors.ground-2}'
    textColor: '{colors.ink-2}'
    rounded: '{rounded.pill}'
    padding: 0 12px
  flow-card:
    backgroundColor: '{colors.panel}'
    rounded: '{rounded.card}'
    padding: 16px 18px 18px
  topic-control:
    backgroundColor: transparent
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: 0 16px
---

# Design System: Oops Lab sculptural studio

## Overview

**Creative North Star: "The Sculptural Studio"**

A cool, spacious studio identity pairs bold rounded sans-serif typography with original porcelain, brushed-metal and sage objects. Quiet navigation, open ruled columns and pale surfaces let the artwork and service offer lead.

The Clay preference and disclosed Concept A working direction inform this local implementation; Concept A was not explicitly selected by name. This record describes the implemented system, not a publication or an automated workflow sign-off.

**Key Characteristics:**
- Cool neutral ground with a restrained sage band and graphite close.
- Self-hosted Manrope with bold compact display lines and quieter supporting copy.
- Physical image-based artwork, open columns and gently rounded interactive examples.

## Colors

The palette is cool and nearly neutral, with sage supporting the dimensional material world. Frontmatter values are authoritative; aliases such as on-dark intentionally preserve the source roles.

### Primary
- **Graphite ink:** headings, navigation, primary controls and the closing field.

### Secondary
- **Sage ground:** full-width illustrative-example band.
- **Soft sage and deep sage:** selection highlight and small supporting marks.
- **Sage ink:** readable copy and status labels on the sage field.

### Neutral
- **Cool ground:** page canvas; **secondary ground:** source excerpts and status tags; **panel:** raised example surfaces.
- **Secondary and tertiary ink:** supporting copy and metadata, respectively.
- **Line and soft line:** column dividers and subtle inset details.
- **On-dark and secondary on-dark:** headings, controls and supporting links against graphite.

**The Quiet Field Rule.** Keep large neutral fields and reserve sage for the example context and supporting accents.

## Typography

**Display and body font:** self-hosted Manrope with the fallback stack recorded above. Three local font files cover the declared weight ranges; the medium file also serves the normal body role.

The display is heavy and compact; supporting text has quieter weight and more leading. Display and headline tokens share tight tracking. Title is used for service and example headings; body for open-column paragraphs; label for primary controls. The lede token describes section introductions; the hero uses the same size with slightly looser leading (1.45). Example interiors use smaller text, primarily 0.75–0.9375rem, without changing font family.

**The One Family Rule.** Use Manrope throughout; distinguish hierarchy through weight, scale and spacing.

## Layout

The centered container caps at 1600px and uses the fluid page-spacing token. Header minimum height is 84px. Desktop hero copy occupies at most 52% while a separate square image occupies the right side at min(54vw, 830px); this is fluid composition, not a fixed screenshot frame. Section padding is generally fluid, with major top spacing beginning at 64px and growing to 100px.

Service and process content use three open columns separated by fine vertical rules. Examples stack at 1099px and below; service columns, founders and closing columns stack at 899px and below. The hero becomes copy followed by an in-flow image at 1023px and below. Navigation switches to its progressive menu at 759px and below, and primary actions become full-width at 479px and below. At 380px and below the miniature website also stacks internally.

## Elevation & Depth

Most of the page is flat. Original raster artwork provides physical material and ground shadows; example cards and chat surfaces receive a shared diffuse lift. Their exact shadow and motion vocabulary is in the sidecar. Outlined controls use an inset stroke, not an offset shadow.

**The Physical Depth Rule.** Let the original artwork supply physical depth; use soft diffuse shadows on example surfaces.

## Shapes

Controls are pills, avatars and small browser marks are circles, example cards have soft corners, and nested source panels are slightly tighter. Thin column rules organize content without enclosing every service in a card. The process section is text-only; the main hero sculpture retains its complete silhouette.

## Components

### Buttons and text links
Primary graphite and inverse pale pills share the label treatment, with an outlined alternative for demo actions. Standard pills have a minimum height of 66px; compact header pills use 48px, and local demo controls use 44px. Hover subtly changes the surface and moves an inline SVG arrow 3px; active presses move 1px down. Disabled outline controls reduce opacity, while pending informational cards remain fully opaque. Text links retain underlines and a minimum 44px target.

Keyboard focus uses a 2px graphite outline offset by 3px on pale fields, with 4px offset for dark pills. The dark closing section uses pale outlines. The focus treatment is functional and must survive future palette changes.

### Navigation
The lowercase wordmark accompanies three understated links and a contact pill. Desktop links underline on hover. With JavaScript, narrow screens expose a Menu/Close button and a vertical panel; Escape closes it and returns focus. Without JavaScript, navigation remains available in a wrapping layout.

### Cards, tags and topic controls
The website preview, automation cards and chat bubbles use pale surfaces and diffuse shadows. Neutral pills show pending status; the completed local flow uses a muted green tag. The outlined topic selector fills the active choice with graphite and exposes its selected state through aria-pressed. There are no editable text inputs in this page.

### Local illustrative examples
The website changes between sage and graphite palettes. The automation advances from inquiry to a draft, then an explicit simulated approval and CRM update, with reset and managed focus. The handbook assistant switches between predefined sample topics. These examples are labeled illustrative and make no email or model requests. The hero has a small finite pointer response only for fine pointers without reduced motion; reduced motion suppresses transforms and shortens transitions. Motion timing and easing live in the sidecar.

## Do's and Don'ts

### Do:
- Do retain the cool neutral, graphite and sage relationship.
- Do keep text and controls in semantic HTML and the sculpture in separate image assets.
- Do preserve visible focus, local demo disclosures and reduced-motion behavior.
- Do stack copy before sculpture and keep every example usable on narrow screens.

### Don't:
- Don't revive the rejected warm cream, terracotta or serif direction.
- Don't replace the dimensional hero with CSS geometry; the illustrative website demo has its own geometric artwork.
- Don't add decorative eyebrows, glyph icons or hard offset shadows.
- Don't present fictional demos as client evidence or infer workflow completion from a visual match.

## Contact revision

The header and hero CTAs navigate to the on-page inquiry form. Direct email is dev@oopslab.ai. The dark closing section contains clearly labeled16px inputs,8px corner radii, paired name/email fields that stack below480px, and visible light focus outlines. FormSubmit is configured for dev@oopslab.ai; pending activation or errors retain the inquiry fields. The prominent illustrative-examples disclaimer and process decoration were removed at the user’s request; individual concept/example labels remain.
