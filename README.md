# Exterview Home UI 🚀

A high-fidelity, pixel-perfect replication of the [Exterview.ai](https://exterview.ai/) homepage. Built with a focus on modern React architecture, performance, and responsive design using the Next.js ecosystem.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?logo=shadcnui)](https://ui.shadcn.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?logo=bun)](https://bun.sh/)

[**✨ Live Demo**](https://exterview-home-ui.vercel.app) | [**📂 Codebase**](https://github.com/kumaraswini-11/exterview-home-ui)

---

## 🎨 Architecture & Design

This project follows a **Modular Section-Based Architecture**. Each part of the landing page is isolated into a self-contained component to ensure maintainability and easy debugging.

### Component Breakdown

- **Navigation**: Fully responsive Navbar with mobile-optimized drawer.
- **Hero & Impact**: Dynamic banners with floating animations and data-driven stats.
- **Workflow & Fraud-Proof**: High-contrast sections utilizing CSS gradients and interactive accordions.
- **AI Suite & Solutions**: Complex grid layouts ($bento\ box$ style) featuring hover states and compliance integration.
- **Streamline Carousel**: Custom-engineered slider using `embla-carousel` via shadcn/ui.
- **Blog & Insights**: Content-rich section featuring a primary highlight and sidebar article feeds.

---

## 🛠️ Tech Stack & Decisions

- **Next.js (App Router):** Leveraged for Server Components, optimized routing, and built-in image handling.
- **Tailwind CSS:** Used for utility-first styling, ensuring a tiny CSS bundle size and rapid UI development.
- **Shadcn/UI:** Radix-UI based primitives for accessible, unstyled components like Dialogs, Carousels, and Accordions.
- **Lucide React:** For a consistent, lightweight iconography system.
- **TypeScript:** Strictly typed interfaces for all components and constants to reduce runtime errors.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed (recommended for speed) or Node.js.

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/kumaraswini-11/exterview-home-ui.git](https://github.com/kumaraswini-11/exterview-home-ui.git)
   cd exterview-home-ui
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   bun dev
   ```

4. **Build for production:**

   ```bash
   bun run build
   ```

---

## 📊 Performance & Optimization

- **Image Optimization:** Used `next/image` for WebP conversion, lazy loading, and priority loading for LCP elements (Hero).
- **Code Splitting:** Automatic splitting ensures the browser only loads the JavaScript required for the current view.
- **SEO & Accessibility:** Semantic HTML5 tags (`<section>`, `<article>`, `<main>`) and ARIA labels for interactive elements.
- **Code Quality:** Configured with `ESLint` and `Prettier` for standardized formatting and linting.

---

## 📄 License

This project is created for educational and assessment purposes. All assets and brand identity belong to **Exterview.ai**.
