import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import {
  SESSION_COOKIE,
  SESSION_TTL_MS,
  createSessionToken,
  signCookieToken,
  verifyCookieToken,
} from "@/lib/auth";

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  classId: string | null;
};

function parseCookieValue(raw: string | undefined): {
  token: string;
  signature: string;
} | null {
  if (!raw) return null;
  const idx = raw.lastIndexOf(".");
  if (idx < 1) return null;
  return { token: raw.slice(0, idx), signature: raw.slice(idx + 1) };
}

/** Returns the signed cookie value for a session token. */
export function buildSessionCookieValue(token: string): string {
  return `${token}.${signCookieToken(token)}`;
}

export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies();
    const parsed = parseCookieValue(cookieStore.get(SESSION_COOKIE)?.value);
    if (!parsed) return null;
    if (!verifyCookieToken(parsed.token, parsed.signature)) return null;

    const session = await db.session.findUnique({
      where: { token: parsed.token },
      include: { user: true },
    });
    if (!session) return null;
    if (session.expiresAt.getTime() < Date.now()) {
      await db.session.delete({ where: { id: session.id } }).catch(() => {});
      return null;
    }

    const u = session.user;
    return {
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role as SessionUser["role"],
      classId: u.classId,
    };
  } catch {
    return null;
  }
}

export async function requireUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) redirect("/lms/login");
  return user;
}

export async function requireRole(
  roles: SessionUser["role"][]
): Promise<SessionUser> {
  const user = await requireUser();
  if (!roles.includes(user.role)) redirect("/lms");
  return user;
}

export async function requireTeacherOrAdmin(): Promise<SessionUser> {
  return requireRole(["TEACHER", "ADMIN"]);
}

export async function createSessionForUser(
  userId: string
): Promise<string> {
  const token = createSessionToken();
  await db.session.create({
    data: {
      userId,
      token,
      expiresAt: new Date(Date.now() + SESSION_TTL_MS),
    },
  });
  return token;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const parsed = parseCookieValue(cookieStore.get(SESSION_COOKIE)?.value);
  if (parsed) {
    await db.session.deleteMany({ where: { token: parsed.token } }).catch(() => {});
  }
  cookieStore.delete(SESSION_COOKIE);
}

/** Role-based landing path helper used after login. */
export function landingPath(role: SessionUser["role"]): string {
  switch (role) {
    case "ADMIN":
    case "TEACHER":
      return "/lms/teacher";
    case "STUDENT":
      return "/lms/student";
    case "PARENT":
      return "/lms/parent";
  }
}
