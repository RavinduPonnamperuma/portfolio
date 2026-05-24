import type { PortfolioData } from "./portfolio-types";

export type { PortfolioData } from "./portfolio-types";

export function getAllSkills(data: PortfolioData): string[] {
  return data.skills.flatMap((cat) => cat.technologies);
}

export function buildSiteConfig(data: PortfolioData) {
  return {
    name: data.personal.fullName,
    shortName: data.personal.firstName,
    title: `${data.personal.fullName} | ${data.personal.jobTitle}`,
    description: data.summary,
    jobTitle: data.personal.jobTitle,
    employer: {
      name: data.experience[0]?.company ?? "",
      role: data.experience[0]?.role ?? "",
    },
    email: data.personal.email,
    phone: data.personal.phoneHref.replace("tel:", ""),
    location: data.personal.location,
    locale: "en_LK",
    language: "en",
    ogImage: data.personal.profileImage,
    ogImageAlt: `${data.personal.fullName} — ${data.personal.jobTitle}`,
    keywords: [
      data.personal.fullName,
      "Ravindu Ponnamperuma",
      "IT Support Engineer Sri Lanka",
      "IT Support Technician",
      "IT Coordinator",
      "System Administrator",
      "Helpdesk Support",
      "Microsoft 365 Admin",
      "ERP Administration",
      "Moodle LMS Admin",
      "Network Support",
      "Full-Stack Developer",
      "Angular Developer",
      "University of Moratuwa BIT",
      "SLITA",
      "Elpitiya",
      "Portfolio",
    ],
    social: {
      linkedin: data.personal.social.linkedin.url,
      github: data.personal.social.github.url,
    },
    knowsAbout: getAllSkills(data),
  };
}

export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return url.replace(/\/$/, "");
}
