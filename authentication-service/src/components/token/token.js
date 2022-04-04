class Token {
    constructor() {
        /** @type {string | number} */
        this.id = '';

        /** @type {string | number} */
        this.userId = '';

        /** @type {string} */
        this.accessToken = '';

        /** @type {string} */
        this.refreshToken = '';

        /** @type {Date} */
        this.createdAt = null;
    }
}

module.exports = Token;
