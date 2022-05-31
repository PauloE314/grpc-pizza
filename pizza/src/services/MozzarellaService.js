const path = require("path");
const { promisify } = require("util");
const { ChannelCredentials } = require("@grpc/grpc-js");
const { getPackageDefinition } = require("../lib/grpc");

const protoPath = path.join(__dirname, "..", "pb", "mozzarella.proto");
const MozzarellaClient = getPackageDefinition(protoPath).MozzarellaService;

class MozzarellaService {
  static client = new MozzarellaClient(
    process.env.MOZZARELLA_HOST,
    ChannelCredentials.createInsecure()
  );

  static async createOrder(params) {
    const { order } = await promisify(
      this.client.createOrder.bind(this.client)
    )(params);

    return order;
  }

  static async finishOrder(params) {
    const { order } = await promisify(
      this.client.finishOrder.bind(this.client)
    )(params);

    return order;
  }

  static async fetchByUser(params) {
    const { orders } = await promisify(
      this.client.fetchByUser.bind(this.client)
    )(params);

    return orders;
  }
}

module.exports = { MozzarellaService };
