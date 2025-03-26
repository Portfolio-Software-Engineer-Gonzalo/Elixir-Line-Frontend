

export default class Stock {

    constructor(
        {
            id = '',
            product_id = '',
            total_available = 0,
            reserved = 0,
            in_transit = 0,
            locations = [],
            movements = []
        }
    )
    {
        this.id = id;
        this.product_id = product_id;
        this.total_available = total_available;
        this.reserved = reserved;
        this.in_transit = in_transit;
        this.locations = locations;
        this.movements = movements;
    }

    //Metodo para actualizar el total disponible de stock
    updateTotalAvailable(amount) {
        this.total_available += amount;
    }

    //Metodo para reservar stock disponible
    reserveStock(amount) {
        if (this.total_available - this.reserved >= amount) {
            this.reserved += amount;
            return true;
        } else {
            console.log("No hay suficiente stock disponible para reservar.");
            return false;
        }
    }

    //Metodo para liberar stock reservado
    releaseReservedStock(amount) {
        if (this.reserved >= amount) {
            this.reserved -= amount;
            return true;
        } else {
            console.log("No hay suficiente stock reservado para liberar.");
            return false;
        }
    }

    //Metodo para registrar un movimiento de stock (entrada o salida)
    addMovement(date, type, quantity) {
        this.movements.push({ date, type, quantity });
    }

    //Metodo para agregar nuevas ubicaciones de almacén y su stock
    addLocation(warehouse, quantity) {
        this.locations.push({ warehouse, quantity });
    }

    //Metodo para obtener el stock en una ubicación específica (almacén)
    getStockAtLocation(warehouse) {
        const location = this.locations.find(loc => loc.warehouse === warehouse);
        return location ? location.quantity : 0;
    }



}