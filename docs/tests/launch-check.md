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

## Deployment acceptance

After pushing to main, confirm the Pages workflow succeeds and compare live HTML, CSS, JavaScript, and social image against the release. Submit a labeled production inquiry, activate that origin if requested, and verify both the browser success state and received message. Local success is not a substitute for those checks.
