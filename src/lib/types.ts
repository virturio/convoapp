import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().describe("Email").email("Invalid Email Address"),
  password: z
    .string()
    .describe("Password")
    .min(8, "Password length must be at least 8 chars long"),
});
