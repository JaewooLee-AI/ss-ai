import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;

  // Check if trying to access /admin routes
  if (nextUrl.pathname.startsWith("/admin")) {
    // If not logged in, redirect to login page gracefully
    if (!isLoggedIn) {
      const redirectUrl = new URL("/login", nextUrl);
      redirectUrl.searchParams.set("callbackUrl", nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }
    
    // Check role-based access control
    if (role !== "super_admin" && role !== "admin") {
      // Redirect unauthorized users to home or an unauthorized page
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  return NextResponse.next();
});

// See https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
