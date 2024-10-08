import { PrismaClient } from "@prisma/client/extension"

let prisma : PrismaClient

declare const globalThis : {
    prisma : PrismaClient
}

if(process.env.NODE_ENV === "production"){
    prisma = new PrismaClient()
}else {
    if (globalThis) {
        globalThis.prisma = new PrismaClient()
    }

    prisma = globalThis.prisma
}

export default prisma