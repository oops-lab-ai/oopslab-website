# oopslab-website

Source for [oopslab.ai](https://oopslab.ai) — the marketing + legal site for Oops Lab LLC.

## What this is

A static, single-page portfolio site plus the legal pages required for Google Play and Apple App Store developer verification (privacy policy, terms of service).

- Static HTML/CSS — zero build step
- Hosted on GitHub Pages from `main`
- Custom domain: `oopslab.ai` (CNAME file in repo root)

## Files

```
index.html        Landing page (hero, products, founders, contact)
privacy.html      Privacy Policy — Mousey-aware, Google Play ready
terms.html        Terms of Service
404.html          Custom 404
styles.css        All styling (~22 KB)
assets/           favicon + future product imagery
CNAME             Custom domain for GitHub Pages
```

## Editing

It's plain HTML. Edit, push to `main`, GitHub Pages redeploys.

## DNS setup (one-time)

When pointing `oopslab.ai` at GitHub Pages:

1. **A records** for the apex `oopslab.ai`:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
2. **CNAME record** for `www.oopslab.ai` → `oops-lab-ai.github.io`
3. In repo Settings → Pages: confirm custom domain `oopslab.ai`, enable "Enforce HTTPS"

## License

All content © 2026 Oops Lab LLC. Code released under MIT for reference; brand and copy are reserved.
