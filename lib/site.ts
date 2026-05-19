/** Central site config — used by metadata, sitemap, robots, and JSON-LD */

export const siteConfig = {
  name: "Ravindu Damith Ponnamperuma",
  shortName: "Ravindu Damith",
  title: "Ravindu Damith Ponnamperuma | IT Coordinator & Software Developer",
  description:
    "Portfolio of Ravindu Damith Ponnamperuma — IT Coordinator & Software Developer specializing in Angular, NestJS, TypeScript, and full-stack web development. Based in Elpitiya, Sri Lanka.",
  jobTitle: "IT Coordinator & Software Developer",
  employer: {
    name: "MAS Intimates (Pvt) Ltd",
    role: "IT Coordinator & Software Developer",
  },
  email: "Ravindu.ponnamperuma@gmail.com",
  phone: "+94764247208",
  location: {
    locality: "Elpitiya",
    country: "Sri Lanka",
    countryCode: "LK",
  },
  locale: "en_LK",
  language: "en",
  ogImage: "/images/profile.jpg",
  ogImageAlt:
    "Ravindu Damith Ponnamperuma — IT Coordinator and Software Developer",
  keywords: [
    "Ravindu Damith Ponnamperuma",
    "Ravindu Ponnamperuma",
    "Software Developer Sri Lanka",
    "IT Coordinator",
    "Full-Stack Developer",
    "Angular Developer",
    "NestJS Developer",
    "TypeScript",
    "Web Developer Elpitiya",
    "MAS Intimates",
    "Portfolio",
  ],
  social: {
    linkedin: "https://linkedin.com/in/ravindu-ponnamperuma",
    github: "https://github.com/ravindu-ponnamperuma",
  },
  knowsAbout: [
    "Angular",
    "NestJS",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "MySQL",
    "Docker",
    "REST APIs",
    "Microservices",
    "Full-Stack Development",
    "IT Infrastructure",
  ],
} as const;

/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://ravindu.dev) */
export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return url.replace(/\/$/, "");
}
