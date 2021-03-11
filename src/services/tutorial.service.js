import http from "../http-common";

class GastoDataService {
    getAll() {
        return http.get("/gastos");
    }

    create(data) {
        return http.post("/gastos/gastos", data);
    }
}

export default new GastoDataService();