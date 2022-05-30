const path = require("path");
const { promisify } = require("util");
const { connectGRPServer } = require("../lib/grpc");

const mozzarellaConfig = {
  host: process.env.MOZZARELLA_HOST,
  protoFilePath: path.join(__dirname, "..", "pb", "mozzarella.proto"),
  service: "MozzarellaService",
};

class MozzarellaService {
  static client = connectGRPServer(mozzarellaConfig);

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
