# Nandi-Gabriella Shandu — Developer Portfolio (v2)

**Track:** Frontend Development  
**Chosen Option:** Option A — Personal Portfolio Site  
**Submission:** Final Track Project Assessment  

A modern, accessible, and high-performance developer portfolio built from scratch with React (Vite) and Tailwind CSS. The application presents full-stack software development projects, hackathon achievements, verified credentials, and an integrated contact workflow. Designed with a custom Emerald theme, complete keyboard accessibility, and a persistent dark mode toggle.

- Live Deployment: https://6aee1bb704c290dbe9c3a93a--nandidevfolio.netlify.app/
- GitHub Repository:(https://github.com/Nandi288/frontend-final-portfolio)

---

Features Implemented

- Dynamic Routing & Detail Pages: Full client-side routing via React Router DOM, including dynamic case-study routes (`/projects/:projectId`) with deep-link persistence across page reloads.
- Controlled Contact Form:Netlify-integrated contact form featuring input state control, validation, and distinct operational states (`idle`, `sending`, `success`, `error`).
- Unified Emerald Theme & Dark Mode: Accessible color system configured through Tailwind tokens with dark/light persistence saved to `localStorage`.
- Hackathon & Milestones Tracker: Dedicated timeline showcasing competitive sprints, prototype pitch deliverables, and awards.
- Accessibility & Skip Navigation:Accessible landmark routing, Tab-index focus ring indicators, descriptive image `alt` attributes, and a skip-to-content bypass link.

---

Technical Stack

- Framework: React 18 (Vite)
- Styling: Tailwind CSS (Utility-first, class-based dark variant)
- Routing: React Router DOM (v6)
- Hosting & Form Processing: Netlify

---

## Local Setup & Installation

Clone the repository and install dependencies locally:

```bash
# Clone repository
git clone [https://github.com/Nandi288/frontend-final-portfolio.git](https://github.com/Nandi288/frontend-final-portfolio.git)

# Navigate to project directory
cd frontend-final-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
