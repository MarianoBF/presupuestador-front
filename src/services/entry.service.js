import http from "../http-common";

class EntryDataService {
    getAll() {
        return http.get("/entries");
    }

    create(data) {
        return http.post("/entry", data);
    }

    delete(id) {
        return http.delete(`/entry/${id}`)
    }

    deleteAll() {
        return http.delete("/entries")
    }

    update(id, data) {
        return http.put(`/entry/${id}`, data)
    }
}

export default new EntryDataService();