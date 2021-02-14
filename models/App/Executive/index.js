const OrderInterface = require('../Order/interface');
const Validator = require('../Validator');

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
        const order = OrderInterface;
        order.do('create', this.order);
    }

    init(unvalidatedParams) {
        if (Validator.validateRequestParams(unvalidatedParams)) {
            this.execute()
        }
    }
}

export default Executive;