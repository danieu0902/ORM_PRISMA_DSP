import { PrismaClient } from "@prisma/client";
//creamos objeto prisma para interactuar con la BBDD
const prisma = global.prisma || new PrismaClient();

if( process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;