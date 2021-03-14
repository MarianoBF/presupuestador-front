import http from "../http-common";

class EntryDataService {
    getAll() {
        return http.get("/entries");
    }

    create(data) {
        return http.post("/entry", data);
    }

    deleteAll() {
        return http.delete("/entry")
    }

    update(id, data) {
        return http.put(`/entry/${id}`, data)
    }
}

export default new EntryDataService();