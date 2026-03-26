import { NextResponse } from "next/server";

export function proxy(request) {
  console.log("Middleware executed for:", request.url);
  return NextResponse.next();
}

/**
 * The `config` export allows you to specify which paths the middleware should run on. In this case, it will only run for paths that start with `/news`. You can adjust this pattern to match your specific needs.
 */
export const config = {
  match: "/news",
};
