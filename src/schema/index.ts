import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

///

export const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Minimum 06 characters is required" }),
});
