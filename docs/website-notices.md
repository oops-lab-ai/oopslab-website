# Consultancy website notices — September 28, 2026

The homepage inquiry disclosure and footer now link to `website-privacy.html` and `website-terms.html`. These notices are scoped to consultancy-site visits and project inquiries, not paid work or separate products.

The existing `privacy.html` and `terms.html` URLs and policy text are preserved; only a scope notice was inserted to direct website visitors to the new pages. New notices take precedence for overlapping consultancy-site use. Product-policy dates remain unchanged. This revision does not validate the older product practices or warranties.

## Verified facts and sources

- Form fields, provider endpoint, optional clipboard handling, absence of analytics/ad scripts, and local-only illustrative demos were checked against the shipped HTML and JavaScript.
- Actual inquiry delivery to dev@oopslab.ai through the business Gmail account was verified during launch.
- FormSubmit privacy: https://formsubmit.co/privacy.pdf
- FormSubmit documents a 30-day submission archive: https://formsubmit.co/documentation. This is distinct from mailbox retention; the notice does not claim automatic deletion of email copies.
- GitHub Pages IP logging: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection
- GitHub privacy: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- Google privacy: https://policies.google.com/privacy

## Scope of the terms

An inquiry is not an engagement or payment commitment. Paid work requires separate written terms covering scope, fees, ownership, confidentiality, client-data handling, and other project responsibilities. No new subscription, hardware warranty, automatic client IP transfer, or fixed liability cap was introduced for consultancy work.

These are website notices, not an attorney-reviewed client-services agreement or a certification of legal compliance. Project contracts and any processing of regulated data need separate review.

## Validation

- Six HTML pages pass static structure, local link/fragment, asset, and image checks.
- Desktop privacy and mobile terms layouts visually inspected; mobile menu works, no horizontal overflow or console errors.
- New pages/stylesheet return HTTP 200 locally and match source.
- Exact comparison confirms older policy text is unchanged except the explicit scope notice.
- Deployment allowlist and sitemap include both new pages and the legal stylesheet.
