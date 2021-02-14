const OrderInterface = require('../Order/interface');
const Validator = require('../Validator');
const DB = require('../../DataBase');

class Executive {
    constructor(params) {
        const { consumerId, executiveId, orderId, action, date, location } = params;

        this.order = {
            orderId,
            consumerId,
            executiveId,
            action,
            date,
            location,
        };

        this.init(params);
    }

    execute() {
        const Order = new OrderInterface(DB, this.order);
    }

    init(unvalidatedParams) {
        if (Validator.validateRequestParams(unvalidatedParams)) {
            this.execute()
        }
    }
}

export default Executive;