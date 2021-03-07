import http from "../http-common";

class GastoDataService {
    getAll() {
        return http.get("/gastos");
    }
}

export default new GastoDataService();