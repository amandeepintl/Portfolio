export type Project = {
  name: string;
  category: string;
  description: string;
  repo: string;
  live?: string;
  language: string;
  tags: string[];
  highlight: string;
  pushedAt: string;
};

export type CaseNote = {
  title: string;
  project: string;
  problem: string;
  learned: string;
  next: string;
};

export type LearningArea = {
  name: string;
  value: number;
  note: string;
};

export const siteConfig = {
  name: "Aman Deep",
  title: "Aman Deep - 13 y/o Dev Portfolio",
  description:
    "Portfolio for Aman Deep, a 13 y/o dev from India building learning apps, AI experiments, translation tools, and Minecraft projects.",
  url: "https://amandeep.sbs"
};

export const profile = {
  name: "Aman Deep",
  handle: "amandeepintl",
  location: "India",
  avatar: "https://avatars.githubusercontent.com/u/263815330?v=4",
  eyebrow: "13 y/o dev from India",
  headline: "just building things and figuring it out.",
  intro:
    "I make learning apps, AI experiments, translation tools, and Minecraft stuff. I code in public and try to actually finish what I start.",
  focus:
    "Looking for scholarships, mentors, and people to collab with.",
  github: "https://github.com/amandeepintl",
  email: "mailto:amandeep.intl@gmail.com",
  instagram: "https://www.instagram.com/havoc.izumi/",
  stats: [
    { value: "8", label: "public repos" },
    { value: "3", label: "latest builds" },
    { value: "6", label: "on the site" }
  ],
  signals: [
    "Learning tools that actually help",
    "AI experiments in plain language",
    "Translation tools for games and desktop",
    "Projects with clear code and next steps"
  ]
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Notes", href: "/notes" },
  { label: "Learning", href: "/learning" },
  { label: "Contact", href: "/contact" }
];

export const allProjects: Project[] = [
  {
    name: "LinguaBridge",
    category: "Minecraft translation mod",
    description:
      "A Minecraft chat translator mod with language toggles, a copy button, caching, and provider switching. Built for players on servers where not everyone speaks the same language.",
    repo: "https://github.com/amandeepintl/LinguaBridge-1.21.11",
    language: "Java",
    tags: ["Java", "Fabric", "Translation"],
    highlight: "Shows I can write Java and think about real-time UX inside a mod.",
    pushedAt: "2026-05-12"
  },
  {
    name: "Inspect.gg",
    category: "Laptop buying tool",
    description:
      "Helps people check second-hand laptops and see if the price is actually fair. Made for buyers in India who don't know much about hardware.",
    repo: "https://github.com/amandeepintl/Inspect.gg",
    language: "Python",
    tags: ["Python", "Hardware checks", "Pricing logic"],
    highlight: "Shows I think about real problems people actually face.",
    pushedAt: "2026-05-12"
  },
  {
    name: "BabyMind",
    category: "AI experiment",
    description:
      "An AI experiment where a simple system starts with zero knowlege and learns step by step. I wanted to understand how learning actually works — not just use a library.",
    repo: "https://github.com/amandeepintl/BabyMind",
    language: "Python",
    tags: ["Python", "AI learning", "Research"],
    highlight: "Shows I care about how AI works — not just how to use it.",
    pushedAt: "2026-05-10"
  },
  {
    name: "LangBY",
    category: "Desktop translation app",
    description:
      "A Windows app that translates text using global hotkeys. Supports 35+ languages and has a clean UI. No need to open a browser tab every time you need a translation.",
    repo: "https://github.com/amandeepintl/LangBY",
    language: "Python",
    tags: ["Python", "Hotkeys", "Desktop app"],
    highlight: "Turned a daily annoyance into something actually useful.",
    pushedAt: "2026-05-05"
  },
  {
    name: "Spartrix-V",
    category: "Minecraft anticheat",
    description:
      "An anticheat system for Minecraft servers. Has player behaviour checks, staff alerts, and moderation tools. Tried to make it fair and not flag legit players.",
    repo: "https://github.com/amandeepintl/Spartrix-V",
    language: "Java",
    tags: ["Java", "Server logic", "Moderation"],
    highlight: "Shows I can think in systems and write rule-based logic.",
    pushedAt: "2026-05-02"
  },
  {
    name: "Clavyy",
    category: "Learning product",
    description:
      "A study web app that asks you questions instead of just giving answers. Helps you actually understand what you're reading, not just copy it.",
    repo: "https://github.com/amandeepintl/Clavyy",
    live: "https://amandeepintl.github.io/Clavyy/",
    language: "CSS",
    tags: ["Learning UX", "Study tool", "Web app"],
    highlight: "Shows I care about education, design, and making things that actually help.",
    pushedAt: "2026-04-20"
  }
];

export const latestProjects = allProjects.slice(0, 3);
export const projects = latestProjects;

export const projectNotes: CaseNote[] = [
  {
    title: "Real-time translation",
    project: "LinguaBridge",
    problem: "Game chat moves fast. Not everyone speaks the same language and missing messages is annoying.",
    learned:
      "Learned how to handle caching, provider switching, and keep the UI clean inside a Minecraft mod.",
    next: "Add a short demo video showing the translation flow."
  },
  {
    title: "Buying decisions",
    project: "Inspect.gg",
    problem: "People buying second-hand laptops often get ripped off because they don't know what to check.",
    learned:
      "Learned how to turn hardware specs into something a normal person can actually use to make a decision.",
    next: "Add real example laptop checks and show the fair price calc step by step."
  },
  {
    title: "Learning from zero",
    project: "BabyMind",
    problem: "AI feels confusing when people just throw math and code at you without explaining the actual idea.",
    learned:
      "Learned how to explain an AI concept step by step — not just dump code and hope people get it.",
    next: "Write a plain project explanation with test results and honest limits."
  },
  {
    title: "Desktop workflow",
    project: "LangBY",
    problem: "Copying text, opening a tab, pasting, waiting — it breaks focus every single time.",
    learned:
      "Learned how global hotkeys work, how to build a simple desktop UI in Python, and how small tools save real time.",
    next: "Add screenshots and a proper install guide."
  },
  {
    title: "Rule-based systems",
    project: "Spartrix-V",
    problem: "Server staff need clear alerts and rules that are actually fair, not just random flags.",
    learned:
      "Learned how detection checks, behaviour signals, and staff tools can all work together without causing false positives.",
    next: "Document the detection rules and explain how to test it safely."
  },
  {
    title: "Guided study",
    project: "Clavyy",
    problem: "Students Google the answer, copy it, move on — but they don't really get it.",
    learned:
      "Learned that asking the right questions makes a learning app feel way more like a tutor than a textbook.",
    next: "Add before-and-after examples from a real study session."
  }
];

export const learningAreas: LearningArea[] = [
  {
    name: "Coding fundamentals",
    value: 72,
    note: "Algorithms, clean code, debugging, project structure — the stuff that makes everything else easier."
  },
  {
    name: "Python tools",
    value: 68,
    note: "Desktop apps, small utilities, scripts that actually solve something."
  },
  {
    name: "Java projects",
    value: 62,
    note: "Minecraft mods, server logic, rule-based systems."
  },
  {
    name: "AI concepts",
    value: 58,
    note: "How learning systems work, using AI in code, explaining ideas without the jargon."
  },
  {
    name: "Web design",
    value: 64,
    note: "Clean layouts, readable writing, making projects easy to understand at a glance."
  },
  {
    name: "Coding platforms",
    value: 52,
    note: "Staying consistent and slowly getting better at the fundamentals."
  }
];

export const links = [
  { label: "GitHub", href: profile.github },
  { label: "Gmail", href: profile.email },
  { label: "Instagram", href: profile.instagram }
];
