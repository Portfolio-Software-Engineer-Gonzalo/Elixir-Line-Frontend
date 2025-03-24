import axios from "axios";

//Consumir API de inventario
const http = axios.create({ baseURL: "http://localhost:3000"});

export class ProductApiService {

    constructor() {
        this.resourceEndpoint = '/products';
    }

    async getAllResources() {
        return http.get(this.resourceEndpoint)
    }

    async create(data) {
        return http.post(this.resourceEndpoint, data)
    }

    async update(id, data) {
        return http.put(`${this.resourceEndpoint}/${id}`, data)
    }

    async delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`)
    }

}