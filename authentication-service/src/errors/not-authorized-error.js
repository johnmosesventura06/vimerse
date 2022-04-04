const CustomError = require('./custom-error');

class NotAuthorizedError extends CustomError {
    constructor(message) {
        super(`Not authorized: ${message}`);

        this.statusCode = 401;

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
}

module.exports = NotAuthorizedError;
