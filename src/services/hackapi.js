import { apiRequest } from "./api.js";

export const submitHackathonForm = async (payload) => {
  try {
    await apiRequest("/hackathon/", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return true;
  } catch (error) {
    console.error("Hackathon API error:", error);
    return false;
  }
};
