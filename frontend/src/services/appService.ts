import api from "./api";

export const appService = {
  getHello: async (): Promise<string> => {
    const response = await api.get("/");
    return response.data;
  },
};
