import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { ExternalLink, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-ink-hero/90 backdrop-blur-md border-b border-ink-muted/80 py-3 shadow-md"
          : "bg-ink-hero/70 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Chapter Identification */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:ring-offset-2 focus:ring-offset-ink-hero rounded-md"
            aria-label="GDG on Campus Poornima University Home"
          >
            {/* Google Developer Quad-Color Emblem */}
            <div className="flex items-center space-x-1" aria-hidden="true">
              <span className="w-2.5 h-6 rounded-full bg-gdg-blue inline-block"></span>
              <span className="w-2.5 h-6 rounded-full bg-gdg-red inline-block"></span>
              <span className="w-2.5 h-6 rounded-full bg-gdg-yellow inline-block"></span>
              <span className="w-2.5 h-6 rounded-full bg-gdg-green inline-block"></span>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-base tracking-tight font-sans">
                  GDG on Campus
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                  PU Chapter
                </span>
              </div>
              <span className="text-xs text-content-muted tracking-wide">
                Poornima University, Jaipur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-medium px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
            >
              WhatsApp Hub
            </a>
            <a
              href={siteConfig.links.officialChapter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gdg-blue text-white hover:bg-blue-600 transition-all shadow-subtle hover:shadow-accent-blue"
            >
              <span>Join Chapter</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gdg-blue"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden pt-4 pb-3 border-t border-white/10 mt-3 animate-in fade-in duration-150">
            <div className="flex flex-col space-y-3">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-white/5"
                >
                  <span>WhatsApp Community</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
                <a
                  href={siteConfig.links.officialChapter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gdg-blue text-white font-medium text-sm hover:bg-blue-600 transition"
                >
                  <span>Join Official Chapter</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
