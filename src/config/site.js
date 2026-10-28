/**
 * Site configuration & verified community destinations
 * Chapter: GDG on Campus — Poornima University, Jaipur, India
 */

export const siteConfig = {
  name: "GDG on Campus",
  institution: "Poornima University",
  location: "Jaipur, Rajasthan, India",
  tagline: "The Build Space — A home for curious minds and campus builders",
  headline: "Build what comes next.",
  subheadline:
    "A campus community for curious minds, ambitious ideas, and the people who turn them into something real. Learn together, build together, and find your place in tech.",
  
  // Official Verified Community Destinations
  links: {
    officialChapter: "https://gdg.community.dev/gdg-on-campus-poornima-university-jaipur-india/",
    whatsapp: "https://chat.whatsapp.com/BUzm2aq56HJHVmyiuzGIpJ",
    instagram: "https://instagram.com/gdg.poornima",
    linkedin: "https://www.linkedin.com/company/gdg-poornima/",
    telegram: "https://t.me/gdgpoornima",
  },

  // Focus Domains for Campus Builders
  domains: [
    {
      id: "web",
      name: "Web Platforms",
      tag: "Modern Frontend & Cloud-Native",
      color: "#4285F4",
      description: "Modern JavaScript, performant responsive layouts, web standards, and full-stack developer workflows.",
      status: "Active Track",
    },
    {
      id: "ai",
      name: "Machine Learning & AI",
      tag: "Gemini, TF & Agentic Systems",
      color: "#EA4335",
      description: "Practical generative models, multimodal APIs, agentic orchestration, and model deployment on client and edge.",
      status: "Active Track",
    },
    {
      id: "cloud",
      name: "Cloud Architecture",
      tag: "GCP, Containers & Microservices",
      color: "#FBBC05",
      description: "Serverless computing, scalable backend services, DevOps pipelines, and cloud security fundamentals.",
      status: "Active Track",
    },
    {
      id: "android",
      name: "Android & Mobile",
      tag: "Kotlin, Jetpack Compose & Flutter",
      color: "#34A853",
      description: "Native Android development, Jetpack Compose UI architecture, cross-platform apps, and Play Store releases.",
      status: "Active Track",
    },
  ],

  // Navigation Items
  navigation: [
    { name: "Overview", href: "#overview" },
    { name: "Campus Build Board", href: "#build-board" },
    { name: "Tracks", href: "#tracks" },
    { name: "Events", href: "#events" },
    { name: "Community", href: "#community" },
  ],
};
