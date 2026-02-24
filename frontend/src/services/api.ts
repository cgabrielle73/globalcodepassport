import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

if (!API_URL) {
  console.warn(
    "Atenção: VITE_API_URL não está definida! Verifique seu arquivo .env ou o painel do Render.",
  );
}

export default api;
