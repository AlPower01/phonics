# Phonics.org Prototype

Production-ready website prototype for `Phonics.org`, built from the attached ZIP as the primary source of truth.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4

## How to run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## What in the ZIP informed the build

- `phonics-2/phonics-org-design-brief.md`
  - Primary source of truth for IA, required routes, page templates, URL patterns, and component requirements.
- `phonics-2/wireframes/01-homepage.html`
  - Homepage section order and module composition.
- `phonics-2/wireframes/02-mega-menu.html`
  - 4-column desktop mega menu structure and mobile accordion behavior.
- `phonics-2/wireframes/03-pillar-page.html`
  - Pillar template structure: breadcrumbs, sticky TOC, callouts, FAQ, cluster grid, related-section links.
- `phonics-2/wireframes/04-article-page.html`
  - Article template structure: key answer box, sticky sidebar, post-content modules.
- `phonics-2/wireframes/05-reviews-hub.html`
  - Reviews hub composition: editor’s picks, sticky filter bar, review grid, comparison table.
- `phonics-2/wireframes/06-single-review.html`
  - Single review scoring, verdict, pros/cons, alternatives layout.
- `phonics-2/wireframes/07-audience-landing.html`
  - Curated parent/teacher entry-point structure and pathway framing.
- `phonics-2/wireframes/08-glossary.html`
  - Glossary hub plus single-term template.
- `phonics-2/design/brand-guidelines.md`
  - Color tokens, typography direction, motion restraint, premium editorial feel.
- `phonics-2/design/example-homepage.html`
- `phonics-2/design/example-homepage.css`
  - Homepage visual tone, spacing, sticky header treatment, card polish, and general surface language.

## Assumptions and conflicts resolved

- The brief defines 7 primary sections; the homepage wireframe visually spotlights 6 topic cards.
  - I kept all 7 sections in the information architecture and top navigation, and used a curated homepage card set while still exposing Reviews prominently in its own spotlight section.
- The brief requires parent and teacher audience pages as curated entry points, not archives.
  - I implemented them as pathway-led landing pages with ordered reading sequences and audience-specific resource selections.
- The brand guidance cautions against heavy gradients, while some wireframes use stronger gradient hero treatments.
  - I used restrained, tinted editorial surfaces and subtle gradients rather than loud gradient-heavy blocks.
- Wireframes imply expandable pathway modules on audience pages.
  - For prototype clarity and review speed, the curated paths are rendered visibly instead of hidden behind expansion controls.
- The brief describes long-form pillar and article content lengths beyond what is practical for a prototype seed set.
  - The templates and hierarchy are implemented fully, with realistic sample content sized for a prototype rather than final editorial production.
