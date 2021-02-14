const Order = require('./index');

class OrderInterface extends Order {
    do(action, order) {
        if (!action) {
            return false
        }

        switch (action) {
            case 'create':
                this.createOrder(order)
                return true;
            case 'update':
                this.updateOrder(order)
                return true;
            case 'remove':
                this.deleteOrder(order)
                return true;
            default:
                return false
        }
    }
}

module.exports = new OrderInterface();