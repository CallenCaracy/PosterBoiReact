import { jwtDecode } from "jwt-decode";
import type IDecodedToken from "@/interfaces/IDecodedToken";

export default function jwtUtil(accessToken: string) {
    const decoded = jwtDecode<IDecodedToken>(accessToken);
    return decoded.exp * 1000 < Date.now();
}