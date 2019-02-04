import {
    Prisma
} from "prisma-binding";

const prisma = new Prisma({
    typeDefs = 'src/generated/prisma.grahpql',
    endpoint = 'locahost:4466'
})