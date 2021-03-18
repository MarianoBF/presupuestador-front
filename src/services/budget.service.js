import http from "../http-common";

class BudgetDataService {
    getAll() {
        return http.get("/budget");
    }

    create(data) {
        return http.post("/budget", data);
    }

    delete(id) {
        return http.delete(`/budget/${id}`)
    }

    deleteAll() {
        return http.delete("/budget")
    }
}

export default new BudgetDataService();