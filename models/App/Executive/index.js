const OrderInterface = require('../Order/interface');
const Validator = require('../Validator');
const DB = require('../../DataBase');

class Executive {
    constructor(params) {
        const { consumerId, executiveId, orderId, action, date, location } = params;

        this.consumerId = consumerId;
        this.executiveId = executiveId;
        this.action = action;
        this.order = {
            orderId,
            date,
            location,
        };

        this.init(params);
    }

    execute() {
        const Order = new OrderInterface(DB);
        Order.do(this.action, this.order);
    }

    init(unvalidatedParams) {
        if (Validator.validateRequestParams(unvalidatedParams)) {
            this.execute()
        }
    }
}

module.exports = Executive;