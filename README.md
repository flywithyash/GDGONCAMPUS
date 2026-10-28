# GDG on Campus — Poornima University, Jaipur
### The Build Space: A home for curious minds and campus builders

An engineering-first web platform crafted for the **Google Developer Groups (GDG) on Campus — Poornima University** chapter, designed for the Tech Lead / Core-Team technical assessment.

---

## 🌟 Key Features

- **The Build Space Architecture**: Restrained editorial layout combining dark ink surfaces (`#10151F`) with crisp content cards and functional Google quad-color accents.
- **Interactive Campus Build Board**: Miniature developer workstation simulating live Web (React 19), AI (Gemini Multimodal API), Cloud (asia-south2 GCP Cloud Run), and Android (Jetpack Compose).
- **Verified Documented Gatherings**:
  - Google Solution Challenge Kick-off and Workshop (18 March 2026)
  - Build with AI Workshop: Let's Hack It! (22 January 2026)
  - GDG India Hackathon Briefing Session (24 December 2025)
  - Step into a World of Innovation – Orientation 2025–26 (6 October 2025)
- **Interactive Filtering & Search**: Category filtering (`All`, `Workshops`, `AI`, `Hackathons`, `Community`), real-time search, and zero-state resets.
- **Problem Statement Architecture Specs**: Interactive detail spec modals covering real campus initiatives with architecture blueprints and delivery milestones.
- **Verified Chapter Destinations**: Direct links to the official GDG Chapter Portal, WhatsApp Community, LinkedIn, Instagram, and Telegram.
- **Accessibility & Performance**: Keyboard focus states (`focus-visible`), `Skip to main content` anchor, and `@media (prefers-reduced-motion: reduce)` support.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React + Custom SVG Brand Assets
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Code Quality**: Oxlint (0 warnings, 0 errors)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Run

```bash
# Clone the repository
git clone <your-repo-url>
cd gdg-poornima

# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build
```

The application will be live at `http://localhost:5173/`.

---

## 📁 Project Structure

```
gdg-poornima/
├── index.html                  # Accessible HTML with Google Fonts
├── tailwind.config.js          # Chapter design tokens & color palette
├── src/
│   ├── config/
│   │   └── site.js             # Central chapter metadata & verified URLs
│   ├── data/
│   │   ├── events.js           # Verified past chapter event records
│   │   ├── pathways.js         # Web, AI, Cloud, Android tracks & codelabs
│   │   └── projects.js         # Campus problem statements & architecture specs
│   ├── components/
│   │   ├── Navbar.jsx          # Chapter branding, nav links & mobile drawer
│   │   ├── Hero.jsx            # "Build what comes next." hero & dual CTAs
│   │   ├── CampusBuildBoard.jsx # Interactive miniature developer workspace
│   │   ├── CommunityIntro.jsx  # "The Build Space" 3 core pillars
│   │   ├── TracksSection.jsx   # Learning pathways & codelab guides
│   │   ├── ProjectsSection.jsx # Campus problem statements with spec modal
│   │   ├── EventsSection.jsx   # Documented events with search & category filters
│   │   ├── CommunityLinks.jsx  # Verified official chapter destinations
│   │   └── Footer.jsx          # Chapter disclaimer & quad-color accent strip
│   ├── App.jsx                 # Main layout composition
│   ├── main.jsx                # React root mount
│   └── index.css               # Global Tailwind directives & focus states
```

---

## 📜 Disclaimer
GDG on Campus at Poornima University is an independent student group. Activities and the opinions expressed here should in no way be linked to Google, the corporation.
