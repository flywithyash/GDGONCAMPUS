import React from "react";
import { siteConfig } from "../config/site";
import { CampusBuildBoard } from "./CampusBuildBoard";
import { ArrowRight, Compass, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-ink-hero text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-dark border-b border-ink-muted">
      {/* Subtle architectural ambient accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gdg-blue/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Chapter Metadata Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gdg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gdg-green"></span>
            </span>
            <span className="text-white font-medium">GDG on Campus</span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-gdg-red" />
              Poornima University, Jaipur
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-[1.08] mb-6">
            Build what <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">comes next.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-9">
            A campus community for curious minds, ambitious ideas, and the people who turn them into something real. Learn together, build together, and find your place in tech.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.officialChapter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gdg-blue text-white font-semibold text-sm sm:text-base hover:bg-blue-600 active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20"
            >
              <span>Join the Community</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#overview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/10 transition-all"
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span>Explore the Community</span>
            </a>
          </div>

          {/* Quad Color Indicator Line */}
          <div className="mt-10 flex items-center justify-center gap-2 opacity-60" aria-hidden="true">
            <span className="h-1 w-8 rounded-full bg-gdg-blue"></span>
            <span className="h-1 w-8 rounded-full bg-gdg-red"></span>
            <span className="h-1 w-8 rounded-full bg-gdg-yellow"></span>
            <span className="h-1 w-8 rounded-full bg-gdg-green"></span>
          </div>
        </div>

        {/* Signature Hero Visual: Campus Build Board */}
        <div id="build-board" className="mt-8 max-w-5xl mx-auto scroll-mt-28">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              // Interactive Dev Station · Campus Build Board
            </span>
          </div>
          <CampusBuildBoard />
        </div>
      </div>
    </section>
  );
}
