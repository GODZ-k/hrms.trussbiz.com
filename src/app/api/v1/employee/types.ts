import { z } from "zod";

export const genderSchema = z.enum(["MALE", "FEMALE", "OTHER"])

export const employeePersonalDetailsSchema = z.object({
    firstName: z.string().trim().min(1),
    middleName: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    gender: genderSchema,
    fatherName: z.string().trim().optional(),
    motherName: z.string().trim().optional(),
    bloodGroup: z.string().trim().optional(),
    avatar: z.string().optional(),
    dateOfBirth: z.string().trim().min(1)
})

export type EmployeePersonalDetails = z.infer<typeof employeePersonalDetailsSchema>;
