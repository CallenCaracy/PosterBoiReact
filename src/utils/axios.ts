import axios from "axios";
import { getApiUrl } from "./env";

const { BASE_URL, API_VERSION } = getApiUrl();

export const api = axios.create({
  baseURL: `${BASE_URL}/api/v${API_VERSION}`,
  withCredentials: true,
});
