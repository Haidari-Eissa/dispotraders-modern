import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // This middleware is temporarily disabled to restore single-language functionality.
  // Internationalization routing can be re-enabled here when ready.
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};