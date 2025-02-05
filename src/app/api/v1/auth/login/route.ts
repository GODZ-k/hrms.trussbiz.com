import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { loginSchema, LoginSchema } from "../types";
import { generateToken } from "@/lib/auth";
import { cookies } from "next/headers";


export async function POST(req: NextRequest) {
    const inputData:LoginSchema = await req.json();

    const payload = loginSchema.safeParse(inputData)

    if (!payload.success) {
        return NextResponse.json({ message: "Invalid credentials", errors: payload.error.errors[0].message }, { status: 400});
    }

    const { username, password } = payload.data;

    const employee = await prisma.employee.findFirst({
        where: {
            username: username,
        }
    })

    if (!employee) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401});
    }

    if (employee.password !== password) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401});
    }

    const token = await generateToken(employee);

    (await cookies()).set('token', token, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 30 });

    return NextResponse.json({ message: "Login successful" }, { status: 200});
}