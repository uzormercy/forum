import { z } from "zod";

export const createUserSchema = z.object({
  firstname: z
    .string({ required_error: "Firstname is mandatory" })
    .min(3)
    .max(50),
  lastname: z
    .string({ required_error: "Lastname is mandatory" })
    .min(3)
    .max(50),
  username: z
    .string({ required_error: "Username is mandatory" })
    .min(5)
    .max(50),
  email: z.string({ required_error: "Email address is mandatory" }).email(),
  password: z
    .string({ required_error: "Password is mandatory" })
    .min(8)
    .max(50),
});
