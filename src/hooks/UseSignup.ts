import { useState } from "react";
import type { SignupSchema } from "@/schemas/SignupSchema";

export function useSignup() {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (values: SignupSchema) => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        return { success: false, error: "Signup failed" };
      }

      return { success: true };
    } catch (err) {
      return { success: false, error: "Network error" };
    } finally {
      setLoading(false);
    }
  };

  return { handleSignup, loading };
}
