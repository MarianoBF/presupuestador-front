import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((req) => {
  let token = sessionStorage.getItem("pre_ejisao") || "";
  req.headers.common["x-access-token"] = token;
  return req;
});

http.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = "/";
    }
  }
);

export default http;
