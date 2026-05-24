export type ProjectIcon =
  | "globe"
  | "monitor"
  | "server"
  | "database"
  | "settings";

export interface PortfolioPersonal {
  fullName: string;
  displayName: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  phoneHref: string;
  email: string;
  location: {
    full: string;
    short: string;
    locality: string;
    country: string;
    countryCode: string;
  };
  social: {
    linkedin: { label: string; url: string };
    github: { label: string; url: string };
  };
  profileImage: string;
  logoInitials: string;
}

export interface PortfolioStat {
  value: string;
  label: string;
}

export interface PortfolioExperience {
  period: string;
  role: string;
  company: string;
  description: string;
  responsibilities: string[];
  techStack?: string[];
}

export interface PortfolioSkillCategory {
  category: string;
  technologies: string[];
  highlights: string[];
}

export interface PortfolioProject {
  icon: ProjectIcon;
  repo: string;
  name: string;
  repoUrl: string;
  description: string;
  tech: string[];
  updatedAt: string;
}

export interface PortfolioEducation {
  type: "degree";
  title: string;
  institution: string;
  year: string;
  description: string;
}

export interface PortfolioCertificate {
  type: "cert";
  title: string;
  institution: string;
  year: string;
  description: string;
}

export interface PortfolioData {
  personal: PortfolioPersonal;
  summary: string;
  stats: PortfolioStat[];
  experience: PortfolioExperience[];
  skills: PortfolioSkillCategory[];
  githubRepositoriesUrl: string;
  featuredProjectCount: number;
  projects: PortfolioProject[];
  education: PortfolioEducation[];
  certificates: PortfolioCertificate[];
}
