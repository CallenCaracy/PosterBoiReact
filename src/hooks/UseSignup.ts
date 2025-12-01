import { useState } from "react";
import type { SignupSchema } from "@/schemas/SignupSchema";
import { getApiUrl } from "@/utils/env";

export function useSignup() {
  const [loading, setLoading] = useState(false);

  const { BASE_URL, API_VERSION } = getApiUrl();

  const lsignupUrlEndpoint = `${BASE_URL}/api/v${API_VERSION}/Auth/register`;

  const handleSignup = async (values: SignupSchema) => {
    try {
      setLoading(true);

      const res = await fetch(lsignupUrlEndpoint, {
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
