import { useState } from "react";
import type { LoginSchema } from "@/schemas/LoginSchema";

export function useLogin() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: LoginSchema) => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        return { success: false, error: "Login failed" };
      }

      return { success: true };
    } catch (err) {
      return { success: false, error: "Network error" };
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
}
