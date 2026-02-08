import { apiRequest } from "./api";

export const sendCpuInquiry = (data) => {
  return apiRequest("/inquiry/", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
