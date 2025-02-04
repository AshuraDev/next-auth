import { UserRole } from "@prisma/client";
import * as z from "zod";


export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "New password is required!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "Password is required!",
    path: ["password"]
  })

export const LoginSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  code : z.optional(z.string())
});

export const ResetSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email({ message: "Invalid email" }),
});
export const NewPassworSchema = z.object({
  password: z.string().min(6, { message: "Minimum 06 characters is required" }),
});

///

export const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Minimum 06 characters is required" }),
});

// password: z
// .string()
// .min(8, { message: 'Be at least 8 characters long' })
// .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
// .regex(/[0-9]/, { message: 'Contain at least one number.' })
// .regex(/[^a-zA-Z0-9]/, {
//   message: 'Contain at least one special character.',
// })
// .trim(),
