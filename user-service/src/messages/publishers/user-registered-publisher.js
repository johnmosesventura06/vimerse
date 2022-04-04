const { Stan } = require('node-nats-streaming');
const Publisher = require('./base-publisher');
const Subjects = require('../subjects');

class UserRegisteredPublisher extends Publisher {
  /**
   *
   * @param {Stan} client
   */
  constructor(client) {
    super(client);

    /** @type {String} */
    this.subject = Subjects.UserRegistered;
  }
}

module.exports = UserRegisteredPublisher;