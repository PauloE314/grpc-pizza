const path = require("path");
const { connectGRPServer } = require("../lib/grpc");

const tomatoConfig = {
  port: process.env.TOMATO_PORT,
  protoFilePath: path.join(__dirname, "..", "pb", "tomato.proto"),
  service: "TomatoService",
};

class TomatoService {
  static client = connectGRPServer(tomatoConfig);

  static async createUser(params) {
    return this.client.createUser().sendMessage(params);
  }

  static async login(params) {
    return this.client.login().sendMessage(params);
  }
}

module.exports = { TomatoService };
