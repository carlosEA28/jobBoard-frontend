import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().nonempty("The field First Name cannot be empty"),
  lastName: z.string().nonempty("The field Last Name cannot be empty"),
  email: z
    .string()
    .email("Insert a valid email")
    .nonempty("The field Email cannot be empty"),
  password: z.string().nonempty("The field Password cannot be empty"),
});

export const signInSchema = z.object({
  email: z
    .string()
    .email("Insert a valid email")
    .nonempty("The field Email cannot be empty"),
  password: z.string().nonempty("The field Password cannot be empty"),
});
