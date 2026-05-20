/**
 * Single source of truth for portfolio content, SEO, and structured data.
 * Update this file to change site copy across all pages.
 */

export const portfolioData = {
  personal: {
    fullName: "Ravindu Ponnamperuma",
    displayName: "Ravindu Ponnamperuma",
    firstName: "Ravindu",
    lastName: "Ponnamperuma",
    jobTitle: "IT Coordinator & System Support",
    phone: "+94 764 247 208",
    phoneHref: "tel:+94764247208",
    email: "Ravindu.ponnamperuma@gmail.com",
    location: {
      full: "Egodakanda, Pituwala North, Elpitiya, Sri Lanka",
      short: "Maharagama, Sri Lanka",
      locality: "Elpitiya",
      country: "Sri Lanka",
      countryCode: "LK",
    },
    social: {
      linkedin: {
        label: "LinkedIn — Ravindu Ponnamperuma",
        url: "https://linkedin.com/in/ravindu-ponnamperuma",
      },
      github: {
        label: "GitHub — Ravindu Ponnamperuma",
        url: "https://github.com/RavinduPonnamperuma",
      },
    },
    profileImage: "/images/profile.png",
    logoInitials: "RP",
  },

  summary:
    "BIT graduate from the University of Moratuwa, currently awaiting graduation. Working as IT Coordinator at the Sri Lanka Institute of Textile & Apparel (SLITA). Previously worked as IT Support at Pulse Academy (Pvt) and completed one year as a Trainee Software Developer at Maxim Impressions Lanka (Pvt) Ltd. Seeking a challenging and rewarding role to utilize and enhance knowledge, skills, and professional experience.",

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "6+", label: "Projects" },
    { value: "30+", label: "Technologies" },
  ],

  experience: [
    {
      period: "January 2025 – Present",
      role: "IT Coordinator",
      company: "Sri Lanka Institute of Textile and Apparel (SLITA)",
      description:
        "Leading IT operations across web platforms, enterprise systems, and digital learning infrastructure.",
      responsibilities: [
        "Website administration — slita.lk",
        "Customer Management System Administration",
        "ERP System Administration",
        "Learning Management System administration — lms.slita",
        "Microsoft 365 Package & Data Management",
        "IT-related Projects coordination",
        "Social Media Marketing Implementation & Coordination",
      ],
    },
    {
      period: "2025 – 2026",
      role: "IT Support",
      company: "Pulse Academy of International Health Professionals (Pvt) Ltd.",
      description:
        "Provided technical support and digital media services for academy operations.",
      responsibilities: [
        "Hardware management",
        "Software management",
        "Video Editing",
        "Videography",
        "Photography",
        "Social Media Handling",
      ],
    },
    {
      period: "2023 – 2024",
      role: "Trainee Software Developer",
      company: "Maxim Impressions Lanka (Pvt) Ltd.",
      description:
        "One-year traineeship in Enterprise Resource Planning (ERP), successfully completed. Built full-stack systems for visitor and HR management.",
      responsibilities: [
        "Visitor Management System",
        "Human Resource Management System",
      ],
      techStack: [
        "Angular",
        "TypeScript",
        "Tailwind SCSS",
        "NestJS",
        "MongoDB",
        "MySQL",
        "Postman",
      ],
    },
  ],

  skills: [
    {
      category: "Languages",
      technologies: [
        "HTML",
        "Java",
        "C#",
        "Android",
        "PHP",
        "JavaScript",
        "TypeScript",
        "AJAX",
      ],
      highlights: ["TypeScript", "JavaScript", "Java", "PHP"],
    },
    {
      category: "Frameworks",
      technologies: ["Angular", "NestJS", "NodeJS", "Flowbite"],
      highlights: ["Angular", "NestJS", "NodeJS"],
    },
    {
      category: "Styling",
      technologies: ["Tailwind CSS", "Bootstrap", "SCSS", "CSS"],
      highlights: ["Tailwind CSS", "SCSS"],
    },
    {
      category: "Databases",
      technologies: ["MySQL", "MongoDB"],
      highlights: ["MySQL", "MongoDB"],
    },
    {
      category: "DB & Server Tools",
      technologies: [
        "SQL Server Management Studio",
        "XAMPP",
        "WAMP",
      ],
      highlights: ["SQL Server Management Studio"],
    },
    {
      category: "IDEs",
      technologies: [
        "Visual Studio",
        "NetBeans",
        "IntelliJ",
        "Visual Studio Code",
        "Android Studio",
        "Sublime Text",
      ],
      highlights: ["Visual Studio Code"],
    },
    {
      category: "Operating Systems",
      technologies: ["Windows", "Linux", "Mac"],
      highlights: ["Linux"],
    },
    {
      category: "Other Tools",
      technologies: [
        "Moodle LMS Admin",
        "Node",
        "Git",
        "Docker",
        "Postman",
        "Bitbucket",
        "Microsoft Office 365",
      ],
      highlights: ["Git", "Docker", "Postman"],
    },
  ],

  projects: [
    {
      icon: "monitor" as const,
      name: "IoT-Based Monitoring & Controlling System for Pollytunnel",
      description:
        "IoT-enabled monitoring and control platform for polytunnel environments with real-time data visualization.",
      tech: ["Angular", "NestJS", "TypeScript"],
    },
    {
      icon: "database" as const,
      name: "Kitchen Stock Management System",
      description:
        "Desktop application for tracking kitchen inventory, stock levels, and supply management.",
      tech: ["C#", "SQL Server Management Studio"],
    },
    {
      icon: "globe" as const,
      name: "Readify Online Book Store",
      description:
        "E-commerce style online book store with catalog browsing and order management features.",
      tech: ["HTML", "CSS", "Bootstrap", "PHP", "PHPMyAdmin"],
    },
    {
      icon: "server" as const,
      name: "Angular Routing & TypeORM Database Connect",
      description:
        "Full-stack application demonstrating Angular routing patterns with TypeORM database integration.",
      tech: ["Angular", "NestJS", "TypeScript"],
    },
    {
      icon: "globe" as const,
      name: "Visitor Management System",
      description:
        "Enterprise visitor management system developed during internship at Maxim Impressions Lanka.",
      tech: [
        "Angular",
        "TypeScript",
        "Tailwind SCSS",
        "NestJS",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      icon: "settings" as const,
      name: "Human Resource Management System",
      description:
        "HR management platform for employee records and workflows, built during internship training.",
      tech: [
        "Angular",
        "TypeScript",
        "Tailwind SCSS",
        "NestJS",
        "MongoDB",
        "MySQL",
      ],
    },
  ],

  education: [
    {
      type: "degree" as const,
      title: "Bachelor of Information Technology",
      institution: "University of Moratuwa",
      year: "2022 – 2025",
      description: "Successfully completed, currently awaiting graduation",
    },
  ],

  certificates: [
    {
      type: "cert" as const,
      title: "Front-end Web Development",
      institution: "University of Moratuwa — Open Learning Platform",
      year: "2023",
      description: "Open Learning Platform certification",
    },
    {
      type: "cert" as const,
      title: "Web Design for Beginners",
      institution: "University of Moratuwa — Open Learning Platform",
      year: "2023",
      description: "Open Learning Platform certification",
    },
    {
      type: "cert" as const,
      title: "Foundation of Project Management",
      institution: "University of Moratuwa — Open Learning Platform",
      year: "2023",
      description: "Open Learning Platform certification",
    },
    {
      type: "cert" as const,
      title: "Python for Beginners",
      institution: "University of Moratuwa — Open Learning Platform",
      year: "2023",
      description: "Open Learning Platform certification",
    },
    {
      type: "cert" as const,
      title: "Certificate Course in English Language",
      institution: "British Way English Academy, Galle",
      year: "2018",
      description: "English language proficiency certification",
    },
  ],
} as const;

/** Flat list of all skills for SEO / JSON-LD */
export function getAllSkills(): string[] {
  return portfolioData.skills.flatMap((cat) => cat.technologies);
}

/** SEO-specific config derived from portfolio data */
export const siteConfig = {
  name: portfolioData.personal.fullName,
  shortName: portfolioData.personal.firstName,
  title: `${portfolioData.personal.fullName} | ${portfolioData.personal.jobTitle}`,
  description: portfolioData.summary,
  jobTitle: portfolioData.personal.jobTitle,
  employer: {
    name: portfolioData.experience[0].company,
    role: portfolioData.experience[0].role,
  },
  email: portfolioData.personal.email,
  phone: portfolioData.personal.phoneHref.replace("tel:", ""),
  location: portfolioData.personal.location,
  locale: "en_LK",
  language: "en",
  ogImage: portfolioData.personal.profileImage,
  ogImageAlt: `${portfolioData.personal.fullName} — ${portfolioData.personal.jobTitle}`,
  keywords: [
    portfolioData.personal.fullName,
    "Ravindu Ponnamperuma",
    "Software Developer Sri Lanka",
    "IT Coordinator",
    "Full-Stack Developer",
    "Angular Developer",
    "NestJS Developer",
    "TypeScript",
    "University of Moratuwa BIT",
    "SLITA",
    "Elpitiya",
    "Portfolio",
  ],
  social: {
    linkedin: portfolioData.personal.social.linkedin.url,
    github: portfolioData.personal.social.github.url,
  },
  knowsAbout: getAllSkills(),
};

export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return url.replace(/\/$/, "");
}
