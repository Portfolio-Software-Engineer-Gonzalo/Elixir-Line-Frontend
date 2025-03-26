import axios from "axios";

//Consumir API de inventario
const http = axios.create({ baseURL: "http://localhost:3000"});

export class StockApiService {

    constructor() {
        this.resourceEndpoint = '/stocks';
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

    async getStockByProductId(id) {
        return http.get(`${this.resourceEndpoint}/product/${id}`)
    }

    async getStockByLocation(location) {
        return http.get(`${this.resourceEndpoint}/location/${location}`)
    }

    async getStockByWarehouse(warehouse) {
        return http.get(`${this.resourceEndpoint}/warehouse/${warehouse}`)
    }

    async getStockByProductAndLocation(productId, location) {
        return http.get(`${this.resourceEndpoint}/product/${productId}/location/${location}`)
    }

    async getStockByProductAndWarehouse(productId, warehouse) {
        return http.get(`${this.resourceEndpoint}/product/${productId}/warehouse/${warehouse}`)
    }

    async getStockByLocationAndWarehouse(location, warehouse) {
        return http.get(`${this.resourceEndpoint}/location/${location}/warehouse/${warehouse}`)
    }

    async getStockByProductLocationAndWarehouse(productId, location, warehouse) {
        return http.get(`${this.resourceEndpoint}/product/${productId}/location/${location}/warehouse/${warehouse}`)
    }

    async updateTotalAvailable(id, amount) {
        return http.put(`${this.resourceEndpoint}/${id}/total_available/${amount}`)
    }

    async reserveStock(id, amount) {
        return http.put(`${this.resourceEndpoint}/${id}/reserve/${amount}`)
    }

    async releaseReservedStock(id, amount) {
        return http.put(`${this.resourceEndpoint}/${id}/release/${amount}`)
    }

    async addMovement(id, data) {
        return http.post(`${this.resourceEndpoint}/${id}/movement`, data)
    }

    async addLocation(id, data) {
        return http.post(`${this.resourceEndpoint}/${id}/location`, data)
    }

    async getStockAtLocation(id, location) {
        return http.get(`${this.resourceEndpoint}/${id}/location/${location}`)
    }

}