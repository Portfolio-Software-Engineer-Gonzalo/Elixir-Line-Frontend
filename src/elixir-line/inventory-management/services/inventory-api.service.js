import axios from "axios";

//Consumir API de inventario
const http = axios.create({ baseURL: "" });


export class InventoryApiService {

    constructor() {
        this.resourceEndpoint = '/inventory';
    }

    async getAllResources() {
        return http.get(this.resourceEndpoint)
    }

    async getResourceById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`)
    }


}