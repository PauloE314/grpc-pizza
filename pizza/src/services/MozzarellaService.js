const path = require("path");
const { promisify } = require("util");
const { connectGRPServer } = require("../lib/grpc");

const mozzarellaConfig = {
  port: process.env.MOZZARELLA_PORT,
  protoFilePath: path.join(__dirname, "..", "pb", "mozzarella.proto"),
  service: "MozzarellaService",
};

class MozzarellaService {
  static client = connectGRPServer(mozzarellaConfig);

  static async createOrder(params) {
    return promisify(this.client.createOrder.bind(this.client))(params);
  }

  static async finishOrder(params) {
    return promisify(this.client.finishOrder.bind(this.client))(params);
  }

  static async fetchByUser(params) {
    return promisify(this.client.fetchByUser.bind(this.client))(params);
  }
}

module.exports = { MozzarellaService };
