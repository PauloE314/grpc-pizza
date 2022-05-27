const path = require("path");
const { promisify } = require("util");
const { connectGRPServer } = require("../lib/grpc");

const tomatoConfig = {
  port: process.env.TOMATO_PORT,
  protoFilePath: path.join(__dirname, "..", "pb", "tomato.proto"),
  service: "TomatoService",
};

class TomatoService {
  static client = connectGRPServer(tomatoConfig);

  static async createUser(params) {
    return promisify(this.client.createUser.bind(this.client))(params);
  }

  static async login(params) {
    return promisify(this.client.login.bind(this.client))(params);
  }
}

module.exports = { TomatoService };
