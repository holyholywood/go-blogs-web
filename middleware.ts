import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AppConfig from "./config/app-config";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("go-blog-token");
  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/posts/write",
};
