// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";
 
// export const { auth: middleware } = NextAuth(authConfig);
 
// //configure which paths the middleware should run on
 
// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/appointments/:path*"],
// };

import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth;

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/appointments/:path*"],
};
