const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
    constructor(message) {
        super(message);

        this.statusCode = 404;

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

module.exports = NotFoundError;
