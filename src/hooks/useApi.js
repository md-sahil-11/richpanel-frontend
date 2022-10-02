import axios from "axios";
export default function useApi() {
  const baseURL = "http://localhost/4000";

  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: localStorage.getItem("access_token")
        ? "Token " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json"
    },
  });

  return instance
}