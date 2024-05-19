const protectedRoutes = ["/dashboard", "/wishlist", "/cart"];
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export function middleware(req) {
  if (!req.cookies.get("authjs.session-token")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/wishlist/:path*", "/cart/:path*"],
};
