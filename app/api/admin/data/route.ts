import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-session";
import { getPortfolioData, savePortfolioData } from "@/lib/portfolio-store";
import type { PortfolioData } from "@/lib/portfolio-types";

export const dynamic = "force-dynamic";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;
  return NextResponse.json(getPortfolioData());
}

export async function PUT(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const body = (await request.json()) as PortfolioData;
    savePortfolioData(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save portfolio data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
