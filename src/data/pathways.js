/**
 * Learning Pathways & Technical Focus Areas
 * GDG on Campus — Poornima University
 */

export const learningPathways = [
  {
    id: "web",
    title: "Modern Web Engineering",
    pillar: "Frontend & Full-Stack",
    accent: "#4285F4",
    summary:
      "Architecting responsive, high-performance web applications using modern component paradigms, TypeScript, and state machines.",
    topics: [
      "Semantic HTML5 & Accessible UI Standards",
      "Modern React 19 & Component Architecture",
      "CSS Grid, Flexbox & Tailwind Design Systems",
      "API Integrations & Client-Side Caching",
    ],
    tooling: ["React 19", "Vite", "Tailwind CSS", "TypeScript", "Next.js"],
    codelabs: [
      {
        title: "Google Codelab: Build your first progressive web app",
        url: "https://developers.google.com/codelabs",
      },
      {
        title: "Chrome DevTools: Web Vitals & Performance Profiling",
        url: "https://web.dev/learn",
      },
    ],
  },
  {
    id: "ai",
    title: "Applied Machine Learning & AI",
    pillar: "Intelligent Systems",
    accent: "#EA4335",
    summary:
      "Exploring foundational ML models, Gemini developer APIs, agentic orchestration, and building practical AI-assisted student tooling.",
    topics: [
      "Gemini Developer API & Multimodal Prompts",
      "Vector Embeddings & Retrieval-Augmented Generation",
      "TensorFlow & PyTorch Basics",
      "On-device Inference & Responsible AI",
    ],
    tooling: ["Google Gemini API", "Python", "TensorFlow", "LangChain", "HuggingFace"],
    codelabs: [
      {
        title: "Google AI Studio: Prompt Engineering with Gemini",
        url: "https://ai.google.dev/gemini-api/docs/quickstart",
      },
      {
        title: "Codelab: Building Multimodal RAG with Vertex AI",
        url: "https://developers.google.com/codelabs",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Distributed Systems",
    pillar: "Infrastructure & DevOps",
    accent: "#FBBC05",
    summary:
      "Mastering cloud deployment workflows, containerization with Docker, and serverless Google Cloud services.",
    topics: [
      "Google Cloud Platform (GCP) Fundamentals",
      "Containerization with Docker & Podman",
      "Serverless Compute with Cloud Run & Cloud Functions",
      "CI/CD Pipelines & Infrastructure as Code",
    ],
    tooling: ["Google Cloud Run", "Firebase", "Docker", "GitHub Actions", "Terraform"],
    codelabs: [
      {
        title: "Google Cloud: Deploying a Container on Cloud Run",
        url: "https://cloud.google.com/run/docs/quickstarts",
      },
      {
        title: "Firebase Fundamentals for Web & Mobile",
        url: "https://firebase.google.com/docs",
      },
    ],
  },
  {
    id: "android",
    title: "Modern Mobile & Android",
    pillar: "Mobile Engineering",
    accent: "#34A853",
    summary:
      "Building native and cross-platform mobile experiences with declarative UI, Kotlin, Jetpack Compose, and Flutter.",
    topics: [
      "Kotlin Modern Syntax & Coroutines",
      "Declarative UI with Jetpack Compose",
      "State Management & Architecture Components (MVVM)",
      "Cross-Platform Prototyping with Flutter",
    ],
    tooling: ["Android Studio", "Kotlin", "Jetpack Compose", "Flutter", "Firebase Mobile"],
    codelabs: [
      {
        title: "Android Developers: Jetpack Compose Basics Pathway",
        url: "https://developer.android.com/courses/pathways/compose",
      },
      {
        title: "Building Material 3 Interfaces in Kotlin",
        url: "https://developer.android.com/develop/ui/compose/designsystems/material3",
      },
    ],
  },
];
