import { NextResponse } from "next/server";
import { getPortfolioData } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(getPortfolioData());
}
