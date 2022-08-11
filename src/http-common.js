import axios from "axios";

let token = (sessionStorage.getItem('pre_ejisao')) || ""

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
        "Content-type": "application/json",
        "x-access-token": "" + token,
    }
});
