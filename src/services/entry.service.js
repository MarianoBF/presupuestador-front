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
}

export default new EntryDataService();