const CustomError = require('./custom-error');

class RequestValidationError extends CustomError {
    constructor(errors) {
        super('Invalid request parameteres');

        this.statusCode = 400;
        this.errors = errors;

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map((error) => ({
            message: error.msg,
            field: error.param,
        }));
    }
}

module.exports = RequestValidationError;
