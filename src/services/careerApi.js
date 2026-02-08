import { apiRequest } from "./api";

export const createApplication = (formData) =>
  apiRequest("/apply/", {
    method: "POST",
    body: formData,
  });

export const getApplications = () =>
  apiRequest("/apply/", { method: "GET" });

export const getJobs = () =>
  apiRequest("/jobs/", { method: "GET" });