import { Employee } from "@prisma/client";
import jwt from "jsonwebtoken";

type JwtPayload = {
    id: string;
    role: string;
}

async function generateToken(employee: Employee) {
    const token = jwt.sign({ id: employee.id, role: employee.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token;
}

async function verifyToken(token: string) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded as JwtPayload;
}

export { generateToken, verifyToken };