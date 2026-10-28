import { eventsData, upcomingEventsData } from "./src/data/events.js";
import { projectIdeas } from "./src/data/projects.js";
import { learningPathways } from "./src/data/pathways.js";
import { siteConfig } from "./src/config/site.js";

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`✅ PASSED: ${message}`);
}

console.log("\n=== 1. VERIFYING EVENT DATA INTEGRITY ===");
assert(eventsData.length === 4, `Expected exactly 4 verified events, got ${eventsData.length}`);
assert(upcomingEventsData.length === 0, `Expected 0 unverified upcoming events, got ${upcomingEventsData.length}`);

// Verify URLs
const expectedUrls = [
  "https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-google-solution-challenge-kick-off-and-workshop/",
  "https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-build-with-ai-workshop-lets-hack-it/",
  "https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-gdg-india-hackathon-briefing-session/",
  "https://gdg.community.dev/events/details/google-gdg-on-campus-poornima-university-jaipur-india-presents-step-into-a-world-of-innovation-orientation-2025-26/",
];

eventsData.forEach((evt, idx) => {
  assert(evt.url === expectedUrls[idx], `Event ${idx + 1} URL matches official chapter URL: ${evt.url}`);
  assert(evt.status === "past", `Event ${evt.id} has explicit past status`);
  assert(evt.title && evt.date && evt.description, `Event ${evt.id} has title, date, and description`);
});

console.log("\n=== 2. VERIFYING EVENT FILTER LOGIC ===");
function filterEvents(category, query = "") {
  return eventsData.filter((event) => {
    const matchesCategory =
      category === "All" ||
      event.category.toLowerCase() === category.toLowerCase() ||
      event.tags.some((t) => t.toLowerCase() === category.toLowerCase());

    const q = query.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q) ||
      event.category.toLowerCase().includes(q) ||
      event.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });
}

// Test Category: All
assert(filterEvents("All").length === 4, "Category 'All' returns all 4 events");

// Test Category: Workshops
const workshops = filterEvents("Workshops");
assert(workshops.length >= 2, `Category 'Workshops' returns ${workshops.length} events (expected >= 2)`);

// Test Category: AI
const aiEvents = filterEvents("AI");
assert(aiEvents.length >= 1, `Category 'AI' returns ${aiEvents.length} events`);
assert(aiEvents.some(e => e.title.includes("Build with AI")), "AI filter matches 'Build with AI Workshop'");

// Test Category: Hackathons
const hackathons = filterEvents("Hackathons");
assert(hackathons.length >= 2, `Category 'Hackathons' returns ${hackathons.length} events`);

// Test Category: Community
const communityEvents = filterEvents("Community");
assert(communityEvents.length >= 2, `Category 'Community' returns ${communityEvents.length} events`);

// Test Search by title
const searchSolution = filterEvents("All", "Solution Challenge");
assert(searchSolution.length === 1 && searchSolution[0].id === "solution-challenge-kickoff-2026", "Search 'Solution Challenge' returns exact match");

const searchHack = filterEvents("All", "Hack");
assert(searchHack.length >= 2, `Search 'Hack' returns ${searchHack.length} events`);

// Test Combined filter
const combinedFilter = filterEvents("AI", "Solution");
assert(combinedFilter.length === 0, "Combined filter (AI + Solution) correctly returns 0 matches");

console.log("\n=== 3. VERIFYING PROJECT SPECS & PATHWAYS ===");
assert(projectIdeas.length === 3, "Expected 3 project ideas");
projectIdeas.forEach((proj) => {
  assert(proj.problemStatement && proj.architecture.length > 0 && proj.milestones.length > 0, `Project ${proj.id} has complete architecture & milestones spec`);
});

assert(learningPathways.length === 4, "Expected 4 learning pathways (Web, AI, Cloud, Android)");
learningPathways.forEach((track) => {
  assert(track.topics.length > 0 && track.codelabs.length > 0, `Track ${track.id} has topics and codelabs`);
});

console.log("\n=== 4. VERIFYING SITE CONFIG & COMMUNITY LINKS ===");
assert(siteConfig.links.officialChapter.includes("gdg-on-campus-poornima-university"), "Official chapter link verified");
assert(siteConfig.links.whatsapp.includes("chat.whatsapp.com"), "WhatsApp link verified");
assert(siteConfig.links.instagram.includes("instagram.com/gdg.poornima"), "Instagram link verified");
assert(siteConfig.links.linkedin.includes("linkedin.com/company/gdg-poornima"), "LinkedIn link verified");
assert(siteConfig.links.telegram.includes("t.me/gdgpoornima"), "Telegram link verified");

console.log("\n🎉 ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!\n");
