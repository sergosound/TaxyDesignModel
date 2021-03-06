class Order {
    constructor(db) {
        this.store = db;
    }

    createOrder(order) {
        this.store.orders.push(order)
    }
    updateOrder(id, order) {
        const { store } = this;
        let idx = null;

        store.orders.filter((ord, i) => {
            if (ord.id === id) {
                idx = i;
                return ord.id !== id;
            }
        })

        if (typeof idx === 'number') {
            store.orders = {
                ...store.orders.slice(0, idx),
                ...order,
                ...store.orders.slice(idx)
            }
        }
    }
    deleteOrder(id) {
        this.store.orders.filter((ord, i) => ord.id !== id)
    }
}

module.exports = Order;