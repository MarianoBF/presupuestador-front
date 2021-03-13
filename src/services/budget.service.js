import http from "../http-common";

class BudgetDataService {
    getAll() {
        return http.get("/budget");
    }

    create(data) {
        return http.post("/budget", data);
    }
    deleteAll() {
        return http.delete("/budget")
    }
}

export default new BudgetDataService();