export const portfolioData = {
  profile: {
    name: "Pasit Polwisepornsuk",
    title: "Always Learning",
    position: "Full-Stack Developer",
    bio: {
      intro: "hey!!! I'm Pasit Polwisepornsuk, undergraduate computer science student and full-stack developer who loves turning ideas into real, working products. I'm flexible working with any tech stack, though I prefer modern tools. I'm currently working with",
      tech: ["Next.js", "Elysia", "Express", "TypeScript"]
    },
    avatar: "https://avatars.githubusercontent.com/u/179317890?v=4",
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", iconName: "Atom" },
        { name: "Next.js", iconName: "Zap" },
        { name: "Vue", iconName: "Component" },
        { name: "Tailwind", iconName: "Palette" },
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", iconName: "Hexagon" },
        { name: "Python", iconName: "CodeXml" },
        { name: "Go", iconName: "Terminal" },
        { name: "Java", iconName: "Coffee" },
        { name: "MongoDB", iconName: "Database" },
        { name: "GraphQL", iconName: "Share2" },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "TypeScript", iconName: "FileCode2" },
        { name: "AWS", iconName: "Cloud" },
        { name: "Docker", iconName: "Container" },
        { name: "Figma", iconName: "Figma" },
        { name: "GitHub", iconName: "Github" },
        { name: "Swift", iconName: "Bird" },
      ]
    }
  ],
  projects: [
    {
      title: "AI Chatbot",
      slug: "ai-chatbot",
      description: "An LLM-powered chatbot interface with conversation history and customizable prompts.",
      tags: ["React", "Python", "OpenAI API"],
      content: "This project features a conversational AI interface built with React, connecting to a Python backend that leverages the OpenAI API. It supports continuous conversations, customizable persona prompts, and real-time streaming of responses.",
    },
    {
      title: "Transactional Passwords",
      slug: "transactional-passwords",
      description: "Secure password manager with end-to-end encryption and cloud sync.",
      tags: ["React", "Node.js", "MongoDB"],
      content: "A high-security password management tool using industry-standard AES end-to-end encryption. The frontend is built on React, interfacing with a Node.js API and syncing securely to a MongoDB encrypted cloud storage bucket.",
    },
    {
      title: "E-Commerce Platform",
      slug: "e-commerce-platform",
      description: "Full-stack online store with payment integration and inventory management.",
      tags: ["Next.js", "Tailwind", "Prisma"],
      content: "A complete storefront built with Next.js App Router for optimal SEO and performance. Features include a dynamic shopping cart, integration with Stripe for payments, and an administrative dashboard for managing product inventory via Prisma.",
    },
    {
      title: "Productivity App",
      slug: "productivity-app",
      description: "Task management application with real-time collaboration features.",
      tags: ["TypeScript", "Node.js"],
      content: "Built completely in TypeScript, this real-time app offers websocket-driven collaboration so multiple users can edit tasks, drag-and-drop kanban boards, and chat concurrently without page reloads.",
    }
  ]
};
