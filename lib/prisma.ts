import pkg from '@prisma/client';
const { PrismaClient } = pkg as any;

declare global {
  // eslint-disable-next-line no-var
  var prisma: any | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
