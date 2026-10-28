import React, { useState } from "react";
import {
  Code,
  Sparkles,
  Cloud,
  Smartphone,
  CheckCircle2,
  Terminal,
  Layers,
  Activity,
  ArrowRight
} from "lucide-react";

export function CampusBuildBoard() {
  const [activeTab, setActiveTab] = useState("all");
  const [copiedStatus, setCopiedStatus] = useState(false);

  const tabs = [
    { id: "all", label: "Unified Board", icon: Layers, badge: "4 Modules" },
    { id: "web", label: "Web Platform", icon: Code, badge: "React 19" },
    { id: "ai", label: "AI Engine", icon: Sparkles, badge: "Gemini API" },
    { id: "cloud", label: "Cloud Infra", icon: Cloud, badge: "asia-south2" },
    { id: "android", label: "Android", icon: Smartphone, badge: "Compose" },
  ];

  const handleCopyCmd = () => {
    navigator.clipboard?.writeText("git clone https://github.com/gdg-poornima/build-space.git");
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl bg-ink-surface/95 border border-white/10 shadow-hero-card backdrop-blur-xl overflow-hidden font-sans text-left transition-all">
      {/* Workspace Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-white/10 bg-ink-hero/80 text-xs">
        {/* Terminal Window Controls */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-gdg-red/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-gdg-yellow/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-gdg-green/80 inline-block"></span>
          <span className="ml-2 font-mono text-slate-400 text-[11px] hidden sm:inline">
            campus-build-board :: pu-engine/main
          </span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Jaipur Node · Active</span>
          </div>
          <button
            onClick={handleCopyCmd}
            className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-[11px] border border-white/5 transition"
            title="Copy builder clone instruction"
            aria-label="Copy clone instruction"
          >
            <Terminal className="w-3 h-3 text-gdg-blue" />
            <span>{copiedStatus ? "copied!" : "init: devspace"}</span>
          </button>
        </div>
      </div>

      {/* Module Switcher Tabs */}
      <div className="flex items-center gap-1 px-4 py-2 border-b border-white/5 bg-ink-hero/40 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? "bg-white/15 text-white border border-white/20 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
              }`}
              aria-pressed={isActive}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gdg-blue" : "text-slate-400"}`} />
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
              }`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Workspace Body */}
      <div className="p-4 sm:p-5">
        <div
          className={`grid gap-4 ${
            activeTab === "all"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {/* Module 1: Web Engine */}
          {(activeTab === "all" || activeTab === "web") && (
            <div className="rounded-xl border border-white/10 bg-ink-hero/60 p-4 flex flex-col justify-between hover:border-gdg-blue/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-gdg-blue">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">Web Workstation</h4>
                      <p className="text-[11px] font-mono text-slate-400">CampusPortal.tsx</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Lighthouse: 99
                  </span>
                </div>

                {/* Simulated Code & Component Preview */}
                <div className="bg-[#0b0e14] rounded-lg p-3 font-mono text-[11px] text-slate-300 border border-white/5 mb-3 leading-relaxed">
                  <div className="text-slate-500">// Modern React 19 Client Hydration</div>
                  <div>
                    <span className="text-purple-400">export function</span>{" "}
                    <span className="text-blue-400">PUCampusWorkspace</span>() &#123;
                  </div>
                  <div className="pl-3">
                    <span className="text-purple-400">const</span> [status] ={" "}
                    <span className="text-amber-300">useTrackState</span>(
                    <span className="text-emerald-400">"active"</span>);
                  </div>
                  <div className="pl-3">
                    <span className="text-purple-400">return</span> &lt;
                    <span className="text-yellow-400">BuildBoard</span> chapter=
                    <span className="text-emerald-400">"Poornima"</span> /&gt;;
                  </div>
                  <div>&#125;</div>
                </div>

                {/* Mini UI Render Preview */}
                <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gdg-green"></div>
                    <span className="text-slate-200 font-medium text-xs">Campus Build Sandbox</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">hot-reload 18ms</span>
                </div>
              </div>

              <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 font-mono">
                <span>Vite 8.3 · Fast HMR</span>
                <span className="text-gdg-blue flex items-center gap-1">TypeScript 5.5 <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          )}

          {/* Module 2: AI & Intelligent Systems */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div className="rounded-xl border border-white/10 bg-ink-hero/60 p-4 flex flex-col justify-between hover:border-gdg-red/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-gdg-red">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">AI Model Playground</h4>
                      <p className="text-[11px] font-mono text-slate-400">gemini-1.5-flash</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                    Multimodal API
                  </span>
                </div>

                {/* AI Prompt / Response Box */}
                <div className="bg-[#0b0e14] rounded-lg p-3 font-mono text-[11px] text-slate-300 border border-white/5 mb-3">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] mb-1.5">
                    <span>PROMPT &gt; Campus Assistant</span>
                    <span className="text-emerald-400">200 OK</span>
                  </div>
                  <div className="text-amber-200/90 text-xs mb-2">
                    "Suggest a high-impact campus project for Poornima engineering labs"
                  </div>
                  <div className="p-2 rounded bg-white/5 text-[11px] text-slate-300 border-l-2 border-gdg-red">
                    <span className="text-slate-400">// Inference stream:</span>
                    <p className="text-slate-200 mt-1">
                      Campus solar micro-grid monitor with predictive peak usage forecasts using edge embeddings.
                    </p>
                  </div>
                </div>

                {/* Inference Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px]">
                  <div className="p-1.5 rounded bg-white/5 border border-white/5">
                    <div className="text-slate-400">LATENCY</div>
                    <div className="text-slate-100 font-semibold mt-0.5">142 ms</div>
                  </div>
                  <div className="p-1.5 rounded bg-white/5 border border-white/5">
                    <div className="text-slate-400">TOKENS</div>
                    <div className="text-slate-100 font-semibold mt-0.5">58 / sec</div>
                  </div>
                  <div className="p-1.5 rounded bg-white/5 border border-white/5">
                    <div className="text-slate-400">COST</div>
                    <div className="text-emerald-400 font-semibold mt-0.5">Free Tier</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 font-mono">
                <span>Google AI Studio SDK</span>
                <span className="text-gdg-red flex items-center gap-1">RAG Pipeline <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          )}

          {/* Module 3: Cloud Infra & Pipelines */}
          {(activeTab === "all" || activeTab === "cloud") && (
            <div className="rounded-xl border border-white/10 bg-ink-hero/60 p-4 flex flex-col justify-between hover:border-gdg-yellow/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-gdg-yellow">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">Cloud & Edge Deploy</h4>
                      <p className="text-[11px] font-mono text-slate-400">asia-south2 (Delhi/Jaipur)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Cloud Run · 99.9%
                  </span>
                </div>

                {/* Pipeline Steps */}
                <div className="space-y-2 mb-3 font-mono text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded bg-[#0b0e14] border border-white/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gdg-green" />
                      <span className="text-slate-300">Container Build (Docker)</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">12.4s</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0b0e14] border border-white/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gdg-green" />
                      <span className="text-slate-300">Unit & Security Tests (18/18)</span>
                    </div>
                    <span className="text-slate-500 text-[10px]">passed</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0b0e14] border border-white/5">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-gdg-blue" />
                      <span className="text-slate-300">Traffic Distribution (GCP)</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">100% live</span>
                  </div>
                </div>

                {/* Infra metrics */}
                <div className="flex items-center justify-between rounded-lg bg-white/5 p-2 text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">Serverless Scale:</span>
                  <span className="text-amber-300 text-[11px]">0 ➔ 12 instances auto</span>
                </div>
              </div>

              <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 font-mono">
                <span>Google Cloud Artifact Registry</span>
                <span className="text-gdg-yellow flex items-center gap-1">CI/CD Sync <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          )}

          {/* Module 4: Android & Mobile */}
          {(activeTab === "all" || activeTab === "android") && (
            <div className="rounded-xl border border-white/10 bg-ink-hero/60 p-4 flex flex-col justify-between hover:border-gdg-green/40 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-gdg-green">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">Modern Android</h4>
                      <p className="text-[11px] font-mono text-slate-400">CampusCompose.kt</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Jetpack Compose
                  </span>
                </div>

                {/* Jetpack Compose Blueprint */}
                <div className="bg-[#0b0e14] rounded-lg p-3 font-mono text-[11px] text-slate-300 border border-white/5 mb-3">
                  <div className="text-slate-500">// Material 3 Campus Event UI</div>
                  <div>
                    <span className="text-amber-400">@Composable</span>
                  </div>
                  <div>
                    <span className="text-purple-400">fun</span>{" "}
                    <span className="text-emerald-400">CampusWorkshopCard</span>(
                  </div>
                  <div className="pl-3 text-slate-300">
                    track: <span className="text-blue-300">TechTrack</span>,
                  </div>
                  <div className="pl-3 text-slate-300">
                    onRegister: () -&gt; <span className="text-yellow-300">Unit</span>
                  </div>
                  <div>) &#123; ... &#125;</div>
                </div>

                {/* Miniature Device Frame Simulation */}
                <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/20 p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-7 rounded border border-emerald-400/40 bg-black/60 flex flex-col justify-center items-center">
                      <div className="w-2.5 h-0.5 bg-emerald-400/80 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-200 font-medium">Pixel 9 Pro Preview</div>
                      <div className="text-[10px] text-slate-400 font-mono">Dynamic Theming · 120Hz</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Kotlin 2.0</span>
                </div>
              </div>

              <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 font-mono">
                <span>Android Studio Ladybug</span>
                <span className="text-gdg-green flex items-center gap-1">Flutter & Compose <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-2.5 bg-ink-hero border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-2 max-w-full overflow-hidden">
          <span className="text-slate-500 shrink-0">$</span>
          <span className="truncate">gdg poornima --workspace active --tech [web, ai, cloud, android]</span>
        </div>
        <div className="text-slate-500 hidden sm:block">
          UTF-8 · React 19 · Vite 8 · Tailwind
        </div>
      </div>
    </div>
  );
}
