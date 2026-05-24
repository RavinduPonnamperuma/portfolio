import fs from "fs";
import path from "path";
import { defaultPortfolioData } from "./portfolio-defaults";
import type { PortfolioData } from "./portfolio-types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_PATH = path.join(DATA_DIR, "portfolio.json");

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_PATH)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(
      DATA_PATH,
      JSON.stringify(defaultPortfolioData, null, 2),
      "utf-8",
    );
  }
}

export function getPortfolioData(): PortfolioData {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw) as PortfolioData;
  } catch {
    return structuredClone(defaultPortfolioData);
  }
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to write portfolio data";
    throw new Error(
      `Cannot save portfolio data (${message}). On serverless hosts like Vercel, use a VPS or commit changes to data/portfolio.json locally.`,
    );
  }
}
