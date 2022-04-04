const nats = require('node-nats-streaming');

class NatsWrapper {
  constructor() {
    /** @type {nats.Stan} */
    this.client = null;
  }

  /**
   *
   * @param {string} clusterId
   * @param {string} url
   */
  connect(clusterId, url) {
    console.log(`NATS client id ${process.env.NATS_CLIENT_ID} connecting`);

    this.client = nats.connect(clusterId, process.env.NATS_CLIENT_ID, {
      url,
    });

    return new Promise((resolve, reject) => {
      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });

      this.client.on('error', (error) => {
        reject(error);
      });
    });
  }
}

const natsWrapper = new NatsWrapper();

module.exports = natsWrapper;
