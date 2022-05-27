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

  static async validateToken(token) {
    try {
      return await promisify(this.client.validateToken.bind(this.client))({
        token,
      });
    } catch (error) {
      return false;
    }
  }
}

module.exports = { TomatoService };
