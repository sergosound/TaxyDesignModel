class DataBase {
    constructor() {
        this.orders = [{id: 1}, {id: 2}, {id: 3}];
    }

    checkOrderById(id, mockValue) {
        if (!mockValue) {
            return !!this.orders.find(order => order.id === id)
        }

        return mockValue;
    }
}

module.exports = new DataBase()