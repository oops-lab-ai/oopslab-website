# Oops Lab website

Static consultancy website for AI automation, custom software, websites, and technical SEO. Built with HTML, CSS, and JavaScript, with self-hosted fonts and original sculptural artwork. No package installation or build step is required.

## Local development

Serve this directory with any static HTTP server, for example `python3 -m http.server 8000`. The homepage uses `studio.css`, `studio.js`, `contact.js`, and `contact-config.js`. Legal pages use `studio.css` and `website-legal.css`.

## Deployment

Pushes to `main` deploy to https://oopslab.ai/ through the GitHub Pages workflow. The workflow prepares an explicit `_site` directory containing website pages, scripts, styles, discovery files, and assets. Documentation, image-generation metadata, and design working files are excluded from hosting.

The unlisted demo gallery at https://oopslab.ai/gallery/ is copied at deploy time from https://oopslab.pages.dev/gallery/, which the private oops-lab-ai/oopslab repository publishes from `website/src/gallery`. To publish a new gallery, release it there, then run this workflow by hand. Nothing links to it and it is noindexed, but anyone with the URL can open it.

## Inquiries

The contact form uses FormSubmit to deliver to dev@oopslab.ai. Both preview and production origins have been activated, and a final live-site test inquiry was received. Initial test mail was classified as spam; check that folder if an inquiry appears missing. Each new origin may require activation. See [contact form notes](docs/contact-form.md).

See [launch checks](docs/tests/launch-check.md) and [design notes](docs/consultancy-studio.md).

## Website notices

The consultancy site links to [Website Privacy Notice](website-privacy.html) and [Website Terms of Use](website-terms.html). Existing product policies remain at their original URLs. See [scope and verification](docs/website-notices.md).
