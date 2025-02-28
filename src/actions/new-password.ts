"use server";

import * as z from "zod";
import { NewPassworSchema } from "@/schema";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const newPassword = async (
  values: z.infer<typeof NewPassworSchema>,
  token: string | null
) => {
  if (!token) return { error: "Missing Token!" };

  const validateFields = NewPassworSchema.safeParse(values);

  if (!validateFields.success) return { error: "Invalid Fields!" };

  const { password } = validateFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) return { error: "Invalid Token!" };

  const hasExpired = new Date(existingToken.expire) < new Date();
  if (hasExpired) return { error: "Token has expired!" };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) return { error: "Email does not exist!" };

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });
  await db.passwordResetToken.delete({ where: { id: existingToken.id } });

  return { success: "Password updated!" };
};
