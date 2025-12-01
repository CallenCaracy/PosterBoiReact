export function getApiUrl() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_VERSION = import.meta.env.VITE_API_VERSION;

  if (!BASE_URL || !API_VERSION) {
    throw new Error("Missing required environment variables");
  }

  return { BASE_URL, API_VERSION };
}
