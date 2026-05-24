import { cookies } from "next/headers";
import { ADMIN_COOKIE, verifySessionToken } from "./admin-auth";

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return verifySessionToken(token);
}
