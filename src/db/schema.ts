import { integer, text, boolean, pgTable, date, timestamp, uuid, varchar, pgEnum } from "drizzle-orm/pg-core";

export const employee = pgTable("employee", {
    id: uuid("id").primaryKey().defaultRandom(),
    isActive: boolean("isActive").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const department = pgTable("department", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    isActive: boolean("isActive").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const position = pgTable("position", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name").notNull(),
    isActive: boolean("isActive").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const departmentPosition = pgTable("department_position", {
    id: uuid("id").primaryKey().defaultRandom(),
    departmentId: uuid("department_id").references(() => department.id).notNull(),
    positionId: uuid("position_id").references(() => position.id).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})


export const Gender = pgEnum("gender", ["male", "female", "other"])
type  Employee = {
    id: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}
export const employeePersonalDeatils: TableConfig<Employee> = pgTable("employee_personal_details", {
    id: uuid("id").primaryKey().defaultRandom(),
    employeeId: uuid("employee_id").references(()=>employee.id),
    firstName: varchar("first_name",{ length:255 }).notNull(),
    middleName: varchar("middle_name",{ length:255 }),
    lastName: varchar("last_name",{ length:255 }),
    gender: Gender("gender").notNull(),
    fatherName: varchar("father_name",{ length:255 }).notNull(),
    motherName: varchar("mother_name",{ length:255 }).notNull(),
    bloodGroup: varchar("blood_group",{ length:5 }),
    avatar: text("avatar").notNull(),
    dateOfBirth: date("date_of_birth").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const employeeDetails = pgTable("employee_details", {
    id: uuid("id").primaryKey().defaultRandom(),
    employeeId: uuid("employee_id").references(()=>employee.id),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    departmentId: uuid("department_id").references(()=>department.id),
    positionId: uuid("position_id").references(()=>position.id),
    salary: integer("salary").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})



export const employeeLeave = pgTable("employee_leave",{
    id:uuid("id").primaryKey().defaultRandom(),
    employeeId:uuid("employee_id").references(()=>employee.id),
    leaveType:text("leave_type").notNull(),
    startDate:date("start_date").notNull(),
    endDate:date("end_date").notNull(),
})

export const employeeAttendance = pgTable("employee_attendance",{
    id:uuid("id").primaryKey().defaultRandom(),
    employeeId:uuid("employee_id").references(()=>employee.id),
    date:date("date").notNull(),
    status:text("status").notNull(),
})

