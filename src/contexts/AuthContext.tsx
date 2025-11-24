import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import type IAuthContextType from "@/interfaces/IAuthContextType";
import type IDecodedToken from "@/interfaces/IDecodedToken";
import type IAuthProviderProps from "@/interfaces/IAuthProviderProps";

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IDecodedToken | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      try {
        const decoded = jwtDecode<IDecodedToken>(storedToken);
        setToken(storedToken);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token", err);
        setToken(null);
        setUser(null);
      }
    }
  }, []);

  const login = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    setToken(accessToken);
    const decoded = jwtDecode<IDecodedToken>(accessToken);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
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