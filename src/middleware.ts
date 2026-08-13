import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "clearpath_session";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get(SESSION_COOKIE)?.value);

  if (pathname.startsWith("/lms") && pathname !== "/lms/login" && !hasSession) {
    const url = request.nextUrl.clone();
    url.pathname = "/lms/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/lms/:path*"],
};
