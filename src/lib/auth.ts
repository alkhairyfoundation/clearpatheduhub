import { randomBytes, scrypt as scryptCb, timingSafeEqual, createHmac } from "crypto";
import { promisify } from "util";

const scrypt = promisify(scryptCb);

export const SESSION_COOKIE = "clearpath_session";
export const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  return `${salt}:${derived.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string
): Promise<boolean> {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const derived = (await scrypt(password, salt, 64)) as Buffer;
  const expected = Buffer.from(hash, "hex");
  if (derived.length !== expected.length) return false;
  return timingSafeEqual(derived, expected);
}

export function createSessionToken(): string {
  return randomBytes(32).toString("hex");
}

function getSecret(): string {
  const secret =
    process.env.SESSION_SECRET ?? "clearpath-lms-dev-secret-change-me";
  if (!process.env.SESSION_SECRET && process.env.NODE_ENV === "production") {
    console.warn(
      "[lms] SESSION_SECRET is not set in production. Please set a strong secret."
    );
  }
  return secret;
}

/** Signs an arbitrary small payload so forged cookies cannot pass checks. */
export function signCookieToken(token: string): string {
  return createHmac("sha256", getSecret()).update(token).digest("hex");
}

export function verifyCookieToken(token: string, signature: string): boolean {
  const expected = createHmac("sha256", getSecret())
    .update(token)
    .digest("hex");
  try {
    return timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected)
    );
  } catch {
    return false;
  }
}
