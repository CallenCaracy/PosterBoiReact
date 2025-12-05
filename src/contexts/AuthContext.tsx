import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import type IAuthContextType from "@/interfaces/IAuthContextType";
import type IDecodedToken from "@/interfaces/IDecodedToken";
import type IAuthProviderProps from "@/interfaces/IProps";
import { getApiUrl } from "@/utils/env";

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IDecodedToken | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { BASE_URL, API_VERSION } = getApiUrl();

  useEffect(() => {
    refresh();
  }, []);

  const login = (accessToken: string) => {
    setToken(accessToken);
    setUser(jwtDecode<IDecodedToken>(accessToken));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };
  
  const refresh = async () => {
    try{
      const res = await fetch(`${BASE_URL}/api/v${API_VERSION}/Session/refresh`, {
        method: "POST",
        credentials: "include"
      });

      if(!res.ok) throw new Error("Refresh failed")

      const data = await res.json();
      setToken(data.accessToken)
      setUser(jwtDecode<IDecodedToken>(data.accessToken));
      return data.accessToken;
    }
    catch{
      logout();
      return null;
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};