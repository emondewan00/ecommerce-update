import { NextResponse } from "next/server";
export async function middleware(req) {
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/wishlist/:path*", "/cart/:path*"],
};
