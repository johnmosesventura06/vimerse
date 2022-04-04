// eslint-disable-next-line no-unused-vars
const { Stan } = require('node-nats-streaming');

class Publisher {
  /**
   *
   * @param {Stan} client
   */
  constructor(client) {
    /** @type {Stan} */
    this.client = client;

    /** @type {string} */
    this.subject = null;
  }

  publish(data) {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (error) => {
        if (error) {
          console.log(error);
          reject(error);
        }

        console.log(`Event published to subject ${this.subject}`);
        resolve();
      });
    });
  }
}

module.exports = Publisher;
