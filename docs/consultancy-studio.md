# Oops Lab consultancy homepage

Working Clay-inspired website built from original image concept A, revised to remove CrimeScore from the homepage. Fable authored the implementation. Codex generated the artwork and completed browser QA/corrections.

## Preview

Open http://127.0.0.1:8130/studio/ while the task's comparison server is running, or serve this folder with a static HTTP server. No build step or runtime dependency.

- `index.html`, `studio.css`, `studio.js`: homepage, responsive styles, small local demos.
- `assets/connection.webp`, `assets/still-life.webp`: original generated art, with provenance sidecars. The hero PNG is a fallback.
- `assets/fonts`: self-hosted Manrope and its OFL license.
- Privacy and terms preserve existing substantive policy text.

## Interactions and checks

The website concept switches color treatment. The automation example demonstrates drafting, approval and a CRM entry locally; it never sends an email. The handbook example switches between two predefined questions. All examples are clearly labeled illustrative, not client projects. Contact links open an email application.

Browser geometry checked at320,390,808,900,1280,1440,1536,1600px with no horizontal overflow. Demo controls, phone menu/Escape/anchor behavior, no-JavaScript fallback, reduced-motion behavior, keyboard focus, and sampled text contrast checked. All local links/assets validated. No CrimeScore reference in the homepage. Desktop/mobile full-page captures are in the sibling previews directory.

## Review limitation

Independent visual review found no material appearance/fidelity defect after the focus-outline correction. Impeccable's automated hero comparison remains unresolved: it flags present controls and an unclipped sculpture as missing/clipped, and its wordmark crop coordinates conflict with the actual screenshot pixels. The state was left at hero open; no force override or machine pass was fabricated. The fullpage comparison reported91%overall match, which does not override that gate. Valid full-page captures and the human findings are the review evidence; a malformed supplemental mobile crop was discarded.

This is a local working candidate. Nothing has been committed, pushed or published.
