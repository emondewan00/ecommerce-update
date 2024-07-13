import { NextResponse } from "next/server";

export async function middleware(req) {
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

const ROOT_ROUTE = "/";
const PUBLIC_ROUTES = [""];
const PRIVET_ROUTES = [
  "/dashboard",
  "/cart",
  "/wishlist",
  "/login",
  "/register",
];
