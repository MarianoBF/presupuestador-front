import http from "../http-common";

class AuthService {
  login(data) {
    return http.post("/budget/login", data);
  }

  register(data) {
    return http.post("/budget/register", data);
  }

}

export default new AuthService();
