import React from "react";
import { siteConfig } from "../config/site";
import { ExternalLink, MapPin } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-ink-hero text-slate-300 border-t border-ink-muted/80">
      {/* Quad Color Accent Strip */}
      <div className="grid grid-cols-4 h-1 w-full" aria-hidden="true">
        <div className="bg-gdg-blue"></div>
        <div className="bg-gdg-red"></div>
        <div className="bg-gdg-yellow"></div>
        <div className="bg-gdg-green"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Chapter Details */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-1" aria-hidden="true">
                <span className="w-2.5 h-6 rounded-full bg-gdg-blue inline-block"></span>
                <span className="w-2.5 h-6 rounded-full bg-gdg-red inline-block"></span>
                <span className="w-2.5 h-6 rounded-full bg-gdg-yellow inline-block"></span>
                <span className="w-2.5 h-6 rounded-full bg-gdg-green inline-block"></span>
              </div>
              <div>
                <span className="text-white font-bold text-lg font-sans">
                  GDG on Campus
                </span>
                <span className="text-slate-400 text-xs block">
                  Poornima University, Jaipur
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              The Build Space — A home for curious minds and campus builders. Dedicated to nurturing engineering excellence, developer collaboration, and real-world software creation.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-gdg-red" />
              <span>Poornima University, Ramdaspura, Jaipur, Rajasthan 303905</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  The Build Space Overview
                </a>
              </li>
              <li>
                <a href="#build-board" className="hover:text-white transition-colors">
                  Campus Build Board
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-white transition-colors">
                  Technical Tracks
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events & Workshops
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors">
                  Community Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4">
              Official Hubs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={siteConfig.links.officialChapter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Chapter Platform</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>WhatsApp Community</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>LinkedIn Page</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Telegram Dispatch</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-slate-400 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-300 font-medium">Disclaimer:</strong> GDG on Campus Poornima University is an independent student group. Activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about Google Developer Groups programs, visit developers.google.com.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <span>© {CURRENT_YEAR} GDG on Campus — Poornima University, Jaipur.</span>
            <span className="font-mono text-slate-400">Crafted for Tech Lead / Core-Team Assessment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
