const path = require("path");
const { connectGRPServer } = require("../lib/grpc");

const mozzarellaConfig = {
  port: process.env.MOZZARELLA_PORT,
  protoFilePath: path.join(__dirname, "..", "pb", "mozzarella.proto"),
  service: "MozzarellaService",
};

class MozzarellaService {
  static client = connectGRPServer(mozzarellaConfig);

  static async createOrder(params) {
    return this.client.createOrder().sendMessage(params);
  }

  static async finishOrder(params) {
    return this.client.finishOrder().sendMessage(params);
  }

  static async fetchByUser(params) {
    return this.client.fetchByUser().sendMessage(params);
  }
}

module.exports = { MozzarellaService };
