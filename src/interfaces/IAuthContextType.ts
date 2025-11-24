import type IDecodedToken from "./IDecodedToken";

export default interface IAuthContextType {
  user: IDecodedToken | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}