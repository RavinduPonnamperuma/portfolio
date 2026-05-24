import { getPortfolioData } from "./portfolio-store";
import { buildSiteConfig } from "./portfolio-data";

export { buildSiteConfig, getSiteUrl, getAllSkills } from "./portfolio-data";
export { getPortfolioData } from "./portfolio-store";
export type { PortfolioData } from "./portfolio-types";

export const siteConfig = buildSiteConfig(getPortfolioData());
