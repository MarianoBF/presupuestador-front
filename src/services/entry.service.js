import http from "../http-common";

class EntryDataService {
    getAll() {
        return http.get("/gastos");
    }

    create(data) {
        return http.post("/gastos/gastos", data);
    }

    deleteAll() {
        return http.delete("/gastos")
    }
}

export default new EntryDataService();