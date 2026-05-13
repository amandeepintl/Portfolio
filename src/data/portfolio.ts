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
  title: "Aman Deep - Student Builder Portfolio",
  description:
    "Portfolio for Aman Deep, a student builder from India making learning apps, AI experiments, translation tools, and Minecraft projects.",
  url: "https://amandeepintl.vercel.app"
};

export const profile = {
  name: "Aman Deep",
  handle: "amandeepintl",
  location: "India",
  avatar: "https://avatars.githubusercontent.com/u/263815330?v=4",
  eyebrow: "Student builder from India",
  headline: "Building useful software, one project at a time.",
  intro:
    "I build learning apps, AI experiments, translation tools, and Minecraft utilities while improving my coding skills in public.",
  focus:
    "I am looking for scholarships, mentors, collaborations, and meaningful project work.",
  github: "https://github.com/amandeepintl",
  email: "mailto:amandeep.intl@gmail.com",
  instagram: "https://www.instagram.com/havoc.izumi/",
  stats: [
    { value: "8", label: "public repos" },
    { value: "3", label: "latest builds" },
    { value: "6", label: "shown works" }
  ],
  signals: [
    "Learning tools for students",
    "AI experiments explained in simple language",
    "Translation tools for games and desktop work",
    "Projects with clear rules, tests, and next steps"
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
      "A Minecraft chat translator mod with language toggles, copy buttons, caching, and provider controls.",
    repo: "https://github.com/amandeepintl/LinguaBridge-1.21.11",
    language: "Java",
    tags: ["Java", "Fabric", "Translation"],
    highlight: "Shows Java coding and attention to real-time user experience.",
    pushedAt: "2026-05-12"
  },
  {
    name: "Inspect.gg",
    category: "Laptop buying tool",
    description:
      "A laptop checking and fair price calculator for people buying second-hand laptops in India.",
    repo: "https://github.com/amandeepintl/Inspect.gg",
    language: "Python",
    tags: ["Python", "Hardware checks", "Pricing logic"],
    highlight: "Shows practical thinking and awareness of real buyer problems.",
    pushedAt: "2026-05-12"
  },
  {
    name: "BabyMind",
    category: "AI experiment",
    description:
      "An AI experiment about how a simple system can start with no knowledge and learn step by step.",
    repo: "https://github.com/amandeepintl/BabyMind",
    language: "Python",
    tags: ["Python", "AI learning", "Research"],
    highlight: "Shows curiosity about how AI works, not just how to use AI tools.",
    pushedAt: "2026-05-10"
  },
  {
    name: "LangBY",
    category: "Desktop translation app",
    description:
      "A Windows translation app that uses global hotkeys, a clean desktop UI, and support for 35 plus languages.",
    repo: "https://github.com/amandeepintl/LangBY",
    language: "Python",
    tags: ["Python", "Hotkeys", "Desktop app"],
    highlight: "Turns a daily language problem into a useful tool.",
    pushedAt: "2026-05-05"
  },
  {
    name: "Spartrix-V",
    category: "Minecraft anticheat",
    description:
      "A Minecraft server anticheat project focused on checks, staff alerts, player behavior, and moderation tools.",
    repo: "https://github.com/amandeepintl/Spartrix-V",
    language: "Java",
    tags: ["Java", "Server logic", "Moderation"],
    highlight: "Shows system thinking and rule-based problem solving.",
    pushedAt: "2026-05-02"
  },
  {
    name: "Clavyy",
    category: "Learning product",
    description:
      "A learning web app that helps students understand difficult study material through guided questions.",
    repo: "https://github.com/amandeepintl/Clavyy",
    live: "https://amandeepintl.github.io/Clavyy/",
    language: "CSS",
    tags: ["Learning UX", "Study tool", "Web app"],
    highlight: "Good for scholarship reviewers because it shows education, design, and product thinking.",
    pushedAt: "2026-04-20"
  }
];

export const latestProjects = allProjects.slice(0, 3);
export const projects = latestProjects;

export const projectNotes: CaseNote[] = [
  {
    title: "Real-time translation",
    project: "LinguaBridge",
    problem: "Game chat can move fast, and players may not understand every language.",
    learned:
      "I learned how to think about user controls, caching, provider settings, and clear UI inside a mod.",
    next: "Add a short demo video and explain how the translation flow works."
  },
  {
    title: "Buying decisions",
    project: "Inspect.gg",
    problem: "Second-hand laptop buyers need simple checks before trusting a price.",
    learned:
      "I learned how to turn hardware details into a clearer decision for normal buyers.",
    next: "Add example laptop checks and show how the fair price is calculated."
  },
  {
    title: "Learning from zero",
    project: "BabyMind",
    problem: "AI can feel hard to understand when the idea is too abstract.",
    learned:
      "I learned how to explain an AI idea step by step instead of only showing code.",
    next: "Write a simple project explanation with test results and limits."
  },
  {
    title: "Desktop workflow",
    project: "LangBY",
    problem: "Copying text into a translator breaks focus and wastes time.",
    learned:
      "I learned about hotkeys, desktop UI, and building a small tool for daily use.",
    next: "Add screenshots and a short install guide."
  },
  {
    title: "Rule-based systems",
    project: "Spartrix-V",
    problem: "Server staff need readable alerts and fair rules for moderation.",
    learned:
      "I learned how checks, behavior signals, and staff workflows can work together.",
    next: "Document the detection rules and explain safe testing."
  },
  {
    title: "Guided study",
    project: "Clavyy",
    problem: "Students often get answers quickly but do not always understand the topic.",
    learned:
      "I learned how guided questions can make a learning app feel more like a tutor.",
    next: "Add before-and-after examples from a study session."
  }
];

export const learningAreas: LearningArea[] = [
  {
    name: "Coding fundamentals",
    value: 72,
    note: "Algorithms, clean code, debugging, and project structure."
  },
  {
    name: "Python tools",
    value: 68,
    note: "Desktop apps, small utilities, and problem-solving scripts."
  },
  {
    name: "Java projects",
    value: 62,
    note: "Minecraft mods, server logic, and rule-based systems."
  },
  {
    name: "AI concepts",
    value: 58,
    note: "Learning systems, AI-assisted coding, and explaining ideas simply."
  },
  {
    name: "Web design",
    value: 64,
    note: "Clear layouts, simple writing, accessibility, and project storytelling."
  },
  {
    name: "Coding platforms",
    value: 52,
    note: "Practice, consistency, and building stronger fundamentals over time."
  }
];

export const links = [
  { label: "GitHub", href: profile.github },
  { label: "Gmail", href: profile.email },
  { label: "Instagram", href: profile.instagram }
];
