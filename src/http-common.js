import axios from "axios";

let token;

export const setAuthToken = (tkn) => {
  token = tkn;
};

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: token
    ? {
        "Content-type": "application/json",
        "x-access-token": token,
      }
    : {
        "Content-type": "application/json",
      },
});
