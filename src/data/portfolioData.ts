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
  en: {
    personal: {
      name: "Agiel Nawawi",
      tagline: "FULL-STACK WEB DEVELOPER",
      handle: "",
      shortBio: "D3 Informatics Engineering student specializing in building end-to-end web applications. Seamlessly bridging responsive front-end interfaces using Next.js & Tailwind CSS with scalable back-end systems built on Laravel, Express.js, and Django.",
      longBio: [
        "I am a Full-Stack Web Developer and Informatics Engineering student at Politeknik Negeri Batam with a strong drive for complete web application development.",
        "I specialize in creating end-to-end digital solutions—from crafting intuitive, interactive user interfaces with Next.js, Tailwind CSS, and Blade, to architecting robust RESTful APIs and relational database schemas with Laravel, Express.js, Django, MySQL, and PostgreSQL. I enjoy turning complex ideas into fully functional, scalable applications."
      ],
      cvUrl: "/cv-agiel-nawawi.pdf",
      dateStamp: "JULY 2026",
      email: "agielnawawi46@gmail.com",
      phone: "+62 812-7615-9623",
      github: "https://github.com/agielnawawi46",
      linkedin: "https://linkedin.com/in/agielnawawi46",
      location: "Batam, Indonesia",
    },
    skills: [
      { name: "HTML", level: 95, category: "Frontend" },
      { name: "CSS", level: 90, category: "Frontend" },
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "Bootstrap", level: 85, category: "Frontend" },
      { name: "Blade", level: 85, category: "Frontend" },
      { name: "PHP", level: 90, category: "Backend" },
      { name: "Laravel", level: 90, category: "Backend" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "Django", level: 80, category: "Backend" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Express.js", level: 80, category: "Backend" },
      { name: "REST API", level: 90, category: "Backend" },
      { name: "MySQL", level: 90, category: "Backend" },
      { name: "PostgreSQL", level: 85, category: "Backend" },
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
        category: "Web App",
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
        category: "Web App",
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
  },
  id: {
    personal: {
      name: "Agiel Nawawi",
      tagline: "PENGEMBANG WEB FULL-STACK",
      handle: "",
      shortBio: "Mahasiswa D3 Teknik Informatika yang berspesialisasi dalam membangun aplikasi web secara utuh. Menghubungkan antarmuka front-end responsif menggunakan Next.js & Tailwind CSS dengan sistem back-end tangguh menggunakan Laravel, Express.js, dan Django.",
      longBio: [
        "Saya adalah seorang Pengembang Web Full-Stack dan mahasiswa Teknik Informatika di Politeknik Negeri Batam dengan ketertarikan kuat pada pengembangan aplikasi web yang utuh.",
        "Saya berspesialisasi dalam menciptakan solusi digital end-to-end—mulai dari merancang antarmuka pengguna interaktif menggunakan Next.js, Tailwind CSS, dan Blade, hingga merancang RESTful API yang andal dan skema database relasional menggunakan Laravel, Express.js, Django, MySQL, dan PostgreSQL. Saya senang mengubah ide-ide kompleks menjadi aplikasi fungsional yang skalabel."
      ],
      cvUrl: "/cv-agiel-nawawi.pdf",
      dateStamp: "JULI 2026",
      email: "agielnawawi46@gmail.com",
      phone: "+62 812-7615-9623",
      github: "https://github.com/agielnawawi46",
      linkedin: "https://linkedin.com/in/agielnawawi46",
      location: "Batam, Indonesia",
    },
    skills: [
      { name: "HTML", level: 95, category: "Frontend" },
      { name: "CSS", level: 90, category: "Frontend" },
      { name: "JavaScript", level: 90, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "Bootstrap", level: 85, category: "Frontend" },
      { name: "Blade", level: 85, category: "Frontend" },
      { name: "PHP", level: 90, category: "Backend" },
      { name: "Laravel", level: 90, category: "Backend" },
      { name: "Python", level: 85, category: "Backend" },
      { name: "Django", level: 80, category: "Backend" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Express.js", level: 80, category: "Backend" },
      { name: "REST API", level: 90, category: "Backend" },
      { name: "MySQL", level: 90, category: "Backend" },
      { name: "PostgreSQL", level: 85, category: "Backend" },
      { name: "Git & GitHub", level: 90, category: "Tools" },
      { name: "Postman", level: 85, category: "Tools" },
      { name: "VS Code", level: 95, category: "Tools" },
    ] as Skill[],
    projects: [
      {
        id: "proj-001",
        title: "Web Pariwisata Bahari",
        description: "Website pariwisata responsif untuk mempromosikan destinasi bahari.",
        longDescription: "Mengembangkan website pariwisata responsif untuk mempromosikan destinasi dan daya tarik wisata bahari. Merancang antarmuka ramah pengguna dengan fokus pada aksesibilitas dan pengalaman pengguna. Mengimplementasikan fitur interaktif menggunakan JavaScript untuk meningkatkan interaksi pengunjung.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "/projects/artboard.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-002",
        title: "E-Commerce Pakaian",
        description: "Platform e-commerce responsif untuk produk pakaian.",
        longDescription: "Mengembangkan platform e-commerce responsif untuk produk pakaian. Membangun antarmuka frontend menggunakan Laravel Blade dan Tailwind CSS. Mengembangkan backend API menggunakan Framework Django. Mengimplementasikan autentikasi, manajemen produk, keranjang belanja, dan fitur transaksi.",
        techStack: ["Laravel", "Django", "Tailwind", "MySQL"],
        image: "/projects/nekoshop.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-003",
        title: "Peminjaman Peralatan",
        description: "Sistem manajemen peminjaman peralatan berbasis web.",
        longDescription: "Mengembangkan sistem manajemen peminjaman peralatan berbasis web untuk menyederhanakan proses peminjaman dan pengembalian. Membangun antarmuka pengguna responsif menggunakan Next.js. Mengembangkan RESTful API menggunakan Express.js dan Node.js. Mengimplementasikan fungsionalitas CRUD untuk peralatan, pengguna, dan permintaan peminjaman.",
        techStack: ["Node.js", "Next.js", "Express", "Postgres"],
        image: "/projects/datasphere.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-004",
        title: "Sistem Koperasi",
        description: "Sistem manajemen simpan pinjam untuk karyawan perusahaan.",
        longDescription: "Mengembangkan sistem manajemen koperasi simpan pinjam berbasis web untuk karyawan perusahaan. Mengimplementasikan fitur manajemen anggota, simpanan, pinjaman, angsuran, dan transaksi. Membangun REST API menggunakan Laravel untuk komunikasi dan integrasi data.",
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
        role: "D3 Teknik Informatika",
        company: "Politeknik Negeri Batam",
        period: "2024 — Sekarang",
        description: "Mahasiswa Semester 4 yang berfokus pada rekayasa perangkat lunak, pengembangan web, dan sistem backend. Terampil dalam aplikasi web responsif, desain basis data relasional, dan integrasi frontend-backend.",
        highlights: [
          "Minat kuat pada Pengembangan Backend dan Frontend & Rekayasa Perangkat Lunak",
          "Berpengalaman dengan Laravel, Django, Node.js, PHP, Python, MySQL, dan REST API",
          "Bekerja efektif baik secara mandiri maupun dalam tim dengan dorongan tinggi untuk terus berkembang secara teknis",
        ],
        type: "education",
      },
      {
        id: "exp-002",
        role: "Sekolah Menengah Atas",
        company: "SMAIT Imam Syafi'i",
        period: "2018 — 2021",
        description: "Menyelesaikan pendidikan sekolah menengah atas dengan fokus pada ilmu pengetahuan alam dan studi umum.",
        highlights: [],
        type: "education",
      },
      {
        id: "exp-003",
        role: "Sekolah Menengah Pertama",
        company: "SMPIT Imam Syafi'i",
        period: "2015 — 2018",
        description: "Menyelesaikan pendidikan sekolah menengah pertama di sekolah Islam terpadu.",
        highlights: [],
        type: "education",
      },
    ] as Experience[],
    testimonials: [] as Testimonial[],
  }
};
