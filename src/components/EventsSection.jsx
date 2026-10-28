import React, { useState, useMemo } from "react";
import { eventsData, upcomingEventsData } from "../data/events";
import { siteConfig } from "../config/site";
import {
  Calendar,
  Search,
  X,
  ExternalLink,
  MapPin,
  Clock,
  RotateCcw,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("past"); // "past" | "upcoming"

  const categories = ["All", "Workshops", "AI", "Hackathons", "Community"];

  // Filter events based on active category and search query
  const filteredPastEvents = useMemo(() => {
    return eventsData.filter((event) => {
      // Category match
      const matchesCategory =
        activeCategory === "All" ||
        event.category.toLowerCase() === activeCategory.toLowerCase() ||
        event.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase());

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleResetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "workshops":
        return {
          bg: "bg-blue-500/10",
          text: "text-gdg-blue",
          border: "border-blue-500/20",
        };
      case "ai":
        return {
          bg: "bg-red-500/10",
          text: "text-gdg-red",
          border: "border-red-500/20",
        };
      case "hackathons":
        return {
          bg: "bg-amber-500/10",
          text: "text-amber-600",
          border: "border-amber-500/20",
        };
      case "community":
        return {
          bg: "bg-emerald-500/10",
          text: "text-gdg-green",
          border: "border-emerald-500/20",
        };
      default:
        return {
          bg: "bg-slate-100",
          text: "text-slate-700",
          border: "border-slate-200",
        };
    }
  };

  return (
    <section id="events" className="py-20 md:py-28 bg-canvas-bg border-b border-canvas-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-canvas-subtle border border-canvas-border text-content-secondary font-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gdg-red"></span>
              <span>Documented Chapter History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
              Events & Technical Gatherings
            </h2>
            <p className="mt-4 text-base text-content-secondary leading-relaxed">
              Explore documented past workshops, hackathon briefings, and technical orientations conducted by GDG on Campus Poornima University.
            </p>
          </div>

          {/* Tab Selector: Past Gatherings vs Upcoming */}
          <div className="mt-6 md:mt-0 flex items-center p-1 rounded-xl bg-canvas-subtle border border-canvas-border self-start md:self-auto">
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                activeTab === "past"
                  ? "bg-canvas-card text-content-primary shadow-subtle border border-canvas-border"
                  : "text-content-secondary hover:text-content-primary"
              }`}
              aria-pressed={activeTab === "past"}
            >
              Past Gatherings ({eventsData.length})
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all flex items-center gap-1.5 ${
                activeTab === "upcoming"
                  ? "bg-canvas-card text-content-primary shadow-subtle border border-canvas-border"
                  : "text-content-secondary hover:text-content-primary"
              }`}
              aria-pressed={activeTab === "upcoming"}
            >
              <span>Upcoming</span>
              <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-700 text-[10px]">
                {upcomingEventsData.length}
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Past Gatherings View */}
        {activeTab === "past" && (
          <div>
            {/* Filter and Search Controls Bar */}
            <div className="bg-canvas-card rounded-2xl p-4 sm:p-5 border border-canvas-border shadow-subtle mb-8 space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0" role="group" aria-label="Filter events by category">
                  <span className="text-xs font-mono text-content-muted mr-1 hidden sm:inline">
                    Category:
                  </span>
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gdg-blue ${
                          isSelected
                            ? "bg-ink text-white shadow-sm font-semibold"
                            : "bg-canvas-subtle hover:bg-slate-200 text-content-secondary border border-canvas-border"
                        }`}
                        aria-pressed={isSelected}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Search Bar */}
                <div className="relative min-w-[260px] sm:min-w-[320px]">
                  <Search className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by event title or topic..."
                    className="w-full pl-9 pr-9 py-2 rounded-xl bg-canvas-subtle border border-canvas-border text-xs sm:text-sm text-content-primary placeholder:text-content-muted focus:bg-white focus:outline-none focus:ring-2 focus:ring-gdg-blue focus:border-transparent transition-all"
                    aria-label="Search events"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-content-muted hover:text-content-primary p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-gdg-blue"
                      aria-label="Clear search text"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Active Filter Indicators & Reset Trigger */}
              {(activeCategory !== "All" || searchQuery.trim() !== "") && (
                <div className="pt-3 border-t border-canvas-border flex items-center justify-between text-xs text-content-secondary">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span>Active Filters:</span>
                    {activeCategory !== "All" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-canvas-subtle border border-canvas-border font-mono text-[11px] text-content-primary">
                        Category: {activeCategory}
                        <button
                          onClick={() => setActiveCategory("All")}
                          className="hover:text-gdg-red ml-0.5"
                          aria-label={`Remove ${activeCategory} filter`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {searchQuery.trim() !== "" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-canvas-subtle border border-canvas-border font-mono text-[11px] text-content-primary">
                        Query: "{searchQuery}"
                        <button
                          onClick={() => setSearchQuery("")}
                          className="hover:text-gdg-red ml-0.5"
                          aria-label="Remove search filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    <span className="text-content-muted text-[11px]">
                      ({filteredPastEvents.length} {filteredPastEvents.length === 1 ? "result" : "results"})
                    </span>
                  </div>

                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1 text-xs font-mono text-gdg-blue hover:underline focus:outline-none focus:ring-1 focus:ring-gdg-blue rounded"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All</span>
                  </button>
                </div>
              )}
            </div>

            {/* Events Grid or No-Results State */}
            {filteredPastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {filteredPastEvents.map((event) => {
                  const catStyle = getCategoryColor(event.category);
                  return (
                    <article
                      key={event.id}
                      className="bg-canvas-card rounded-2xl p-6 sm:p-7 border border-canvas-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group hover:border-slate-300"
                    >
                      <div>
                        {/* Event Header Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}
                            >
                              {event.category}
                            </span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                              {event.format}
                            </span>
                          </div>

                          {/* Explicit Past Event Badge */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono text-[11px] border border-slate-200">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{event.statusLabel}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-content-primary mb-3 leading-snug group-hover:text-gdg-blue transition-colors">
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus:outline-none focus-visible:underline"
                          >
                            {event.title}
                          </a>
                        </h3>

                        {/* Date and Location Pills */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-content-secondary mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gdg-blue" />
                            <time dateTime={event.isoDate}>{event.date}</time>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gdg-red" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-content-secondary leading-relaxed mb-6">
                          {event.description}
                        </p>
                      </div>

                      {/* Footer Actions & Official Link */}
                      <div className="pt-4 border-t border-canvas-border flex flex-wrap items-center justify-between gap-3">
                        {/* Tags */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-canvas-subtle text-[11px] font-mono text-content-muted"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Verified Link */}
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-content-primary group-hover:text-gdg-blue transition-colors focus:outline-none focus:ring-1 focus:ring-gdg-blue rounded py-1 px-1.5"
                          aria-label={`View verified chapter page for ${event.title}`}
                        >
                          <span>Official Event Page</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* No matching results */
              <div className="bg-canvas-card rounded-2xl border border-canvas-border p-10 text-center max-w-xl mx-auto shadow-subtle">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-content-primary mb-2">
                  No matching chapter events
                </h4>
                <p className="text-sm text-content-secondary mb-6 leading-relaxed">
                  No documented events match your current filter ({activeCategory !== "All" ? `Category: ${activeCategory}` : ""}{searchQuery ? ` Query: "${searchQuery}"` : ""}). Try resetting filters or browsing all chapter records.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ink text-white text-xs font-medium hover:bg-slate-800 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Search & Filters</span>
                  </button>
                  <a
                    href={siteConfig.links.officialChapter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-canvas-subtle border border-canvas-border text-xs font-medium text-content-primary hover:bg-slate-200 transition"
                  >
                    <span>Chapter Archive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Upcoming Events View (Polished Factual Empty State) */}
        {activeTab === "upcoming" && (
          <div className="bg-canvas-card rounded-2xl border border-canvas-border p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-card">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-gdg-blue flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
              <Calendar className="w-6 h-6" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs border border-emerald-200 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Portal Sync</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-content-primary mb-3">
              No Upcoming Events Announced Yet
            </h3>

            <p className="text-sm text-content-secondary leading-relaxed max-w-lg mx-auto mb-7">
              GDG on Campus Poornima University announces workshops, hackathons, and speaker sessions through the official Google Developer Groups portal. Stay connected to be first to register when dates are announced.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={siteConfig.links.officialChapter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gdg-blue text-white text-xs sm:text-sm font-semibold hover:bg-blue-600 transition shadow-subtle"
              >
                <span>Check Official Chapter Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-canvas-subtle border border-canvas-border text-xs sm:text-sm font-medium text-content-primary hover:bg-slate-200 transition"
              >
                <span>Join WhatsApp Announcements</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
