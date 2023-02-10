// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;
//////////////////////
// import { PrismaClient } from '@prisma/client';

// let prisma= PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export default prisma;
/////////////
// import { PrismaClient } from '@prisma/client'

// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ['query'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
///////////
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

export default prisma;
/////////////////////////////////////////devEd 2023
// import {PrismaClient} from "@prisma/client"
// declare global {
//   namespace NodeJS {
//     interface Global { }
//   }
// }
// // add prisma to the NodeJS global type
// interface CustomNodeJsGlobal extends NodeJS.Global {
//   prisma: PrismaClient
// }
// // Prevent multiple instances of Prisma Client in development
// declare const global: CustomNodeJsGlobal
// const prisma = global.prisma || new PrismaClient()
// if (process.env.NODE_ENV === "development") global.prisma = prisma

// export default prisma
