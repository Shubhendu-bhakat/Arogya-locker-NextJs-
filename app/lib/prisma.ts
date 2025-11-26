import { PrismaClient } from "@prisma/client";

declare global {
  // Prevent multiple instances in development
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// import { PrismaClient } from "@prisma/client";

// declare global {
//   // allow global `var` declarations
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined;
// }

// export const prisma =
//   globalThis.prisma ||
//   new PrismaClient({
//     log: ["query", "error", "warn"], // optional: helpful during dev
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = prisma;
// }
