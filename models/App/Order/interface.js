const Order = require('./index');

class OrderInterface {
    constructor(db) {
        this.methods = new Order(db);
    }

    do(action, order) {
        if (!action) {
            return false
        }

        switch (action) {
            case 'create':
                this.methods.createOrder(order)
                return true;
            case 'update':
                this.methods.updateOrder(order)
                return true;
            case 'remove':
                this.methods.deleteOrder(order)
                return true;
            default:
                return false
        }
    }
}

module.exports = OrderInterface;