export const personalInfo = {
  name: "Kunal Modi",
  title: "React & Next.js Developer | Performance-Driven Web Solutions",
  intro:
    "I craft modern, high-performance applications using React, Next.js, and a powerful blend of cutting-edge frontend technologies.",
  bio: "I am a frontend developer passionate about building offline-ready, scalable, and fast applications. I specialize in React, Next.js, and a range of modern frontend tools that bring speed, accessibility, and delightful experiences to users.",
  avatar: "/profileImage.jpeg",
};

export const projects = [
  {
    id: 1,
    title: "Discord Clone",
    description:
      "A fully functional real-time chat application inspired by Discord, featuring text channels, messaging, and instant updates without page reloads. Includes file sharing, and user presence indicators.",
    techStack: [
      "NextJS",
      "WebSockets",
      "TailwindCSS",
      "ExpressJs",
      "PostgreSQL",
    ],
    link: "https://discord-clone-dusky-iota.vercel.app",
    image: "/discordImage.jpg",
    alignment: "left",
  },
  {
    id: 2,
    title: "ColdWatch",
    description:
      "A PWA for monitoring equipment temperature across multiple sites. Offers an interactive map view, offline data persistence, and one-click sync when reconnected. Optimized for both desktop and mobile field workers.",
    techStack: ["Next.js", "IndexedDB", "PWA", "i18n", "TailwindCSS"],
    image: "/temperature-monitoring-map.png",
    alignment: "right",
  },
  {
    id: 3,
    title: "CCMT (Central Chinmaya Mission Trust)",
    description:
      "Chinmaya Mission's global platform for displaying upcoming events, spiritual itineraries, and educational courses across its worldwide centers. Supports multiple views (calendar, grid, list) and advanced filtering for swami's itineraries",
    techStack: [
      "Next.js",
      "TypeScript",
      "Strapi CMS",
      "TailwindCSS",
      "Payload CMS",
    ],
    link: "https://www.chinmayamission.com",
    image: "/CCMT-Homepage.png",
    alignment: "left",
  },
  {
    id: 4,
    title: "Paisa Pal",
    description:
      "A financial management tool designed to help you create and track budgets, with powerful analytics dashboards, custom categories, and detailed expense tracking.",
    techStack: ["Next.js", "React Hook Form", "MongoDB"],
    link: "https://paisa-pal-gamma.vercel.app",
    image: "/paisaPal.png",
    alignment: "right",
  },
  {
    id: 5,
    title: "React Chat App",
    description:
      "A WhatsApp-like microservice chat module that can be embedded into any app, complete with emoji reactions, message history persistence, and responsive UI.",
    techStack: ["ReactJs", "WebSockets", "IndexedDB", "TailwindCSS"],
    image: "/reactChatApp.png",
    alignment: "left",
  },
];

export const techStackCategories = {
  frontend: {
    title: "Frontend",
    technologies: [
      {
        name: "HTML",
        icon: "🌐",
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: "🎨",
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: "⚡",
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: "📘",
        color: "#3178C6",
      },
      {
        name: "ReactJS",
        icon: "⚛️",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: "▲",
        color: "#ffffff",
      },
      {
        name: "TailwindCSS",
        icon: "💨",
        color: "#06B6D4",
      },
      {
        name: "Motion One",
        icon: "🎭",
        color: "#F7DF1E",
      },
      {
        name: "PWA",
        icon: "📱",
        color: "#5A0FC8",
      },
    ],
  },
  backend: {
    title: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: "🟢",
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: "🚂",
        color: "#ffffff",
      },
      {
        name: "Strapi",
        icon: "🚀",
        color: "#2F2E8B",
      },
      {
        name: "PayloadCMS",
        icon: "📦",
        color: "#ffffff",
      },
      {
        name: "WebSockets",
        icon: "🔌",
        color: "#25C2A0",
      },
    ],
  },
  databases: {
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", color: "#336791" },
      { name: "MongoDB", icon: "🍃", color: "#47A248" },
      { name: "IndexedDB (Client-side)", icon: "💾", color: "#FF6B35" },
      { name: "NoSQL", icon: "🗄️", color: "#4DB33D" },
    ],
  },
  tools: {
    title: "Tools & Libraries",
    technologies: [
      { name: "TanStack Query", icon: "🔄", color: "#FF4154" },
      { name: "APIs (REST & GraphQL)", icon: "🔗", color: "#FF6B6B" },
      { name: "JSON Data Handling", icon: "📋", color: "#ffffff" },
    ],
  },
};

export const testimonials = [
  {
    id: 1,
    name: "Virendra Rathod",
    role: "Product Manager at Webelight Solutions",
    avatar: "/productLead.jpeg",
    feedback:
      "Kunal's commitment, from working weekends to those long stretches last week, was phenomenal in getting the CCMT website live.",
  },
  {
    id: 2,
    name: "Manish Giri Goswami",
    role: "React Lead at Webelight Solutions",
    avatar: "/reactLead.png",
    feedback:
      "Kunal did a stellar job on flawlessly executing a complex design and navigating an intricate UI structure with advanced design requirements, ensuring UI excellence and attention to detail.",
  },
  {
    id: 3,
    name: "Jayesh Anandani",
    role: "CEO & Co-founder at Webelight Solutions",
    avatar: "/CEO.png",
    feedback:
      "Kunal excelled in his knowledge and kept up the spirits throughout the entire road to live. His dedication to learning and upscaling at a young age was truly commendable.",
  },
  {
    id: 4,
    name: "Richa Pandya",
    role: "Devops Lead at Webelight Solutions",
    avatar: "/placeholder-user.jpg",
    feedback:
      "Kunal's commitment to handling challenges with grace and stepping up when it matters most has been invaluable in driving the CCMT project forward.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Do you work remotely?",
    answer:
      "Yes, I have experience collaborating with teams worldwide and am comfortable working in different time zones.",
  },
  {
    id: 2,
    question: "Are you open to freelance work?",
    answer:
      "Yes, I'm open to both freelance projects and full-time opportunities. I enjoy working on challenging frontend projects.",
  },
  {
    id: 3,
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on complexity, but I typically deliver MVPs within 2-4 weeks and full applications within 6-12 weeks.",
  },
  {
    id: 4,
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, I offer ongoing maintenance and support packages to ensure your application stays up-to-date and performs optimally.",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kunal-modi-898838204",
    icon: "💼",
  },
  { name: "GitHub", url: "https://github.com/KunalModi117", icon: "🐙" },
  { name: "Email", url: "mailto:kunalmodi117@gmail.com?subject=Opportunity%20to%20Collaborate%20—%20Found%20Your%Work%20Impressive", icon: "📧" },
];
