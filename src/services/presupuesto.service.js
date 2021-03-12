import http from "../http-common";

class PresupuestoDataService {
    getAll() {
        return http.get("/presupuesto");
    }

    create(data) {
        return http.post("/presupuesto/presupuesto", data);
    }
}

export default new PresupuestoDataService();