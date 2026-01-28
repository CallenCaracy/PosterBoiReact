import { createContext } from "react";
import type IDecodedToken from "./IDecodedToken";

export default interface IAuthContextType {
  user: IDecodedToken | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  refresh: () => Promise<string | null>;
}

export const AuthContext = createContext<IAuthContextType | null>(null);