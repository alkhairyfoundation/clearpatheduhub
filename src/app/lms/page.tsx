import { redirect } from "next/navigation";
import { getSessionUser, landingPath } from "@/lib/session";

export default async function LmsIndexPage() {
  const user = await getSessionUser();
  redirect(user ? landingPath(user.role) : "/lms/login");
}
