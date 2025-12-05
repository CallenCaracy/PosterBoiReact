import * as z from "zod";

export const signupSchema = z.object({
    name: z.string().min(3, "Username must be at least 3 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(6, "Should match and be at least 6 charactes"),
}).refine((data: { password: any; confirmPassword: any; }) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SignupSchema = z.infer<typeof signupSchema>;