export const portfolioData = {
  profile: {
    name: "Pasit Polwisepornsuk",
    firstName: "Pasit",
    lastName: "Polwisepornsuk",
    title: "Full-Stack Developer",
    bio: "Final-year Computer Science student at Khon Kaen University with production experience as the solo Full-Stack Developer intern at T.Home Inspector. Experienced in building and deploying web applications, internal systems, workflow automation, and LINE integrations throughout the entire software development lifecycle. Passionate about scalable software, DevOps, and AI-assisted software engineering.",
    avatar: "https://avatars.githubusercontent.com/u/179317890?v=4",
    email: "pasitgut.dev@gmail.com",
    github: "https://github.com/pasitgut",
    portfolio: "https://pasitgut.com",
  },
  stats: [
    { label: "Production Systems", value: "5+" },
    { label: "Performance Boost", value: "~33%" },
    { label: "GPA", value: "3.68" },
    { label: "Hackathon Awards", value: "2" },
  ],
  softSkills: [
    "Problem Solving",
    "System Thinking",
    "Communication",
    "Team Collaboration",
    "Adaptability",
    "Continuous Learning",
  ],
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Go", iconName: "Terminal" },
        { name: "TypeScript", iconName: "FileCode2" },
        { name: "JavaScript", iconName: "FileCode2" },
        { name: "Python", iconName: "CodeXml" },
        { name: "PHP", iconName: "FileCode2" },
        { name: "Java", iconName: "Coffee" },
        { name: "Kotlin", iconName: "Code2" },
        { name: "SQL", iconName: "Database" },
        { name: "Dart", iconName: "Code2" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", iconName: "Atom" },
        { name: "Next.js", iconName: "Zap" },
        { name: "Vue", iconName: "Component" },
        { name: "HTML/CSS", iconName: "Globe" },
        { name: "Tailwind CSS", iconName: "Palette" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Spring Boot", iconName: "Server" },
        { name: "Gin", iconName: "Hexagon" },
        { name: "Express", iconName: "Hexagon" },
        { name: "Hono", iconName: "Flame" },
        { name: "Elysia", iconName: "Zap" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "Flutter", iconName: "Smartphone" },
        { name: "Jetpack Compose", iconName: "Smartphone" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", iconName: "Database" },
        { name: "PostgreSQL", iconName: "Database" },
        { name: "MongoDB", iconName: "Database" },
        { name: "Redis", iconName: "Database" },
        { name: "Firebase", iconName: "Flame" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Cloudflare", iconName: "Cloud" },
        { name: "Google Cloud", iconName: "Cloud" },
        { name: "Vercel", iconName: "Triangle" },
        { name: "Netlify", iconName: "Cloud" },
        { name: "Docker", iconName: "Container" },
        { name: "GitHub Actions", iconName: "GitBranch" },
        { name: "Jenkins", iconName: "Cog" },
      ],
    },
    {
      category: "Testing & AI",
      items: [
        { name: "Playwright", iconName: "TestTube" },
        { name: "Robot Framework", iconName: "Bot" },
        { name: "MCP", iconName: "Cpu" },
        { name: "Claude Code", iconName: "Brain" },
        { name: "Cursor", iconName: "MousePointer" },
      ],
    },
  ],
  experience: [
    {
      company: "T.Home Inspector",
      role: "Full-Stack Developer Intern",
      period: "Apr 2026 – Sep 2026",
      description:
        "Sole software engineering intern, independently owning all software projects from planning to production deployment.",
      highlights: [
        "Designed and implemented an internal HRM platform supporting daily business operations",
        "Developed a workflow tracking system integrated with legacy APIs and LINE Official Account",
        "Refactored the company's primary website into a cleaner, modular, maintainable architecture",
        "Optimized website performance by ~33% while improving SEO and overall user experience",
        "Built automation systems and reporting dashboards to reduce repetitive manual work",
        "Gathered requirements directly from stakeholders and translated business needs into scalable solutions",
        "Managed complete lifecycle: frontend, backend, database, testing, DevOps, deployment, monitoring",
        "Deployed production applications using GitHub Actions, Cloudflare, Vercel, and Netlify",
      ],
    },
  ],
  projects: [
    {
      title: "Lung Sounds Tutor",
      slug: "lung-sounds-tutor",
      description:
        "Web-based learning platform for the Faculty of Nursing, Khon Kaen University. Built with Next.js and Firebase featuring interactive 3D lung visualization.",
      tags: ["Next.js", "Firebase", "3D Visualization"],
      content:
        "A web-based learning platform developed for the Faculty of Nursing at Khon Kaen University. Built using Next.js and Firebase with interactive 3D lung visualization. Deployed on Vercel and actively used by students in real learning environments.",
    },
    {
      title: "Gymemo",
      slug: "gymemo",
      description:
        "Cognitive training platform for elderly users with interactive memory-training activities for practical healthcare education.",
      tags: ["Next.js", "Express", "MongoDB"],
      content:
        "A cognitive training platform for elderly users built with Next.js, Express, and MongoDB. Designed interactive memory-training activities for practical healthcare education.",
    },
    {
      title: "T.Home HRM Platform",
      slug: "thome-hrm",
      description:
        "Internal HRM platform designed and implemented solo to support daily business operations at T.Home Inspector.",
      tags: ["Next.js", "TypeScript", "Database"],
      content:
        "An internal Human Resource Management platform built from scratch as the sole developer. Supports daily business operations including employee management, scheduling, and reporting. Deployed to production and actively used across the company.",
    },
    {
      title: "Workflow Tracking System",
      slug: "workflow-tracking",
      description:
        "Workflow management system integrated with legacy APIs and LINE Official Account for operational management.",
      tags: ["API Integration", "LINE", "Automation"],
      content:
        "A workflow tracking system that bridges modern web interfaces with legacy APIs. Integrated with LINE Official Account for seamless operational management. Features include task assignment, status tracking, and automated notifications.",
    },
  ],
  education: {
    university: "Khon Kaen University",
    degree: "Bachelor of Science in Computer Science",
    graduation: "Expected 2027",
    gpa: "3.68 / 4.00",
  },
  hackathons: [
    {
      name: "True CyberSafe x TrueMoney Hackathon",
      achievement: "Top 15 Nationwide",
      description:
        "Developed a fraud detection platform using Next.js frontend and Express backend. Dockerized and deployed on Huawei Cloud.",
    },
    {
      name: "Data Universe Hackathon",
      achievement: "1st Runner-up",
      description:
        "Analyzed PM2.5 and sugarcane datasets using Python. Proposed B2B and B2C business solutions based on data-driven insights.",
    },
  ],
  contact: {
    email: "pasitgut.dev@gmail.com",
    github: "https://github.com/pasitgut",
    portfolio: "https://pasitgut.com",
  },
};
