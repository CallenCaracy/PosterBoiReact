import { useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "@/interfaces/IAuthContextType";
import { getApiUrl } from "@/utils/env";
import type IDecodedToken from "@/interfaces/IDecodedToken";
import type IAuthProviderProps from "@/interfaces/IProps";

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IDecodedToken | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { BASE_URL, API_VERSION } = getApiUrl();

  const login = useCallback((accessToken: string) => {
    setToken(accessToken);
    setUser(jwtDecode<IDecodedToken>(accessToken));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, []);

  const refresh = useCallback(async (): Promise<string | null> => {
    try {
      const res = await fetch(
        `${BASE_URL}/api/v${API_VERSION}/Session/refresh`,
        { method: "POST", credentials: "include" }
      );

      if (!res.ok) throw new Error("Refresh failed");

      const data = await res.json();
      setToken(data.accessToken);
      setUser(jwtDecode<IDecodedToken>(data.accessToken));
      return data.accessToken;
    } catch {
      logout();
      return null;
    }
  }, [BASE_URL, API_VERSION, logout]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
