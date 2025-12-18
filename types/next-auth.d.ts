// import type { Role } from "@/lib/generated/prisma";
// import type { DefaultSession, User as DefaultUser } from "next-auth";
 
// declare module "next-auth" {
//   /**
//    * Extends the built-in session.user object to include `id` and `role`.
//    */
//   export interface Session {
//     user: {
//       id: string;
//       role: Role;
//     } & DefaultSession["user"]; // Keep the default properties
//   }
//   export interface User extends DefaultUser {
//     role: Role;
//   }
// }



import { DefaultSession } from "next-auth";
import { Role } from "@/lib/generated/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role; // ✅ OPTIONAL
    } & DefaultSession["user"];
  }

  interface User {
    role: Role; // ✅ OPTIONAL
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: Role; // ✅ MUST be optional
  }
}
