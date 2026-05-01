# Correa Website - Future Change Guide

This document explains **which file controls what**, and what happens when you change each area.

## 1) Quick Start / Commands

- Install dependencies: `npm install`
- Run local server: `npm run dev`
- Production build check: `npm run build`
- Lint check: `npm run lint`

If `next` command is missing, run `npm install` again in project root.

## 2) Core Architecture

- Framework: Next.js App Router (`app/` directory)
- Styling: Tailwind CSS + global styles in `app/globals.css`
- Shared layout/SEO shell: `app/layout.tsx`
- Home page sections: `app/components/homepage-sections.tsx`
- Reusable inner page blocks: `app/components/inner-page-sections.tsx`
- Forms: `app/components/forms.tsx`
- Service data source: `app/components/service-data.ts`

## 3) Brand, Logo, Header, Footer

- **Primary dark logo (light background):** `public/logo-dark.svg`
- **Primary light logo (dark background):** `public/logo-light.svg`
- **Header + mobile menu + footer logo usage:** `app/components/homepage-sections.tsx`

### If you need to change logo visibility

- Change header background styles in `SiteHeader` component (`homepage-sections.tsx`)
- Use `logo-dark.svg` on white/light backgrounds
- Use `logo-light.svg` on dark overlays/footers/mobile drawer

## 4) Pages and Their Source Files

- Home: `app/page.tsx`
- Services index: `app/services/page.tsx`
- Contact: `app/contact/page.tsx`
- About: `app/about-us/page.tsx`
- Additional route pages:
  - `app/services/general-contracting/page.tsx`
  - `app/services/design-build/page.tsx`
  - `app/services/renovation-remodeling/page.tsx`
  - `app/services/project-consultation/page.tsx`
  - `app/services/commercial/page.tsx`
  - `app/services/residential/page.tsx`
  - `app/general-contractor-in-dallas/page.tsx`
  - `app/general-contractor-in-frisco/page.tsx`
  - `app/general-contractor-in-arlington/page.tsx`
  - `app/construction-company-in-denton/page.tsx`
  - `app/subcontractors/page.tsx`
  - `app/join-our-team/page.tsx`
  - `app/who-we-are/page.tsx`
  - `app/what-we-do/page.tsx`
  - `app/contact-us/page.tsx`

## 5) SEO Controls (Most Important)

- Global metadata (site-wide title template, OG, robots defaults): `app/layout.tsx`
- Home page metadata: `app/page.tsx`
- Per-page metadata: each page file via `export const metadata`
- Robots file: `app/robots.ts`
- Sitemap: `app/sitemap.ts`

### For future SEO updates

- Update title/description keywords in each page metadata object
- Add/remove routes in `app/sitemap.ts`
- Keep canonical domain consistent (`https://correaconstruction.com`)

## 6) Home Page Section Mapping

All controlled in `app/components/homepage-sections.tsx`.

- `SiteHeader`: top nav, mobile drawer, logo, CTA buttons
- `HeroSection`: top fold visual + headline + CTA buttons
- `StatsSection`: metrics strip
- `AboutSection`: short intro
- `ProjectTypeFocusSection`: focus cards
- `JoinOurTeamSection`: careers promotion
- `FeaturedProjectsSection`: selected projects
- `ServicesSection`: service cards
- `ProcessSection`: how-it-works steps
- `WhyChooseUsSection`: trust points
- `ServiceAreasSection`: city pages links
- `CtaSection`: final conversion block
- `SiteFooter`: footer links and contact details

If content text needs update, this is the first file to edit.

## 7) Service Pages Data Flow

- Data source: `app/components/service-data.ts`
- Page renderer: `app/components/service-detail-page.tsx`
- Service route files consume this data.

### What changes what

- Edit `seoTitle` / `seoDescription` in service data -> changes SEO for service pages
- Edit `heroImage`, `gallery`, `points` -> changes visible service content
- Add a new service object -> also add a route page and link in nav/cards

## 8) Forms and Lead Capture UI

- Contact form UI: `ContactInquiryForm` in `app/components/forms.tsx`
- Careers form UI: `CareerApplicationForm` in `app/components/forms.tsx`
- Subcontractor form UI: `SubcontractorRegistrationForm` in `app/components/forms.tsx`

Current forms are UI-only. To connect backend/API:

1. Create API route in `app/api/.../route.ts`
2. Add `onSubmit` handler in form component
3. Validate inputs and handle success/error toast states

## 9) Mobile Friendliness Controls

- Header behavior and mobile drawer: `SiteHeader` in `homepage-sections.tsx`
- Responsive spacing/grid patterns:
  - `px-6 md:px-10 lg:px-14`
  - `grid`, `md:grid-cols-*`, `lg:grid-cols-*`
- Global typography/scroll behavior: `app/globals.css`

When testing mobile, verify at 360px, 768px, 1024px widths.

## 10) Animation Layer

- Scroll and reveal animations: `app/components/gsap-animations.tsx`
- Floating call + back-to-top actions: `app/components/floating-actions.tsx`

If performance issues appear on low-end mobile, reduce animation intensity or disable heavy effects there.

## 11) Common Errors and Fixes

### Error: Merge conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)

- Cause: incomplete merge
- Fix: remove markers and keep only valid JSX/TS in affected file
- Verify: `npm run build`

### Error: `'next' is not recognized`

- Cause: dependencies missing
- Fix: `npm install`

### Error: image domain blocked

- Cause: remote image host not allowed
- Fix: add host in `next.config.ts` under `images.remotePatterns`

### Error: build fails but dev works

- Run `npm run build` and fix all TypeScript/runtime errors before deployment.

## 12) Safe Change Checklist (Before Submission)

1. `npm install`
2. `npm run lint`
3. `npm run build`
4. Open home + services + contact on mobile viewport
5. Check logo in header, drawer, footer
6. Check page titles and meta descriptions in browser devtools
7. Confirm no conflict markers in codebase

## 13) Priority Files for Fast Edits

If you only have 10-15 minutes, edit these first:

- `app/components/homepage-sections.tsx` (UI/content/header/footer/mobile)
- `app/layout.tsx` (global SEO + branding defaults)
- `app/page.tsx` (homepage SEO/content config)
- `app/services/page.tsx` and `app/contact/page.tsx` (high conversion pages)
- `app/components/service-data.ts` (all service content/SEO)

