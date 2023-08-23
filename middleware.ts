import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AppConfig from "./config/app-config";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get(AppConfig.ACCESS_TOKEN_KEY);
  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/posts/write", "/profile", "/settings"],
};
