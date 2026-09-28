# Launch check — September 27, 2026

## Passed before deployment

- Desktop 1440px and phone 390px: full-page visual inspection; no overflow, broken images, or console errors.
- Mobile menu opens and closes on navigation. Main CTA reaches the contact section.
- Website palette demo, automation run/approve/reset, and knowledge topic selection behave correctly.
- Required fields prevent an empty inquiry from submitting.
- Static link, fragment, image alternative, and document structure checks pass; all 16 referenced local pages/assets/discovery endpoints return HTTP 200.
- JavaScript syntax checks and Git whitespace checks pass.
- Social metadata and a 1200×630 preview match the approved design. Canonical URL, robots.txt, and sitemap.xml point to oopslab.ai.
- FormSubmit activation succeeded. Actual test messages to dev@oopslab.ai were confirmed in the business Gmail account. Initial messages landed in Spam; a test was marked not spam.
- Fixed a real integration issue: FormSubmit labels successful JSON as text/html. The client now parses JSON and checks explicit success. Captured-success browser replay passes, along with negative, activation, and non-JSON regression cases.
- The Pages workflow publishes only runtime website files, excluding working documentation and image-generation metadata.

## Deployment acceptance — passed

- Website release `934f73d2cf616344b885cde3edf2ca0479cd07bd` pushed directly to `main` with user approval.
- GitHub Pages deployment succeeded: https://github.com/oops-lab-ai/oopslab-website/actions/runs/36364849560.
- Ten live resources (homepage, styles, scripts, social image, discovery files, and legal pages) return 200 and match the release byte for byte.
- Live browser at desktop and phone width: correct approved copy, no horizontal overflow, no broken images, and no console errors.
- Custom 404 responds correctly; authoring documentation is not hosted. www redirects to the canonical hostname. HTTPS enforcement is enabled; a fresh HTTP request returns 301 to HTTPS.
- Production origin activation completed. Final inquiry submitted from https://oopslab.ai/ displayed the success message and cleared the form.
- Received email verified in business Gmail, addressed to dev, with source https://oopslab.ai/ and reference `OOPS-LAUNCH-2026-09-28T01-00-46-007Z-PRODUCTION-FINAL`, submitted September 28, 2026 at 01:11 UTC (September 27 at 9:11 PM ET).
- Initial local test messages were classified as spam; the final production message appeared without a spam warning. Inbox placement remains controlled by the mail provider.

Run the response regression checks from the repository root with `node docs/tests/contact-response.cjs`.
