
import { NextRequest, NextResponse } from "next/server";
import { signupSchema, SignupSchema } from "../types";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const inputData:SignupSchema = await req.json();

    const payload = signupSchema.safeParse(inputData)

    if (!payload.success) {
        return NextResponse.json({ message: "Invalid credentials", errors: payload.error.errors[0].message }, { status: 400});
    }

    const { username, password } = payload.data;

    const employee = await prisma.employee.findUnique({
        where: { username: username }
    })

    if (employee) {
        return NextResponse.json({ message: "Employee already exists" }, { status: 400});
    }

    await prisma.employee.create({
        data: { username, password }
    })

    return NextResponse.json({ message: "Employee created successfully" }, { status: 201});
}