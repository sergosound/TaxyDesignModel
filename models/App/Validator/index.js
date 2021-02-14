class Validator {
    validateRequestParams({ consumerId, executiveId, orderId, action, date, location }) {
        if (typeof consumerId !== 'string'
            || typeof executiveId !== 'string'
            || typeof orderId !== 'string'
            || typeof action !== 'string'
            || typeof date !== 'number'
            || typeof location !== 'string') {
            return false;
        }

        return true;
    }
}

export default Validator;