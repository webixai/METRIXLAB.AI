import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|sign-in|sign-up|api/public).*)",
  ],
};
