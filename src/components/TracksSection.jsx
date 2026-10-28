import React, { useState } from "react";
import { learningPathways } from "../data/pathways";
import {
  Terminal,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  Code2
} from "lucide-react";

export function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState(learningPathways[0].id);
  const [activeSubTab, setActiveSubTab] = useState("topics"); // "topics" | "codelabs"
  const [copied, setCopied] = useState(false);

  const current =
    learningPathways.find((t) => t.id === selectedTrack) || learningPathways[0];

  const handleCopyRoadmap = () => {
    const text = `GDG on Campus Poornima University - ${current.title} (${current.pillar})\n\nTopics:\n${current.topics.map((t, i) => `${i + 1}. ${t}`).join("\n")}\n\nToolchain: ${current.tooling.join(", ")}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tracks" className="py-20 md:py-28 bg-canvas-bg border-b border-canvas-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-canvas-subtle border border-canvas-border text-content-secondary font-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gdg-yellow"></span>
              <span>Engineering Tracks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
              Structured learning for modern builders.
            </h2>
            <p className="mt-4 text-base text-content-secondary leading-relaxed">
              Dive deep into four core disciplines. Each pathway is designed to take students from foundational principles to production-grade architecture.
            </p>
          </div>
        </div>

        {/* Desktop / Tablet Track Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8" role="tablist" aria-label="Technical track pathways">
          {learningPathways.map((track) => {
            const isSelected = track.id === selectedTrack;
            return (
              <button
                key={track.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`track-panel-${track.id}`}
                id={`track-tab-${track.id}`}
                onClick={() => setSelectedTrack(track.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gdg-blue ${
                  isSelected
                    ? "bg-canvas-card border-slate-400 shadow-card ring-1 ring-slate-400"
                    : "bg-canvas-card/60 hover:bg-canvas-card border-canvas-border hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: track.accent }}
                  ></span>
                  <span className="text-[10px] font-mono text-content-muted uppercase">
                    {track.pillar}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-content-primary">
                  {track.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Track Deep Dive Panel */}
        <div
          id={`track-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`track-tab-${current.id}`}
          className="bg-canvas-card rounded-2xl border border-canvas-border shadow-elevated p-6 sm:p-8 md:p-10"
        >
          {/* Top Panel Summary */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-canvas-border">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold text-white"
                  style={{ backgroundColor: current.accent }}
                >
                  {current.pillar}
                </span>
                <span className="text-xs font-mono text-content-muted">
                  Track ID: #{current.id}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-content-primary tracking-tight mb-4">
                {current.title}
              </h3>
              <p className="text-base text-content-secondary leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* Tooling Tags & Copy Button */}
            <div className="lg:min-w-[280px]">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono uppercase tracking-wider text-content-muted flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Primary Toolchain</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyRoadmap}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-gdg-blue hover:underline focus:outline-none focus:ring-1 focus:ring-gdg-blue rounded"
                  title="Copy pathway roadmap to clipboard"
                  aria-label="Copy pathway syllabus"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-gdg-green" />
                      <span className="text-gdg-green">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {current.tooling.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-canvas-subtle border border-canvas-border text-xs font-mono text-content-primary font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-Tabs: Competencies vs Codelabs */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-6 border-b border-canvas-border pb-3">
              <button
                type="button"
                onClick={() => setActiveSubTab("topics")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSubTab === "topics"
                    ? "bg-canvas-subtle text-content-primary font-semibold border border-canvas-border"
                    : "text-content-secondary hover:text-content-primary"
                }`}
                aria-pressed={activeSubTab === "topics"}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Core Competencies ({current.topics.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSubTab("codelabs")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSubTab === "codelabs"
                    ? "bg-canvas-subtle text-content-primary font-semibold border border-canvas-border"
                    : "text-content-secondary hover:text-content-primary"
                }`}
                aria-pressed={activeSubTab === "codelabs"}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Official Codelabs ({current.codelabs?.length || 0})</span>
              </button>
            </div>

            {/* View 1: Topics */}
            {activeSubTab === "topics" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-150">
                {current.topics.map((topic, i) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-canvas-subtle/50 border border-canvas-border"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-mono shrink-0"
                      style={{ backgroundColor: current.accent }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-content-primary">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* View 2: Codelabs */}
            {activeSubTab === "codelabs" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-150">
                {current.codelabs?.map((lab) => (
                  <a
                    key={lab.title}
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-canvas-subtle/50 hover:bg-canvas-subtle border border-canvas-border hover:border-slate-300 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-gdg-blue shrink-0" />
                      <span className="text-sm font-medium text-content-primary group-hover:text-gdg-blue transition-colors">
                        {lab.title}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-content-muted group-hover:text-gdg-blue transition-colors" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
