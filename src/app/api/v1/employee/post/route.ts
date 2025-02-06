import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { EmployeePersonalDetails, employeePersonalDetailsSchema } from "../types";

export async function POST(req: NextRequest) {
    const inputData:EmployeePersonalDetails = await req.json();

    const payload = employeePersonalDetailsSchema.parse(inputData);

    if(!payload) {
        return NextResponse.json({ error: "Invalid input data" , success: false }, { status: 400 });
    }


   
}