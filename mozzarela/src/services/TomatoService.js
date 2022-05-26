const path = require("path");
const { connectGRPServer } = require("../lib/grpc");

const tomatoConfig = {
  port: process.env.TOMATO_PORT,
  protoFilePath: path.join(__dirname, "..", "pb", "tomato.proto"),
  service: "TomatoService",
};

class TomatoService {
  static client = connectGRPServer(tomatoConfig);

  static async validateToken(token) {
    try {
      return await this.client.validateToken().sendMessage({ token });
    } catch (error) {
      return false;
    }
  }
}

module.exports = { TomatoService };
