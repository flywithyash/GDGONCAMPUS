/**
 * Project Ideas & Builder Initiatives
 * Practical problem statements campus engineers can collaborate on.
 */

export const projectIdeas = [
  {
    id: "campus-pulse",
    title: "Poornima Campus Hub & Resource Finder",
    domain: "Web & Cloud",
    difficulty: "Intermediate",
    accent: "#4285F4",
    description:
      "An open-source progressive web app aggregating university events, lab schedules, and peer-to-peer study resources.",
    techStack: ["React 19", "Tailwind CSS", "Firebase", "Google Cloud Functions"],
    problemStatement:
      "Students often miss lab sessions, club workshops, and semester updates spread across multiple bulletin boards and chat groups.",
    architecture: [
      "Client PWA with offline caching via Service Workers",
      "Firebase Firestore real-time database for sync",
      "Cloud Functions for notifications and automated calendar feeds",
      "Role-based publishing for student societies",
    ],
    milestones: [
      "Milestone 1: Responsive timetable view and lab directory",
      "Milestone 2: Offline sync with IndexedDB",
      "Milestone 3: Push notifications for urgent university updates",
    ],
  },
  {
    id: "syllabus-qa-bot",
    title: "Academic Syllabus QA Assistant",
    domain: "AI & NLP",
    difficulty: "Advanced",
    accent: "#EA4335",
    description:
      "A document-grounded question-answering assistant powered by Gemini 1.5 Flash to help students query course requirements.",
    techStack: ["Google Gemini API", "Python", "FastAPI", "ChromaDB / Vector Search"],
    problemStatement:
      "Course syllabi and evaluation schemes span numerous PDF documents that are cumbersome to parse when preparing for mid-terms.",
    architecture: [
      "PDF ingestion and text chunking pipeline",
      "Vector embedding generation with text-embedding-004",
      "FastAPI inference server with grounded source citations",
      "Lightweight web chat UI with latency tracking",
    ],
    milestones: [
      "Milestone 1: PDF parser and vector store ingestion",
      "Milestone 2: Retrieval-Augmented Generation (RAG) prototype",
      "Milestone 3: Grounded evaluation and citation verification",
    ],
  },
  {
    id: "attend-go",
    title: "Offline-First Attendance Companion",
    domain: "Android",
    difficulty: "Beginner / Intermediate",
    accent: "#34A853",
    description:
      "A lightweight Android application built with Jetpack Compose featuring local Room caching and biometric confirmation.",
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "Material 3"],
    problemStatement:
      "Poor campus Wi-Fi in certain basements and seminar halls causes standard web portals to timeout during roll-call logging.",
    architecture: [
      "Declarative UI built strictly with Jetpack Compose",
      "Local-first SQLite storage via Android Room",
      "BiometricPrompt API integration for secure session signing",
      "Background sync via WorkManager when connectivity restores",
    ],
    milestones: [
      "Milestone 1: Compose UI and local Room database schema",
      "Milestone 2: Biometric authentication handshake",
      "Milestone 3: Periodic WorkManager synchronization",
    ],
  },
];
