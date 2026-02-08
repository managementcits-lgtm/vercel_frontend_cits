import { apiRequest } from "./api";

export const sendContactMessage = (data) => {
  return apiRequest("/contact/", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
