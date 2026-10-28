import React from "react";
import { Hammer, Users, Globe2, CheckCircle2 } from "lucide-react";

export function CommunityIntro() {
  const pillars = [
    {
      icon: Hammer,
      accent: "text-gdg-blue",
      borderAccent: "hover:border-gdg-blue/30",
      bgAccent: "bg-blue-500/5",
      title: "Learn by Shipping",
      description:
        "We prioritize building tangible code over passive lectures. From containerized microservices to generative AI models and Android apps, learning happens when you compile, deploy, and iterate.",
      points: [
        "Interactive workshops with runnable codebases",
        "Open source collaborative repositories",
        "Proof-of-concept projects built on modern tech stacks",
      ],
    },
    {
      icon: Users,
      accent: "text-gdg-red",
      borderAccent: "hover:border-gdg-red/30",
      bgAccent: "bg-red-500/5",
      title: "Peer-to-Peer Engineering",
      description:
        "Great engineers aren't built in isolation. GDG on Campus Poornima brings together first-year tinkerers, senior architects, and tech enthusiasts to review code, pair program, and elevate everyone together.",
      points: [
        "Collaborative problem solving and pair programming",
        "Cross-department team formation for national hackathons",
        "Constructive code reviews and architecture discussions",
      ],
    },
    {
      icon: Globe2,
      accent: "text-gdg-green",
      borderAccent: "hover:border-gdg-green/30",
      bgAccent: "bg-green-500/5",
      title: "Jaipur to Global Ecosystem",
      description:
        "Directly grounded at Poornima University, we connect our campus directly to Google Developer technologies, international developer communities, and industry standard best practices.",
      points: [
        "Direct connection to Google Developer Groups network",
        "Access to official Google developer resources & codelabs",
        "Showcasing local engineering talent on global platforms",
      ],
    },
  ];

  return (
    <section id="overview" className="py-20 md:py-28 bg-canvas-bg border-b border-canvas-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-canvas-subtle border border-canvas-border text-content-secondary font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gdg-blue"></span>
            <span>Design Concept // The Build Space</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight leading-tight mb-5">
            A home for curious minds and campus builders.
          </h2>

          <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
            GDG on Campus Poornima University is not a lecture hall or a passive audience club. It is a dedicated build space where ambitious students explore modern technologies, collaborate on real-world projects, and develop into world-class engineers.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`bg-canvas-card rounded-2xl p-7 border border-canvas-border transition-all duration-200 shadow-card hover:shadow-elevated ${pillar.borderAccent} flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.bgAccent} ${pillar.accent} mb-6 border border-current/10`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-content-muted">0{idx + 1} //</span>
                    <h3 className="text-xl font-bold text-content-primary tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm text-content-secondary leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-canvas-border/80 space-y-2.5">
                  {pillar.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs text-content-secondary">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pillar.accent}`} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
