# Consultancy redesign

Date: 2026-09-25. Branch: `feature/consultancy-redesign`.

This note records the design and copy decisions behind the shift from a product portfolio to a professional consultancy site, what the pages do, what is deliberately not claimed, and what still needs checking.

## Revision history

- **v1 (rejected):** warm editorial system, parchment ground, Fraunces serif display with italics, ember accent, ring-and-dot mark, founder monograms, a stacked four-box workflow in a two-column hero, dark process and contact bands. Rejected as tacky, with the colour scheme called out specifically.
- **v2 (current):** white ground, charcoal type, cool light-gray surfaces and hairlines, one cobalt accent, Inter throughout, a compact tile-and-wordmark brand, a horizontal "Example workflow" diagram beneath a short typographic hero, services as structured rows, and a single charcoal contact band. The rest of this document describes v2.

## Positioning

- **Primary offer:** AI automation and agents. It is the hero subject, the first service row, and the subject of the example workflow.
- **Also offered:** custom software and integrations; websites with technical SEO (SEO lives under websites). Websites are the third service row, are named in the hero paragraph, the footer tagline, and the contact checklist.
- **Ongoing work:** maintenance and handover appear as a one-line note under the service rows and as process step four.
- **Audience:** owners and operations leads at small and midsize businesses. Written into the copy as situations ("the task that eats your week"), never as a label.
- **Founders do the work:** stated in the hero paragraph, the founders section, and the "Who does the work" FAQ. Stated plainly, without comparisons to other kinds of teams.

## Page order and why

1. **Hero** is a single left-aligned column: a short headline and supporting paragraph, primary and secondary actions, and a one-line note with the bare address. Beneath it, a full-width "Example workflow" diagram (customer, agent, you, your systems) drawn in HTML and CSS. The figure is captioned as an example of an agent handling quote requests; it is not a dashboard or a client metric.
2. **Services** as three structured rows (number and title, one-sentence description, three or four compact examples) separated by hairlines. No cards, no long paragraphs.
3. **How we work** on a light-gray band, four columns, one sentence each.
4. **Selected work** as a 5/7 split: CrimeScore labelled "Our own product", with a four-cell capability grid (data pipeline, neighborhood scoring, API and documentation, billing). No other products are listed.
5. **Founders** as two columns with a charcoal top rule, a role line, a short bio, and plain profile links. No monograms or badges.
6. **FAQ** as a 4/8 split using native `details`; six questions.
7. **Contact** on a charcoal band with the guided `mailto:`, the visible address, and a short "useful to include" list.
8. **Footer** on white with hairline rules, on every page.

## Visual system

- **Palette:** white `#FFFFFF`, surface `#F5F7FA`, hairline `#E3E7EC`, charcoal `#1F2328`, secondary text `#4A5160`, muted text `#5F6672`, cobalt `#1D4ED8` (hover `#1E40AF`). On the charcoal band: text `#F3F4F6`, muted `#B4BAC4`, link `#9DBBFF`. No gradients, glass, or illustration.
- **Type:** Inter for everything, weights 400 to 700. Headline 600 with tight tracking. Section labels are a plain 14px cobalt line with no rule or uppercase. No serif anywhere, including the social image.
- **Mark:** a cobalt rounded tile containing a white rounded-square ring, next to the wordmark "Oops Lab" in Inter 700. Used in the header, footer, favicon, and social image.
- **Diagram:** four nodes on a light-gray panel connected by hairlines with small dots. The agent node has a cobalt border. Nodes stack vertically with a vertical connector below 720px.
- **Composition:** single-column hero, three-column service rows, four-column process, 5/7 work, two-column founders, 4/8 FAQ, 7/5 contact. Section padding is fluid between 56px and 96px.

## Behaviour and accessibility

- No JavaScript. FAQ uses native `details`/`summary`; nothing is hidden behind animation.
- Header is sticky on screens wider than 720px (64px tall, white with a hairline). Below 720px it is static, the brand and "Email us" button share the top row, and the four nav links (Services, Work, Founders, FAQ) sit on one row beneath. "How we work" is linked from the footer.
- Contact is `mailto:` only. The main buttons pre-fill a subject and a three-line body template. Helper text says the button opens the email app, and the bare address is shown next to it. No fake form.
- Visible focus ring on every interactive element (`:focus-visible`, cobalt, 2px, 3px offset). Buttons and nav links are at least 44px tall; FAQ summaries at least 56px; founder links 44px.
- `prefers-reduced-motion` disables smooth scrolling and hover transitions. There is no other motion.
- Fluid type via `clamp`; grids collapse at 1024, 900, 720, and 560px. At 320px the hero buttons go full width and the footer is single column.
- Text colours were chosen for at least 4.5:1 on their backgrounds (cobalt on white about 6.3:1, muted `#5F6672` on white about 5.6:1 and on `#F5F7FA` about 5.2:1, muted on charcoal about 8:1). Confirm in a browser audit.

## Metadata and assets

- Title, description, canonical, Open Graph, Twitter card, and a small Organization JSON-LD block on the home page. Legal pages have canonicals. The Google site verification meta tag is unchanged. `theme-color` is white on all pages.
- Google Fonts request is `Inter:wght@400;500;600;700`.
- `assets/favicon.svg` redrawn as the cobalt tile mark.
- `assets/og.svg` redrawn: white ground, tile and wordmark, two-line sans headline, hairline, service line and URL. The `og:image` and `twitter:image` tags point to `assets/og.png`, which must be re-exported from the revised SVG at 1200x630. The existing PNG in the repo is the v1 artwork until that export is done.

## What is deliberately not claimed

- No statistics, savings, timelines, response times, availability, prices, certifications, testimonials, client names, or client logos.
- No client engagements are mentioned, current or past. Business context about early clients is not website content.
- No engagement history or counts. Services are described as what a client can hire us for.
- No search outcome guarantees. Website copy describes deliverables (structure, speed, metadata, indexing) rather than rankings.
- No "lead service" label, no comparisons with other vendors, no language about company size or stage.
- CrimeScore is described qualitatively using only capabilities from the previous site: data pipeline, neighborhood scoring, API and documentation, billing. Other own products (Mousey, WanderAware, Taskmosis) are not on the home page; they remain named in the legal pages, which cover them.
- Founder bios avoid employer names and figures.
- Legal pages: header, footer, label, and head metadata were updated; the substantive policy and terms text, dates, entity details, and sign-off blocks are unchanged.

## Copy that the founders should confirm

Reasonable defaults for a consultancy, written without evidence:

- "After a first conversation we send a written proposal with a price and exactly what is included." (FAQ, cost)
- "We work remotely with clients and are happy to meet over a call." (FAQ, location)
- "Everything we build lives in accounts and repositories in your name." (FAQ, lock-in; also process step 3 and the after-launch note)
- "We read every message ourselves and reply directly." (contact)
- Alex bio: modernized legacy .NET applications; infrastructure as code. Ian bio: took CrimeScore from a weekend data pipeline to a live API. Both carried from v1 and the previous site.

## Files touched in v2

- `index.html` rewritten.
- `styles.css` rewritten; legal (`.legal*`) and 404 (`.notfound*`) rules included.
- `privacy.html`, `terms.html`: head (theme colour, font link), header, footer, and the "Legal" label class only.
- `404.html` rewritten with shared header and footer; title is "Page not found".
- `assets/favicon.svg` and `assets/og.svg` redrawn.
- `README.md` and this document updated.

## Pending checks (not run here)

- Export `assets/og.png` from the revised `assets/og.svg` at 1200x630 and confirm the preview with a card validator after deployment.
- Browser render at 320, 390, 720, and 1440px, and 200% zoom at 1440px: no horizontal scroll, the workflow connectors line up between nodes at desktop and stack cleanly on mobile, the four nav links fit one row at 320px.
- Total page height at 1440px should land roughly between 3500 and 4800px; mobile should be far shorter than the previous 10380px.
- Keyboard tab order and visible focus on the sticky header, FAQ summaries, and the charcoal contact band.
- Contrast audit of the values listed above with the loaded Inter font.
- Confirm the "founders should confirm" copy above.

## Browser verification by Codex

See [testing plan and results](tests/consultancy-redesign-testing-plan.md). Results recorded there before 2026-09-25 v2 refer to the rejected v1 layout and need re-running against the current files.


## Current v2 verification

Codex completed the v2 responsive, interaction, contrast, font, legal-text and link checks described in [the testing results](tests/consultancy-redesign-testing-plan.md). The revised white/blue social SVG has been re-exported to the PNG and inspected at 1200x630. Implementation-pass pending notes above are historical where these results supersede them. Actual browser zoom controls, Safari/Firefox, live deployment and social-platform cache validation remain untested. No commit, push or deployment was performed.
