// middleware.ts
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  const url = req.nextUrl;
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    // Set your username and password here
    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASS
    ) {
      return NextResponse.next();
    }
  }

  const authHeader = `Basic ${btoa("username:password")}`;
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ["/", "/:id"], // Protect only the homepage, adjust as needed
};
