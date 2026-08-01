export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  wireframeUrl?: string;
  liveDemoUrl: string;
  githubUrl: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'work' | 'education';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
}

export const portfolioData = {
  personal: {
    name: "Agiel Nawawi",
    tagline: "INFORMATICS STUDENT & WEB DEVELOPER",
    handle: "@AGIEL.DEV",
    bio: "D3 Informatics Engineering student at Politeknik Negeri Batam (Semester 4) with strong interest in Web Development, Backend Development, Frontend Development and Software Engineering. Experienced in building projects with Laravel, Django, Node.js, PHP, Python, MySQL, and REST APIs.",
    cvUrl: "/cv-agiel-nawawi.pdf",
    dateStamp: "JULY 2026",
    email: "agielnawawi46@gmail.com",
    phone: "+62 812-7615-9623",
    github: "https://github.com/agielnawawi46",
    linkedin: "https://linkedin.com/in/agielnawawi46",
    location: "Batam, Indonesia",
  },

  skills: [
    // Frontend
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Bootstrap", level: 85, category: "Frontend" },
    { name: "Blade", level: 85, category: "Frontend" },
    // Backend
    { name: "PHP", level: 90, category: "Backend" },
    { name: "Laravel", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Django", level: 80, category: "Backend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "REST API", level: 90, category: "Backend" },
    { name: "MySQL", level: 90, category: "Backend" },
    { name: "PostgreSQL", level: 85, category: "Backend" },
    // Tools
    { name: "Git & GitHub", level: 90, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
  ] as Skill[],

  projects: [
    {
      id: "proj-001",
      title: "Marine Tourism Web",
      description: "Responsive tourism website to promote marine destinations.",
      longDescription: "Developed a responsive tourism website to promote marine tourism destinations and attractions. Designed user-friendly interfaces with a focus on accessibility and user experience. Implemented interactive features using JavaScript to improve visitor engagement.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/projects/artboard.png",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/agielnawawi46",
      category: "Web App",
    },
    {
      id: "proj-002",
      title: "E-Commerce Clothing",
      description: "Responsive e-commerce platform for clothing products.",
      longDescription: "Developed a responsive e-commerce platform for clothing products. Built frontend interfaces using Laravel Blade and Tailwind CSS. Developed backend APIs using Django Framework. Implemented authentication, product management, shopping cart, and transaction features.",
      techStack: ["Laravel", "Django", "Tailwind", "MySQL"],
      image: "/projects/nekoshop.png",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/agielnawawi46",
      category: "E-Commerce",
    },
    {
      id: "proj-003",
      title: "Equipment Borrowing",
      description: "Web-based equipment borrowing management system.",
      longDescription: "Developed a web-based equipment borrowing management system to streamline borrowing and return processes. Built responsive user interfaces using Next.js. Developed RESTful APIs using Express.js and Node.js. Implemented CRUD functionality for equipment, users, and borrowing requests.",
      techStack: ["Node.js", "Next.js", "Express", "Postgres"],
      image: "/projects/datasphere.png",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/agielnawawi46",
      category: "Dashboard",
    },
    {
      id: "proj-004",
      title: "Cooperative System",
      description: "Savings and loan management system for company employees.",
      longDescription: "Developed a web-based cooperative savings and loan management system for company employees. Implemented member management, savings, loans, installments, and transaction features. Built REST APIs using Laravel for data communication and integration.",
      techStack: ["Laravel", "REST API", "MySQL"],
      image: "/projects/lumina.png",
      liveDemoUrl: "#",
      githubUrl: "https://github.com/agielnawawi46",
      category: "Web App",
    }
  ] as Project[],

  experiences: [
    {
      id: "exp-001",
      role: "D3 Informatics Engineering",
      company: "Politeknik Negeri Batam",
      period: "2024 — Present",
      description: "Semester 4 student focusing on software engineering, web development, and backend systems. Skilled in responsive web applications, relational database design, and frontend-backend integration.",
      highlights: [
        "Strong interest in Backend and Frontend Development & Software Engineering",
        "Experienced in Laravel, Django, Node.js, PHP, Python, MySQL, and REST APIs",
        "Works effectively independently and in teams with a high drive for continuous technical growth",
      ],
      type: "education",
    },
    {
      id: "exp-002",
      role: "Senior High School",
      company: "SMAIT Imam Syafi'i",
      period: "2018 — 2021",
      description: "Completed senior high school education with a focus on science and general studies.",
      highlights: [],
      type: "education",
    },
    {
      id: "exp-003",
      role: "Junior High School",
      company: "SMPIT Imam Syafi'i",
      period: "2015 — 2018",
      description: "Completed junior high school education at an Islamic integrated school.",
      highlights: [],
      type: "education",
    },
  ] as Experience[],

  testimonials: [] as Testimonial[],
};
