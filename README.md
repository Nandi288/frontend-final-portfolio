# Nandi-Gabriella Shandu - Developer Portfolio (v2)

**Project Name:** EmeraldStack Devfolio  
**Chosen Option:** Option A - Personal Portfolio Site  
**Track:** Frontend Development  
**Submission:** Final Track Project Assessment  

A modernized, high-performance developer portfolio re-engineered from an earlier static HTML, CSS, and vanilla JavaScript codebase into a component-driven Single Page Application using React (Vite) and Tailwind CSS. The application showcases full-stack .NET software projects, hackathon achievements, verified academic credentials, and an integrated contact pipeline with persistent dark mode and WCAG AA accessibility.

- **Live Deployment:** [https://6aee1bb704c290dbe9c3a93a--nandidevfolio.netlify.app/](https://6aee1bb704c290dbe9c3a93a--nandidevfolio.netlify.app/)
- **GitHub Repository:** [https://github.com/Nandi288/frontend-final-portfolio](https://github.com/Nandi288/frontend-final-portfolio)

---
## Evolution & Improvements from Version 1

Architecture Upgrade: Migrated from static multi-page HTML/CSS files to a modular, reusable React component architecture with client-side routing.

Maintainable Data Layer: Replaced hardcoded markup with centralized JavaScript data stores for projects, experience timelines, and skill matrices.

Modern Styling & Theming: Rebuilt styling with Tailwind CSS tokens and added a system-aware dark/light theme switch stored in localStorage.

State-Driven Contact Workflow: Transformed a static contact template into an asynchronous, controlled form integrated with Netlify Forms.

## Features Implemented

Dynamic Routing & Detail Pages: Full client-side routing via React Router DOM, including dynamic case-study routes (/projects/:projectId) with deep-link persistence across page reloads.

Controlled Contact Form: Netlify-integrated contact form featuring input state control, validation, and distinct operational states (idle, sending, success, error).

Unified Emerald Theme & Dark Mode: Accessible color system configured through Tailwind tokens with dark/light persistence saved to localStorage.

Hackathon & Milestones Tracker: Dedicated timeline showcasing competitive sprints, prototype pitch deliverables, and awards.

Accessibility & Skip Navigation: Accessible landmark routing, Tab-index focus ring indicators, descriptive image alt attributes, and a skip-to-content bypass link.

---

## Technical Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (Utility-first, class-based dark variant)
- **Routing:** React Router DOM (v6)
- **Hosting & Form Processing:** Netlify

---

## Local Setup & Installation

Follow these instructions to clone, run, and build the project locally:

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nandi288/frontend-final-portfolio.git
   cd frontend-final-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled, optimized production assets will be generated in the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## Screenshots

### Desktop View (1280px)
![Desktop View](./public/images/screenshots/desktop-preview.png)

### Mobile View (375px)
![Mobile View](./public/images/screenshots/mobile-preview.png)



---

## Lighthouse Scores & Optimizations

Lighthouse audits were conducted on Google Chrome against the live production deployment.

### Scores Matrix

| Metric | Before Fixes | After Fixes | Minimum Target |
| :--- | :--- | :--- | :--- |
| **Performance** | 81 | **96** | Best Effort |
| **Accessibility** | 82 | **98** | $\ge$ **90 (Required)** |
| **Best Practices** | 88 | **100** | Best Effort |
| **SEO** | 85 | **100** | Best Effort |

### Accessibility & Performance Issues Fixed:

1. **Color Contrast (WCAG AA Compliance):** Replaced low-contrast gray text on dark cards with high-contrast neutral slate and zinc tokens (`dark:text-zinc-100` and `text-zinc-900`) to surpass the mandatory 4.5:1 threshold.
2. **Accessible Landmarks & Skip Link:** Added an explicit `<SkipLink />` component bypassing repetitive headers directly to the `#main-content` container for keyboard-only and screen reader navigation.
3. **Form Association & ARIA Roles:** Connected all form inputs to descriptive `<label>` tags with matching IDs and added explicit `aria-label` attributes to social icons and theme toggles.
4. **Asset Optimization & CLS:** Added explicit dimensions, object constraints, and `loading="lazy"` attributes to project thumbnails and avatar assets to eliminate Cumulative Layout Shift (CLS) and improve First Contentful Paint (FCP).
5. **SPA Route Handling:** Created a `_redirects` file (`/* /index.html 200`) in the `public` directory to ensure dynamic detail pages (`/projects/:id`) survive browser refreshes on Netlify.

---

## Known Limitations & Next Steps

### Known Limitations

- **Form Submission Persistence:** Contact form submissions are currently received and processed through Netlify Forms without a client-side user account inbox or dashboard.
- **Offline Caching:** While assets are optimized, there is no service worker configured for complete offline viewing (PWA).

### What I Would Build Next

## What I Will Build Next

1. **Interactive Project Filters & Search:** Add dynamic category filter pills (`.NET / C#`, `Azure Cloud`, `Hackathon Sprints`) on the Projects page to allow visitors to quickly sort case studies.
2. **Blog & Technical Articles Section:** Integrate a Markdown-powered tech blog documenting .NET Core architecture patterns, Azure deployments, and hackathon system designs.
3. **Automated CI/CD End-to-End Testing:** Set up GitHub Actions alongside Playwright or Cypress to automate form submission testing and accessibility checks on every push.
