# Project Rules for Dispotraders
- **Tech Stack**: Next.js 14+ (App Router), Tailwind CSS, Framer Motion.
- **Routing**: Use folder-based routing ONLY (e.g., `src/app/en/page.tsx`).
- **Critical Rule**: Do NOT add `i18n` config to `next.config.js` (unsupported).
- **Styling**: Always use Tailwind utility classes.
- **Lazy Check**: Before providing code, ensure it passes a `next build` logic check.
- **Structure**: Re-export the root page for language routes to stay DRY (Don't Repeat Yourself).