import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CommunityIntro } from "./components/CommunityIntro";
import { TracksSection } from "./components/TracksSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EventsSection } from "./components/EventsSection";
import { CommunityLinks } from "./components/CommunityLinks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas-bg text-content-primary selection:bg-gdg-blue/20 selection:text-gdg-blue flex flex-col font-sans">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gdg-blue focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero />
        <CommunityIntro />
        <TracksSection />
        <ProjectsSection />
        <EventsSection />
        <CommunityLinks />
      </main>

      {/* Chapter Footer */}
      <Footer />
    </div>
  );
}
