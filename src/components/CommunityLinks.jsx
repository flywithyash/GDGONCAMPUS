import React from "react";
import { siteConfig } from "../config/site";
import {
  ExternalLink,
  MessageCircle,
  Send,
  Globe,
  ArrowUpRight
} from "lucide-react";

// Crisp brand SVG icons
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function CommunityLinks() {
  const destinations = [
    {
      title: "Official Chapter Platform",
      platform: "Google Developer Groups",
      description: "Official membership portal, RSVP for workshops, and track verified chapter participation.",
      url: siteConfig.links.officialChapter,
      badge: "Primary Hub",
      icon: Globe,
      accent: "border-blue-500/20 text-gdg-blue group-hover:border-gdg-blue",
      btnText: "Join Chapter Portal",
    },
    {
      title: "WhatsApp Community",
      platform: "WhatsApp Group",
      description: "Real-time discussions, announcement channels, instant peer help, and campus coordination.",
      url: siteConfig.links.whatsapp,
      badge: "Fastest Updates",
      icon: MessageCircle,
      accent: "border-emerald-500/20 text-gdg-green group-hover:border-gdg-green",
      btnText: "Join WhatsApp",
    },
    {
      title: "LinkedIn Chapter Page",
      platform: "LinkedIn",
      description: "Professional networking, workshop recaps, core-team highlights, and student project spotlights.",
      url: siteConfig.links.linkedin,
      badge: "Professional",
      icon: LinkedInIcon,
      accent: "border-sky-500/20 text-sky-600 group-hover:border-sky-500",
      btnText: "Follow on LinkedIn",
    },
    {
      title: "Instagram Dispatch",
      platform: "Instagram",
      description: "Visual recaps, behind-the-scenes build sessions, community stories, and event teasers.",
      url: siteConfig.links.instagram,
      badge: "@gdg.poornima",
      icon: InstagramIcon,
      accent: "border-pink-500/20 text-pink-600 group-hover:border-pink-500",
      btnText: "Follow @gdg.poornima",
    },
    {
      title: "Telegram Channel",
      platform: "Telegram",
      description: "Resource archives, slide decks, codelab links, and community broadcast channel.",
      url: siteConfig.links.telegram,
      badge: "Resource Hub",
      icon: Send,
      accent: "border-blue-400/20 text-blue-500 group-hover:border-blue-400",
      btnText: "Open Telegram",
    },
  ];

  return (
    <section id="community" className="py-20 md:py-28 bg-canvas-bg border-b border-canvas-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-canvas-subtle border border-canvas-border text-content-secondary font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gdg-blue"></span>
            <span>Verified Community Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Connect with Poornima builders.
          </h2>
          <p className="mt-4 text-base text-content-secondary leading-relaxed">
            All official communication channels and hubs for GDG on Campus — Poornima University. No unverified third-party groups.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => {
            const Icon = dest.icon;
            return (
              <a
                key={dest.title}
                href={dest.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-canvas-card rounded-2xl p-6 sm:p-7 border border-canvas-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between hover:-translate-y-0.5 ${dest.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-canvas-subtle flex items-center justify-center text-content-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-canvas-subtle text-content-secondary border border-canvas-border">
                      {dest.badge}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-content-muted mb-1">
                    {dest.platform}
                  </div>

                  <h3 className="text-lg font-bold text-content-primary mb-2 flex items-center gap-1.5 group-hover:text-gdg-blue transition-colors">
                    <span>{dest.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-canvas-border flex items-center justify-between text-xs font-semibold text-content-primary group-hover:text-gdg-blue transition-colors">
                  <span>{dest.btnText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
