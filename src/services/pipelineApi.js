import { apiRequest } from "./api";

export const getProjects = () => {
  return apiRequest("/projects/");
};
