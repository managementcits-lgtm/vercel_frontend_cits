import { apiRequest } from "./api.js";

export const getMousApi = () => {
  return apiRequest("/mous/");
};
