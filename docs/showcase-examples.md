# Service examples — September 28, 2026

Fable reviewed the requested direction and recommended explicit service-category headings, composition choices for the miniature site, a connected AI workflow with human approval, and visible source excerpts for document search. Codex implemented the scoped revision in the existing design.

## Website design

The Change style button cycles through Classic, Editorial, and Showcase arrangements of the same fictional Northline content. The layouts use a split hero, image-first editorial composition, and an integrated background composition. The old light/dark toggle has been removed. A visible layout label and a live announcement communicate the current style. The headline, text, CTA, and artwork animate from their previous positions into the new arrangement over 700ms. Rapid clicks start from the current visual positions; resizing cancels active transforms, and reduced-motion settings use instant changes.

## AI workflow automation

A connected graph shows Inquiry received → AI draft → You approve → Send reply / Update CRM. Run demo pauses at review. The visitor can edit the sample reply; blank replies cannot be approved. Both output nodes stay pending until approval. Reset restores the draft, read-only state, controls, labels, and nodes. All actions are local; no mail, model, CRM, or workflow service is contacted.

## AI document search

Onboarding, Time off, and Expenses presets update the question, answer, source title, and visible excerpt from a fictional handbook. No free-text search or live model is implied. The existing local-demo privacy disclosures remain accurate.

## Verification

- Static HTML, local links, asset references, and JavaScript syntax pass.
- Desktop and phone screenshots inspected; all three website compositions checked.
- Controls fit without page overflow at 320, 390, 1100, and 1440 pixels.
- Browser exercised run, edit, empty-reply rejection, approval, edited-reply retention, and reset.
- Search presets keep answers and supporting excerpts synchronized.
- Browser recorded no console errors and zero fetch/XHR calls while operating the demos.
- Contact delivery remains separate and unchanged; its response regression check still passes.

Animation follow-up: verified button/keyboard cycling, rapid clicks, completion cleanup, and reduced-motion behavior. A phone preview was captured from the browser animation timeline.
