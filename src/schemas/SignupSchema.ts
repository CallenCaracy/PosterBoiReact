import * as z from "zod";

export const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(6),
}).refine((data: { password: any; confirmPassword: any; }) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SignupSchema = z.infer<typeof signupSchema>;