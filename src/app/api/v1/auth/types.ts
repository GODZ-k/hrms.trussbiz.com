import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().email().min(3).trim(),
    password: z.string().min(8).trim()
});

export type LoginSchema = z.infer<typeof loginSchema>;


export const signupSchema = z.object({
    username: z.string().email().min(3).trim(),
    password: z.string().min(8).trim()
});

export type SignupSchema = z.infer<typeof signupSchema>;