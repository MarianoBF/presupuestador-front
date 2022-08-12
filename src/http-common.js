import axios from "axios";

let token = sessionStorage.getItem("pre_ejisao") || "";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "Content-type": "application/json",
    "x-access-token": "" + token,
  },
});


  http.interceptors.response.use(
    res => res,
    (error) => {
      if (error?.response?.status === 401) {
        window.location.href = '/';
      }
    }
  );


export default http;
