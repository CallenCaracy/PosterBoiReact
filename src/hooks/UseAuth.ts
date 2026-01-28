import { useContext } from "react";
import { AuthContext } from "@/interfaces/IAuthContextType";
import type IAuthContextType from "@/interfaces/IAuthContextType";

export const useAuth = (): IAuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
