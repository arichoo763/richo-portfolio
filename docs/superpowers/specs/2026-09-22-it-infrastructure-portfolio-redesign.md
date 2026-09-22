# IT Infrastructure Portfolio Redesign

## Goal
Redesign the existing Richo Armando portfolio into a cohesive IT Infrastructure / NOC professional identity while preserving the current Next.js routes, existing portfolio content, CV file, and core functionality.

## Visual Direction
- Dark navy / near-black foundation with cyan accents.
- NOC/data-center visual language: grid overlays, status indicators, system panels, terminal-inspired labels, network/infrastructure motifs.
- Professional rather than gaming/cyberpunk: glow is restrained, typography remains highly readable, and cards use clear hierarchy.
- Manrope remains the main UI typeface; DM Mono is used for operational labels, status strings, metadata, and section identifiers.

## Global System
### Colors
- Background: slate-950 / near-black for hero and major dark surfaces.
- Secondary surfaces: slate-900 / slate-800.
- Content surfaces: slate-50 / white only where contrast is useful.
- Accent: cyan-300 through cyan-500.
- Status success: emerald only for operational indicators.

### Shared UI
- Sticky dark navigation with cyan identity mark and compact infrastructure title.
- Active/hover states use cyan rather than purple.
- Mobile navigation follows the same dark visual system.
- Footer becomes a dark operations-style footer with navigation, role summary, CV access, and only verified contact links.
- Add reusable utility classes for grid backgrounds, panel borders, terminal/status labels, and section spacing.

## Page Structure
### Home `/`
Replace the duplicated skills-only page with a true landing page:
1. Hero: Richo Armando, NOC / IT Infrastructure Engineer, concise value proposition, CTAs to Experience and CV.
2. Operations status panel: Data Center, Virtualization, Network Edge, Monitoring.
3. Core capability strip: Server, Virtualization, Network, Security, Monitoring.
4. Selected operational focus cards linking to relevant pages.
5. Short profile / reliability statement.
6. Contact CTA that does not depend on unverified placeholder details.

### About `/about`
- Keep professional photo.
- Retain the infrastructure-focused positioning.
- Convert the current hero into a polished mission/profile section.
- Fix the broken replacement character in the NOC Engineer label.
- Strengths displayed as operational principles rather than generic bullets.

### Experience `/experience`
- Preserve current responsibility content.
- Present as an operations matrix / incident-workflow style layout.
- Add stronger hierarchy, sequence numbering, and dark technical panel styling.

### Expertise `/skill`
- Preserve the eight capability groups.
- Use infrastructure module cards with compact tool/capability indicators.
- Avoid duplicating the Home page by making this the detailed technical matrix.

### Projects `/portfolio`
- Preserve the four current technical project/focus records.
- Redesign cards as case-study/operations panels with tool tags, category labels, and restrained hover behavior.
- Avoid implying unverifiable outcomes or metrics.

## Contact & Footer
- Existing placeholder email values (`richoarmando@example.com`, `your-email@example.com`, `richo@example.com`) must not be presented as factual contact details.
- Contact CTA can point to CV or LinkedIn only if an actual verified URL exists in the repository. Otherwise, use neutral copy such as "Contact details available in CV" and a CV button.
- No fake phone number or social link will be invented.

## Technical Constraints
- Keep Next.js 15 App Router structure.
- Keep React 19 and Tailwind CSS 4.
- Keep current routes: `/`, `/about`, `/experience`, `/skill`, `/portfolio`.
- Keep `/file/cv.pdf` intact.
- Avoid adding new runtime dependencies unless required.
- Preserve responsive behavior across mobile, tablet, and desktop.
- Prefer server components; client code stays limited to interactive navigation.

## Files Expected to Change
- `app/(home)/page.tsx`
- `app/(home)/contact.tsx`
- `app/(home)/footer.tsx`
- `app/about/page.tsx`
- `app/experience/page.tsx`
- `app/skill/page.tsx`
- `app/portfolio/page.tsx`
- `components/navbar.tsx`
- `components/mobile-nav.tsx`
- `app/globals.css`
- `app/layout.tsx` only if metadata/body-level styling needs adjustment.

## Verification
- Run `npm run lint`.
- Run `npm run build`.
- Check that all routes render without TypeScript/build errors.
- Check no purple legacy styling remains in redesigned surfaces.
- Check no placeholder email/social URL is presented as real contact information.
- Package the finished project into a new ZIP, excluding `.next` and unnecessary generated cache where practical.
