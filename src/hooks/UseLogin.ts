import { useState } from "react";
import type { LoginSchema } from "@/schemas/LoginSchema";
import { useAuth } from "@/contexts/AuthContext";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_VERSION = import.meta.env.VITE_API_VERSION;
  const loginUrlEndpoint = `${BASE_URL}/api/v${API_VERSION}/Auth/login`;

  const handleLogin = async (values: LoginSchema) => {
    try {
      setLoading(true);

      const res = await fetch(loginUrlEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        return { success: false, error: "Login failed" };
      }
      const data = await res.json();
      const accessToken = data.accessToken;
      login(accessToken);

      return { success: true };
    } catch (err) {
      return { success: false, error: "Network error" };
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
}