import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [, password] = Buffer.from(auth, "base64").toString().split(":");

    if (password === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Password required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Enter Password"',
    },
  });
}

export const config = {
  matcher: "/(.*)",
};
