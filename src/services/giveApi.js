import { apiRequest } from "./api";

// Base API call
export const fetchGiveBackData = () => {
  return apiRequest("/giveback/");
};

// Filtered helpers
export const fetchWorkshops = async () => {
  const data = await fetchGiveBackData();
  return data.filter(item => item.item_type === "workshop");
};

export const fetchGallery = async () => {
  const data = await fetchGiveBackData();
  return data.filter(item => item.item_type === "gallery");
};
