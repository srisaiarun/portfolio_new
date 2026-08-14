export type NavigationLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  cgpa: string;
  specialization: string;
  relevantCoursework: string[];
};

export type JourneyItem = {
  title: string;
  subtitle: string;
  period: string;
  details: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type CodingProfile = {
  name: string;
  url: string;
};

export type PersonalInfo = {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  codechef: string;
  codeforces: string;
  heroDescription: string;
  imagePaths: {
    profile: string;
    profileSecondary: string;
    spiderman: string;
  };
};

export const personalInfo: PersonalInfo = {
  name: "Sri Sai Arun",
  role: "AI & SOFTWARE ENGINEER",
  location: "Hyderabad, India",
  phone: "+91 9502473298",
  email: "2310080060aids@gmail.com",
  github: "https://github.com/srisaiarun",
  linkedin: "https://www.linkedin.com/in/janagama-srisaiarun-1636b7339",
  leetcode: "https://leetcode.com/u/srisaiarun/",
  codechef: "https://www.codechef.com/users/srisaiarun",
  codeforces: "https://codeforces.com/profile/srisaiarun",
  heroDescription:
    "Building intelligent systems, digital experiences, and software that solves real problems.",
  imagePaths: {
    profile: "/images/profile.jpg",
    profileSecondary: "/images/profile-secondary.jpg",
    spiderman: "/images/spiderman_arun.png",
  },
};

export const education: Education = {
  institution: "KLH Deemed to be University",
  location: "Hyderabad, India",
  degree:
    "Bachelor of Technology in Computer Science (Artificial Intelligence & Data Science)",
  duration: "August 2023 - May 2027",
  cgpa: "9.10 / 10.00",
  specialization: "Computer Vision",
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const navigationLinks: NavigationLink[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "CODE", href: "#code" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "C", "SQL"],
  },
  {
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Backend & Web",
    items: ["FastAPI", "Node.js", "REST APIs", "Asynchronous Programming", "React.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQL", "SQLite", "Qdrant", "Neo4j"],
  },
  {
    title: "Cloud / Tools / DevOps",
    items: ["AWS", "Docker", "Git", "GitHub", "Linux Shell", "Postman"],
  },
  {
    title: "AI / ML Systems",
    items: ["Vector Search", "Code Embeddings", "Hybrid Retrieval", "LLM Integration", "OpenCV"],
  },
];

export const journeyItems: JourneyItem[] = [
  {
    title: education.degree,
    subtitle: `${education.institution} | ${education.location}`,
    period: education.duration,
    details:
      "Building a strong foundation in software engineering while applying AI and data science concepts to real software systems.",
  },
  {
    title: "Computer Vision Specialization",
    subtitle: "Artificial Intelligence & Data Science Track",
    period: "2023 - 2027",
    details:
      "Developing computer vision pipelines and practical ML applications with a focus on usability, system integration, and performance.",
  },
  {
    title: "Continuous Learning and Project Development",
    subtitle: "DSA, AI/ML, and Full Stack Engineering",
    period: "Ongoing",
    details:
      "Actively solving DSA problems, shipping AI-driven projects, and building full stack systems with iterative engineering workflows.",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "01",
    title: "GraphRAG Engineering Intelligence Platform",
    subtitle: "AI-Powered Codebase Intelligence",
    description:
      "An engineering intelligence platform that parses codebases, performs AST-aware chunking, indexes structural and semantic software artifacts, and enables codebase-aware querying.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Qdrant",
      "Neo4j",
      "Sentence Transformers",
      "Ollama",
    ],
    capabilities: [
      "AST-aware code parsing",
      "Hybrid retrieval",
      "Qdrant vector similarity search",
      "Neo4j graph relationships",
      "Asynchronous ingestion pipelines",
      "REST APIs",
      "Local LLM inference using Gemma 3:1B through Ollama",
    ],
    githubUrl:
      "https://github.com/srisaiarun/GraphRAG-Engineering-Intelligence-Platform",
  },

  {
    id: "02",
    title: "ATS Resume Analyzer",
    subtitle: "AI Document Processing Service",
    description:
      "An ATS-oriented AI document processing system designed to process resume and job-description information, evaluate candidate profiles, detect skill gaps, and perform semantic matching.",
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB",
      "Gemini API",
      "Docker",
      "REST APIs",
    ],
    capabilities: [
      "Multi-format document processing",
      "Unstructured text extraction",
      "Candidate evaluation",
      "Skill-gap detection",
      "Semantic job matching",
      "MongoDB storage",
      "Dockerized services",
    ],
    githubUrl:
      "https://github.com/srisaiarun/ats_telegram_bot",
    liveUrl:
      "https://t.me/ats_arun_bot",
  },

  {
    id: "03",
    title: "AI Stock Assistant",
    subtitle: "Supply Chain Analytics & Natural Language Engine",
    description:
      "A supply-chain analytics system that processes inventory metrics, tracks stock movement, identifies anomalies, and supports natural-language querying over structured data.",
    technologies: [
      "FastAPI",
      "Python",
      "SQL",
      "PostgreSQL",
      "AWS",
      "REST APIs",
    ],
    capabilities: [
      "Inventory analytics",
      "Stock movement tracking",
      "Supply-chain anomaly detection",
      "Natural-language query engine",
      "Dynamic SQL generation",
      "PostgreSQL",
      "Cloud deployment",
    ],
    githubUrl:
      "https://github.com/srisaiarun/Ai-stock-assistant",
    liveUrl:
      "https://ai-stock-assistant-0btj.onrender.com/",
  },
];

export const certifications: string[] = [
  "AWS Certified Cloud Practitioner",
  "MongoDB Certified Associate Developer",
  "GitHub Foundations Certification",
  "Oracle Cloud Infrastructure (OCI) AI Foundations",
  "Automation Anywhere Certified Advanced Automation Professional",
];

export const codingProfiles: CodingProfile[] = [
  { name: "LeetCode", url: personalInfo.leetcode },
  { name: "CodeChef", url: personalInfo.codechef },
  { name: "Codeforces", url: personalInfo.codeforces },
];

export const brandingFacts = [
  personalInfo.location.toUpperCase(),
  `${education.cgpa} CGPA`,
  "B.TECH AI & DATA SCIENCE",
  "2023 - 2027",
];

export const aboutFocusAreas = [
  "Computer Vision",
  "Artificial Intelligence",
  "Machine Learning",
  "Software Engineering",
  "Full-stack development",
  "Data-driven systems",
];
