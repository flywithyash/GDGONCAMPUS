import React, { useState, useEffect } from "react";
import { projectIdeas } from "../data/projects";
import { siteConfig } from "../config/site";
import {
  FolderGit2,
  ArrowRight,
  X,
  Layers,
  CheckCircle2,
  MessageCircle,
  HelpCircle
} from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 md:py-28 bg-canvas-bg border-b border-canvas-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-canvas-subtle border border-canvas-border text-content-secondary font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gdg-green"></span>
            <span>Campus Problem Statements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Real campus problems. Real code.
          </h2>
          <p className="mt-4 text-base text-content-secondary leading-relaxed">
            Instead of building generic tutorial clones, our student developer community collaborates on high-utility tools for university challenges and open-source infrastructure.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projectIdeas.map((project) => (
            <div
              key={project.id}
              className="bg-canvas-card rounded-2xl p-6 sm:p-7 border border-canvas-border shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group cursor-pointer hover:border-slate-300"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`Inspect ${project.title} project specification`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: project.accent }}
                  >
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-canvas-subtle border border-canvas-border text-content-secondary">
                    {project.difficulty}
                  </span>
                </div>

                <div className="text-xs font-mono text-content-muted mb-1.5">
                  Track: {project.domain}
                </div>

                <h3 className="text-xl font-bold text-content-primary mb-3 group-hover:text-gdg-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-content-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-canvas-border mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-canvas-subtle text-[11px] font-mono text-content-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-between text-xs font-semibold text-gdg-blue group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inspect Architecture & Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-canvas-card rounded-2xl border border-canvas-border shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-canvas-border mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: selectedProject.accent }}
                  ></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-content-muted">
                    {selectedProject.domain} • {selectedProject.difficulty}
                  </span>
                </div>
                <h3 id="modal-project-title" className="text-2xl font-bold text-content-primary">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-content-muted hover:text-content-primary hover:bg-canvas-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-gdg-blue"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem Statement */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </h4>
              <p className="text-sm text-content-secondary leading-relaxed bg-canvas-subtle/60 p-3.5 rounded-xl border border-canvas-border">
                {selectedProject.problemStatement}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture Blueprint</span>
              </h4>
              <div className="space-y-2">
                {selectedProject.architecture.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-canvas-subtle/30 text-xs text-content-primary border border-canvas-border/60"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-mono shrink-0 mt-0.5"
                      style={{ backgroundColor: selectedProject.accent }}
                    >
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Milestones */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-3">
                Execution Milestones
              </h4>
              <div className="space-y-2">
                {selectedProject.milestones.map((milestone) => (
                  <div key={milestone} className="flex items-center gap-2.5 text-xs text-content-secondary">
                    <CheckCircle2 className="w-4 h-4 text-gdg-green shrink-0" />
                    <span>{milestone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted mb-2.5">
                Target Toolchain
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-canvas-subtle border border-canvas-border text-xs font-mono text-content-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gdg-blue text-white text-xs sm:text-sm font-semibold hover:bg-blue-600 transition shadow-subtle"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Form a Team on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-canvas-subtle border border-canvas-border text-xs sm:text-sm font-medium text-content-primary hover:bg-slate-200 transition"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
