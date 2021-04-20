import axios from "axios";

export default axios.create({
    baseURL: "http://presupuestador.herokuapp.com/api/",
    headers: {
        "Content-type": "application/json"
    }
})