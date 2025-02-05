import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    // const employee = await prisma.employee.findFirst({
    //     where: {
    //         email: email,
    //         password: password
    //     }
    // })

    return NextResponse.json({ email, password }, { status: 200});
}