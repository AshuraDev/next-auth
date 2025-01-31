"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  //validation
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  //Extract values
  const { name, email, password } = validatedFields.data;

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Verify if user already exist in database
  const existingUser = await getUserByEmail(email);
  //Send error message if user alredy exist
  if (existingUser) return { error: "Email already in use!" };

  //register user if user doesn't
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  return { success: "Confirmation email sent!" };
};
