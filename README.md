# 🌍 ODYSSE — Luxury Travel & Destination Platform

> **Discover More Than Just Destinations.**  
> A bespoke, luxury travel web application designed for curious travelers seeking meaningful journeys, authentic cultural encounters, and memorable escapes.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## ✨ Key Features

- 🗺️ **Dynamic Destination Route Slugs (`/[slug]` & `/destinations/[slug]`):**
  - Next.js 16 App Router dynamic segments with asynchronous `Promise<{ slug: string }>` params and `generateStaticParams()` pre-rendering.
  - Comprehensive destination guides with travel facts (Best Time to Visit, Currency, Language), curated experiences, place highlights, and high-resolution photo galleries.
- 💖 **Full-Featured Wishlist System (`/wishlist`):**
  - Seamless `localStorage` persistence using React 19's `useSyncExternalStore` for zero hydration mismatches and instant cross-tab synchronization.
  - One-click heart bookmark buttons on destination cards throughout Home, Explore, and Slug pages.
  - Real-time dynamic count badge in the desktop and mobile navigation bars.
- ✈️ **Interactive "Plan Your Trip" Modal:**
  - Accessible global modal dialog triggerable from anywhere in the app (Navbar, Hero, CTA).
  - 4-step travel personalization: destination selector, travel vibe (*Cultural, Adventure, Relaxation*), group size, season, and traveler contact info.
  - Smooth loading simulation followed by an on-brand **Itinerary Summary Card** with unique reference ID (`#ODY-XXXX`) and direct WhatsApp sharing.
- 🧭 **Explore Page with Live Search (`/explore`):**
  - Instant query matching by country name, city, continent, or activity.
  - Quick-access destination pills and interactive categories (*Adventure, Relaxation, Cultural*).
- 📖 **Editorial "About" Narrative (`/about`):**
  - High-fashion travel magazine storytelling with 7 dedicated sections: About Hero, Our Story, Our Mission, What We Believe, Handpicked Escapes, Closing CTA, and Interactive Newsletter.
- 📱 **Mobile-First & Performance-Optimized:**
  - Utilizes modern `min-h-svh` (Small Viewport Height) to eliminate mobile browser URL-bar layout jittering and resize stutter.
  - Full-screen sliding drawer navigation for mobile with active route indicators.
- 🛡️ **Custom 404 Recovery (`app/not-found.tsx`):**
  - Elegant on-brand error page guiding travelers back to safe routes with quick destination jump links.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (Turbopack)** | Full-stack React framework with App Router & dynamic SSG |
| **React 19** | Concurrent UI library with `useSyncExternalStore` |
| **Tailwind CSS v4** | Modern utility-first CSS engine with inline CSS variables |
| **TypeScript 5** | Strict end-to-end static type checking |
| **Lucide React** | Consistent, lightweight SVG icon system |
| **Google Fonts** | `Playfair Display` (editorial serif) & `Inter` (clean sans-serif) |

---

## 📁 Project Structure

```text
odysse/
├── app/
│   ├── [slug]/                  # Dynamic destination guide pages
│   ├── about/                   # About narrative (Story, Mission, Values)
│   ├── destinations/[slug]/     # Re-exported alias route
│   ├── explore/                 # Explore page (Search, Featured, Categories)
│   ├── wishlist/                # Saved destinations manager
│   ├── globals.css              # Tailwind v4 theme tokens & keyframes
│   ├── layout.tsx               # Root layout with shared Navbar, Footer & Providers
│   ├── not-found.tsx            # Custom 404 page
│   └── page.tsx                 # Home landing page
├── components/
│   ├── about/                   # About page sections (Hero, Story, Mission, Values, CTA)
│   ├── explore/                 # Explore components (Search, Featured, Categories)
│   ├── home/                    # Home components (Hero, Intro, Destinations, Experiences, CTA)
│   ├── Footer.tsx               # Global shared footer
│   ├── Navbar.tsx               # Global responsive floating navbar
│   ├── Newsletter.tsx           # Interactive newsletter subscription
│   ├── Pagination.tsx           # Pagination UI component
│   ├── PlanTripModal.tsx        # "Plan Your Trip" interactive modal
│   └── WishlistButton.tsx       # Reusable heart bookmark button (icon & button variants)
├── context/
│   ├── PlanTripContext.tsx      # Modal state management
│   └── WishlistContext.tsx      # Reactive localStorage wishlist store
├── data/
│   └── destinations.ts          # Central static destination dataset (countries & cities)
├── public/                      # Static assets, icons, and hero photography
├── next.config.ts               # Next.js configuration (Pexels remote patterns)
├── package.json                 # Project dependencies & scripts
└── tsconfig.json                # TypeScript path mapping (@/*)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or Node.js 20+
- npm, pnpm, or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/odysse.git
   cd odysse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Quality Assurance

Verify that types and linting rules pass cleanly:

```bash
# Typecheck
npx tsc --noEmit

# Lint check
npm run lint

# Production build
npm run build
```

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
