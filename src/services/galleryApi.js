import { apiRequest } from "./api";

export const fetchGalleryImages = () => {
  return apiRequest("/gallery/");
};
