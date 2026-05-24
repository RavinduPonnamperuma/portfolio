export const ADMIN_COOKIE = "portfolio_admin_session";

const SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7; // 7 days

function getSessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    "4eb749c6bb1f779f55bf96412be08a8ac1696a26898dbc110ad19d58bc257f74"
  );
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD?.trim() || "200010";
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export function verifyAdminPassword(password: string): boolean {
  const expected = getAdminPassword();
  return timingSafeEqual(password, expected);
}

async function hmacHex(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(): Promise<string> {
  const expiresAt = Date.now() + SESSION_MAX_AGE_SEC * 1000;
  const payload = String(expiresAt);
  const signature = await hmacHex(payload, getSessionSecret());
  return `${payload}.${signature}`;
}

export async function verifySessionToken(
  token: string | undefined,
): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = await hmacHex(payload, getSessionSecret());
  if (!timingSafeEqual(signature, expected)) {
    return false;
  }

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  return true;
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SEC,
  };
}
