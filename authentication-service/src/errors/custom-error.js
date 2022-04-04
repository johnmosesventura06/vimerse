class CustomError extends Error {
    constructor(message) {
        super(message);

        this.statusCode = 0;

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    serializeErrors() {
        // return type format:
        // { message: string; field?: string }[]
        return [{ message: this.message, field: this.field }];
    }
}

module.exports = CustomError;
