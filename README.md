# JW Corporate Website — 주식회사 제이더블유

Astro + TypeScript + Tailwind CSS v4 + Cloudflare Pages (static HTML).

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` checks Astro/TypeScript and writes static pages to `dist/`.

## Company details (IMPORTANT)

Edit `src/config/company.ts`. Unknown CEO, registration number, address, date, telephone, email and domain are intentionally empty and are not displayed. Publish an email only once the mailbox exists and you have tested inbound mail. `englishName` is display branding, **not** proof of legal English company name.

Add projects at `src/data/projects.ts`. A planned/unreleased project must have `status: 'planning'` or `status: 'development'`. A project link is displayed only for released projects.

## Deployment on Cloudflare Pages

1. Push this project root to a GitHub repo you control.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → select repo.
3. Build command: `npm run build`; output directory: `dist`; root directory: project root; Node.js >= 20.19 (prefer 22).
4. Connect your corporate custom domain in Cloudflare Pages → Custom domains. Confirm DNS verification and that HTTPS works.
5. In Pages → Settings → Environment variables, set `PUBLIC_SITE_URL=https://www.REAL_DOMAIN` (use YOUR actual HTTPS domain). Trigger a fresh production deploy.
6. After deploying, check `https://YOUR_DOMAIN/`, `/company/`, `/business/`, `/projects/`, `/contact/`, `/privacy/`, `/sitemap-index.xml` (generated only when PUBLIC_SITE_URL is set), and a missing URL (404).
7. Run a live receipt test for the corporate email and verify privacy policy details before submitting the URL to Galaxy Store.

Note: deployment to a `*.pages.dev` subdomain is available first. The user-requested completion condition includes attaching and verifying the **real custom corporate domain**; that cannot be claimed until actual domain/DNS/Cloudflare access is provided.

## Metadata, policies & cautions

- SEO: title, description, OpenGraph; canonical generated only with PUBLIC_SITE_URL. Sitemap conditional on the same variable.
- No tracking scripts, form submission, database, or server API included.
- Privacy policy is a starter and must be reviewed against actual Cloudflare settings and legal disclosure requirements (including international transfers and contact responsibilities).
- Galaxy Store approval is not guaranteed by a website alone; follow Samsung's current seller verification requirements.
