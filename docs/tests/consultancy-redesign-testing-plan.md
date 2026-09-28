# Consultancy redesign v2: verification

Date: 2026-09-26. Current white/charcoal/blue revision; supersedes the rejected warm v1 test record. Branch `feature/consultancy-redesign`. No commit, staging, push, or deployment.

## Approved change

User rejected the warm palette and serif design. Fable owns the new white/cool-gray/charcoal/cobalt visual system, Inter typography, layout, copy, favicon, and source SVG artwork. Codex tests, exports the social PNG, and records results.

## Plan and results

| Check | Result |
|---|---|
| New visual direction | White background computed rgb(255,255,255), charcoal heading rgb(31,35,40), Inter loaded; old Fraunces/warm hex values absent from HTML/CSS/SVG |
| Desktop visual | Full-page 1440px screenshot inspected: new single-column hero, horizontal workflow, open service rows, light-gray process band and charcoal contact band |
| Responsive reflow | No horizontal overflow at 320, 390, 720, 1440 CSS px; scroll widths equal client widths |
| Header | 105px at phone/intermediate widths; 65px desktop; visible navigation and email action |
| Page length | Desktop 5194px versus v1 6614px; 390px mobile 8008px versus v1 10380px; substantially shorter, though desktop exceeds the approximate 4800px planning target |
| Structure, links, assets | Home/privacy/terms/404: one main/h1/title, English language, unique IDs, valid local assets and anchors; new-tab noopener checks pass |
| Legal regression | Main legal text from title onward matches baseline for privacy and terms; decorative header/footer/style changes only |
| Domain and verification | CNAME and Google verification meta unchanged |
| Navigation | Services CTA reaches services; privacy-to-terms and 404 return-home actions work |
| FAQ | Native details opens by pointer and closes with Enter; visible 2px blue focus outline |
| Skip navigation | First Tab reveals focused skip link; activation followed by Tab reaches hero inquiry link |
| Contact | Existing oopslabai@gmail.com recipient retained, guided subject/body template inspected; no email sent or fake form state |
| Reduced motion | Emulated preference changes smooth scrolling to auto; emulation reset |
| Contrast | 126 visible leaf-text elements tested against inherited solid backgrounds; no AA text-contrast failures in sample |
| Browser console | No warnings/errors observed |
| Shared page appearance | Privacy computes white background and Inter heading; privacy/terms/404 have no observed overflow and updated identity |
| Social image | New SVG exported to PNG and visually inspected; 1200x630 verified |
| Source hygiene | git diff --check passes; no framework or runtime JS added |

## Evidence

Screenshots are in the parent outputs directory:

- `oops-lab-v2-desktop.png`, `oops-lab-v2-desktop-full.png`
- `oops-lab-v2-mobile.png`, `oops-lab-v2-mobile-full.png`

The old screenshot names show the rejected v1; use v2 files for current review.

## Review

Fresh holistic Fable review completed: no blocking or material issues remain; ready for user design review and local preview. Codex agrees. Fable inspected current source, complete diff, all four v2 screenshots, rejected v1 screenshot, social PNG, legal shell and docs. Optional notes concerned whitespace, historical pending-check wording already superseded by current results, decorative underlines, and the informal page-height target; none required source changes. New assets/docs are intentionally untracked until the user authorizes a commit; they are part of the local deliverable.

## Limits

Chromium in-app browser only, not Safari/Firefox or real devices. The 720px check tests the effective reflow width corresponding to 200% zoom on a 1440px viewport; actual zoom UI was not exercised. Text-contrast sampling is not a complete accessibility certification. Local Python hosting does not reproduce GitHub Pages missing-route HTTP handling, though the 404 document and home link work. No email delivery test, deployment, SEO-ranking verification or social-platform cache refresh.
