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
    const { user } = await promisify(this.client.createUser.bind(this.client))(
      params
    );

    return user;
  }

  static async login(params) {
    const { credentials } = await promisify(
      this.client.login.bind(this.client)
    )(params);

    return credentials;
  }
}

module.exports = { TomatoService };
