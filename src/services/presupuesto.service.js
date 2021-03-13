import http from "../http-common";

class PresupuestoDataService {
    getAll() {
        return http.get("/presupuesto");
    }

    create(data) {
        return http.post("/presupuesto/presupuesto", data);
    }
    deleteAll() {
        return http.delete("/presupuesto")
    }
}

export default new PresupuestoDataService();