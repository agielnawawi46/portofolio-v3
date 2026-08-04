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
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "React", level: 85, category: "Frontend" },
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
      { name: "Git & GitHub", level: 90, category: "Tools" },
      { name: "Postman", level: 85, category: "Tools" },
      { name: "VS Code", level: 95, category: "Tools" },
      { name: "Antigravity", level: 99, category: "Tools" },
    ] as Skill[],
    projects: [
      {
        id: "proj-001",
        title: "Marine Tourism Web",
        description: "Responsive tourism website to promote marine destinations.",
        longDescription: "Developed a responsive full-stack web application to promote marine tourism destinations and interactive travel guides. Implemented backend data routing, dynamic content management, and database storage using Laravel and MySQL. Designed user-friendly, accessible UI interfaces adhering to responsive web design principles. Programmed interactive frontend features with JavaScript, including dynamic image galleries and interactive navigation.",
        techStack: ["Laravel", "HTML5", "CSS3", "JavaScript", "MySQL"],
        image: "/projects/artboard.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-002",
        title: "E-Commerce Clothing",
        description: "Responsive e-commerce platform for clothing products.",
        longDescription: "Architected a full-stack e-commerce web platform for clothing product retail. Built dynamic, interactive user interfaces using Laravel Blade paired with Tailwind CSS for responsive layout design. Developed backend business engines and REST APIs utilizing the Django Framework and MySQL. Integrated core e-commerce features including user authentication, product catalog management, shopping cart states, and checkout processing.",
        techStack: ["Laravel", "Django", "REST API", "Tailwind CSS", "MySQL"],
        image: "/projects/nekoshop.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-003",
        title: "Equipment Borrowing",
        description: "Web-based equipment borrowing management system.",
        longDescription: "Engineered a web-based equipment management system to automate borrowing and return workflows for operational efficiency. Developed high-performance, responsive user interfaces using Next.js. Architected scalable RESTful APIs with Express.js and Node.js to handle asynchronous client-server requests. Designed and optimized relational database schemas in MySQL for managing inventory items, user roles, and transaction logs.",
        techStack: ["Next.js", "Express.js", "Node.js", "MySQL"],
        image: "/pro2.jpg",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-004",
        title: "Cooperative System",
        description: "Savings and loan management system for company employees.",
        longDescription: "Developed an enterprise-grade web application to digitize internal employee savings, loans, and installment tracking. Built secure REST APIs using Laravel for seamless data communication and integration across system modules. Implemented Role-Based Access Control (RBAC) and encrypted authentication mechanisms to safeguard financial data. Structured relational database tables in MySQL and optimized database queries.",
        techStack: ["Laravel", "REST API", "MySQL"],
        image: "/pro1.jpg",
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
        description: "Semester 4 student specializing in Full-Stack Web Development. Proficient in building end-to-end web applications.",
        highlights: [
          "Relevant Coursework: Web Development, Software Engineering, Database Systems, Computer Networks, Data Structures.",
          "Seamlessly combining responsive frontend interfaces (Next.js, Tailwind CSS, Blade) with robust backend systems (Laravel, Node.js, Django).",
          "Skilled in relational database design with MySQL, role-based authentication, and modern system architectures."
        ],
        type: "education",
      },
      {
        id: "exp-002",
        role: "Senior High School",
        company: "SMAIT Imam Syafi\'i",
        period: "2018 — 2021",
        description: "Completed senior high school education with a focus on science and general studies.",
        highlights: [],
        type: "education",
      },
      {
        id: "exp-003",
        role: "Junior High School",
        company: "SMPIT Imam Syafi\'i",
        period: "2015 — 2018",
        description: "Completed junior high school education at an Islamic integrated school.",
        highlights: [],
        type: "education",
      },
    ] as Experience[],
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
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "React", level: 85, category: "Frontend" },
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
      { name: "Git & GitHub", level: 90, category: "Tools" },
      { name: "Postman", level: 85, category: "Tools" },
      { name: "VS Code", level: 95, category: "Tools" },
      { name: "Antigravity", level: 99, category: "Tools" },
    ] as Skill[],
    projects: [
      {
        id: "proj-001",
        title: "Web Pariwisata Bahari",
        description: "Website pariwisata responsif untuk mempromosikan destinasi wisata.",
        longDescription: "Mengembangkan aplikasi web full-stack responsif untuk mempromosikan destinasi wisata bahari dan panduan wisata interaktif. Mengimplementasikan perutean data backend, manajemen konten dinamis, dan penyimpanan database menggunakan Laravel dan MySQL. Merancang antarmuka UI yang ramah pengguna dan dapat diakses sesuai dengan prinsip desain web responsif. Memprogram fitur frontend interaktif dengan JavaScript, termasuk galeri gambar dinamis dan navigasi interaktif.",
        techStack: ["Laravel", "HTML5", "CSS3", "JavaScript", "MySQL"],
        image: "/projects/artboard.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-002",
        title: "E-Commerce Pakaian",
        description: "Platform e-commerce responsif untuk produk pakaian ritel.",
        longDescription: "Merancang platform web e-commerce full-stack untuk ritel produk pakaian. Membangun antarmuka pengguna yang dinamis dan interaktif menggunakan Laravel Blade yang dipadukan dengan Tailwind CSS untuk desain tata letak yang responsif. Mengembangkan mesin bisnis backend dan REST API memanfaatkan Framework Django dan MySQL. Mengintegrasikan fitur inti e-commerce termasuk autentikasi pengguna, manajemen katalog produk, status keranjang belanja, dan pemrosesan checkout.",
        techStack: ["Laravel", "Django", "REST API", "Tailwind CSS", "MySQL"],
        image: "/projects/nekoshop.png",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-003",
        title: "Peminjaman Peralatan",
        description: "Sistem manajemen peminjaman peralatan berbasis web.",
        longDescription: "Merekayasa sistem manajemen peralatan berbasis web untuk mengotomatisasi alur kerja peminjaman dan pengembalian demi efisiensi operasional. Mengembangkan antarmuka pengguna responsif berperforma tinggi menggunakan Next.js. Merancang RESTful API yang dapat diskalakan dengan Express.js dan Node.js untuk menangani permintaan klien-server asinkron. Merancang dan mengoptimalkan skema database relasional di MySQL untuk mengelola item inventaris, peran pengguna, dan log transaksi.",
        techStack: ["Next.js", "Express.js", "Node.js", "MySQL"],
        image: "/pro2.jpg",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/agielnawawi46",
        category: "Web App",
      },
      {
        id: "proj-004",
        title: "Sistem Koperasi",
        description: "Sistem manajemen simpan pinjam untuk karyawan perusahaan.",
        longDescription: "Mengembangkan aplikasi web tingkat perusahaan (enterprise-grade) untuk mendigitalkan simpanan, pinjaman, dan pelacakan angsuran karyawan internal. Membangun REST API yang aman menggunakan Laravel untuk komunikasi data dan integrasi yang lancar di seluruh modul sistem. Mengimplementasikan Role-Based Access Control (RBAC) dan mekanisme autentikasi terenkripsi untuk melindungi data keuangan. Menyusun tabel database relasional di MySQL dan mengoptimalkan kueri database.",
        techStack: ["Laravel", "REST API", "MySQL"],
        image: "/pro1.jpg",
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
        description: "Mahasiswa Semester 4 yang berspesialisasi pada Pengembangan Web Full-Stack. Mahir dalam membangun aplikasi web secara utuh.",
        highlights: [
          "Mata Kuliah Relevan: Pengembangan Web, Rekayasa Perangkat Lunak, Sistem Basis Data, Jaringan Komputer, Struktur Data.",
          "Mampu menggabungkan antarmuka frontend yang responsif (Next.js, Tailwind CSS, Blade) dengan sistem backend tangguh (Laravel, Node.js, Django).",
          "Terampil dalam desain basis data relasional dengan MySQL, autentikasi berbasis peran (RBAC), dan arsitektur sistem modern."
        ],
        type: "education",
      },
      {
        id: "exp-002",
        role: "Sekolah Menengah Atas",
        company: "SMAIT Imam Syafi\'i",
        period: "2018 — 2021",
        description: "Menyelesaikan pendidikan sekolah menengah atas dengan fokus pada ilmu pengetahuan alam dan studi umum.",
        highlights: [],
        type: "education",
      },
      {
        id: "exp-003",
        role: "Sekolah Menengah Pertama",
        company: "SMPIT Imam Syafi\'i",
        period: "2015 — 2018",
        description: "Menyelesaikan pendidikan sekolah menengah pertama di sekolah Islam terpadu.",
        highlights: [],
        type: "education",
      },
    ] as Experience[],
  }
};
