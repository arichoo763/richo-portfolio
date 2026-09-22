# IT Infrastructure Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing portfolio into a cohesive dark NOC / IT Infrastructure portfolio while preserving routes, factual content, CV access, and existing technology choices.

**Architecture:** Keep the current Next.js App Router and server-component pages. Centralize visual identity in `app/globals.css`, keep navigation interactivity isolated in existing client components, and compose each route from data arrays plus semantic cards/panels without adding dependencies.

**Tech Stack:** Next.js 15.5.3, React 19.1.0, TypeScript 5, Tailwind CSS 4, lucide-react.

**Spec:** `docs/superpowers/specs/2026-09-22-it-infrastructure-portfolio-redesign.md`

## Global Constraints

- Keep Next.js 15 App Router structure.
- Keep React 19 and Tailwind CSS 4.
- Keep routes `/`, `/about`, `/experience`, `/skill`, `/portfolio`.
- Keep `/file/cv.pdf` intact.
- Do not add runtime dependencies.
- Preserve responsive mobile/tablet/desktop behavior.
- Prefer server components; client code remains limited to interactive navigation.
- Do not present placeholder email, phone, or generic LinkedIn URLs as verified contact details.
- Remove legacy purple styling from redesigned surfaces.

## Review Focus

- Mobile navigation must remain usable on narrow widths and retain all route links plus CV access.
- Home must be a real landing page rather than a duplicate skill matrix.
- Placeholder contact strings must not appear anywhere in rendered source.
- About and Home must avoid claims of measured uptime, certifications, or outcomes not present in repository content.
- Every existing route and `/file/cv.pdf` reference must remain build-valid.

---

### Task 1: Design system, navigation, contact, and footer

**Files:**
- Create: `tests/redesign-contract.test.mjs`
- Modify: `app/globals.css`
- Modify: `components/navbar.tsx`
- Modify: `components/mobile-nav.tsx`
- Modify: `app/(home)/contact.tsx`
- Modify: `app/(home)/footer.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: existing App Router routes and `/file/cv.pdf`.
- Produces: shared CSS utilities `.grid-shell`, `.tech-panel`, `.status-dot`, `.terminal-label`, `.page-shell`, `.section-title`, `.eyebrow`; consistent dark navigation/footer; neutral CV-based contact CTA.

- [ ] **Step 1: Write the failing contract tests**

Create a Node built-in test that reads source files and asserts: no `purple`, no `example.com`, no generic `https://www.linkedin.com`, navbar contains `bg-slate-950`, footer contains `/file/cv.pdf`, and globals exposes `.grid-shell` and `.tech-panel`.

- [ ] **Step 2: Run contract tests and verify RED**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: FAIL because legacy purple/placeholders remain and shared utilities are absent.

- [ ] **Step 3: Implement the shared design shell**

Use dark slate navigation/footer surfaces, cyan active/hover accents, DM Mono operational labels, neutral contact copy, CV link, focus-visible states, and reusable grid/panel utility classes. Metadata remains factual: `Richo Armando | IT Infrastructure Engineer`.

- [ ] **Step 4: Run contract tests and verify relevant Task 1 assertions GREEN**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: assertions owned by Task 1 pass; later-page assertions may still fail until Tasks 2-3.

### Task 2: Rebuild Home as the NOC landing page

**Files:**
- Modify: `app/(home)/page.tsx`
- Modify: `tests/redesign-contract.test.mjs`

**Interfaces:**
- Consumes: shared utilities from Task 1 and routes `/experience`, `/skill`, `/portfolio`, `/file/cv.pdf`.
- Produces: hero, operations status panel, capability strip, operational focus cards, reliability statement, and contact CTA.

- [ ] **Step 1: Add failing Home assertions**

Assert Home contains `NOC / IT Infrastructure Engineer`, `OPERATIONS STATUS`, all five capability labels (`Server`, `Virtualization`, `Network`, `Security`, `Monitoring`), and links to `/experience`, `/portfolio`, and `/file/cv.pdf`.

- [ ] **Step 2: Run Home contract test and verify RED**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: FAIL because the current Home is still a skills grid.

- [ ] **Step 3: Implement the landing page**

Replace the duplicated skills grid with a dark hero and restrained grid backdrop; operational status rows for Data Center, Virtualization, Network Edge, Monitoring; compact capability strip; three focus cards; profile/reliability statement; and CV/contact CTA without invented contact details.

- [ ] **Step 4: Run contract tests and verify Home GREEN**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: Home assertions pass.

### Task 3: Unify About, Experience, Expertise, and Projects

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `app/experience/page.tsx`
- Modify: `app/skill/page.tsx`
- Modify: `app/portfolio/page.tsx`
- Modify: `tests/redesign-contract.test.mjs`

**Interfaces:**
- Consumes: shared utilities and preserved factual content arrays.
- Produces: mission/profile About layout, operations workflow Experience matrix, eight-module Expertise grid, and four case-study-style Project panels.

- [ ] **Step 1: Add failing secondary-page assertions**

Assert About contains `NOC Engineer / IT Infrastructure` and no replacement character; Experience includes all six responsibilities; Expertise includes eight capability titles; Projects includes all four existing focus titles and no unverifiable metrics.

- [ ] **Step 2: Run secondary-page tests and verify RED**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: FAIL at least on About replacement-character and dark-system contract assertions.

- [ ] **Step 3: Implement secondary pages**

Apply cohesive dark/light section hierarchy, technical sequence numbers, tool chips, cyan accents, semantic headings, and responsive grids while preserving existing responsibility/capability/project wording.

- [ ] **Step 4: Run contract tests and verify GREEN**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: PASS.

### Task 4: Verification and packaging

**Files:**
- Modify only if verification reveals a defect.
- Create: `/mnt/data/richo-armando-redesign-A.zip`

**Interfaces:**
- Consumes: completed source tree.
- Produces: lint-clean/build-clean distributable ZIP.

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run: `npm run build`
Expected: exit code 0; routes `/`, `/about`, `/experience`, `/skill`, `/portfolio` are generated without TypeScript/build errors.

- [ ] **Step 3: Re-run contract tests**

Run: `node --test tests/redesign-contract.test.mjs`
Expected: all tests pass.

- [ ] **Step 4: Static safety scan**

Run: `grep -RInE 'purple|example\\.com|https://www\\.linkedin\\.com|�' app components --exclude='*.pdf'`
Expected: no output.

- [ ] **Step 5: Package**

Create `/mnt/data/richo-armando-redesign-A.zip`, excluding `.next`, `node_modules`, `.git`, and transient cache files, while retaining source, public assets, package lock, tests, and design/plan docs.
