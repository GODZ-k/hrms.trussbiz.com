import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    const token = (await cookies()).get('token')?.value;

    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401});
    }

    (await cookies()).delete('token');

    return NextResponse.json({ message: "Logged out successfully" }, { status: 200});
}