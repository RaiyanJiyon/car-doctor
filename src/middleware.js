import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME =
  process.env.NODE_ENV === "production"
    ? "__Secure-next-auth.session-token"
    : "next-auth.session-token";

export const middleware = async (request) => {
  const token = (await cookies(request)).get(COOKIE_NAME);
  const pathname = request.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-bookings"],
};
