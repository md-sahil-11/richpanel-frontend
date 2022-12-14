import axios from "axios";
export default function useApi() {
  const baseURL = "https://sahil11.pythonanywhere.com/";

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

export function isAuthenticated () {
  if (localStorage.getItem("access_token")) return true
  return false
}
