import { verifyToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const token = (await cookies()).get('token')?.value;

    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401});
    }

    const decoded = await verifyToken(token);

    const employee = await prisma.employee.findUnique({
        where: { id: decoded.id }
    })

    if (!employee) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401});
    }

    return NextResponse.json({ employee }, { status: 200});
}