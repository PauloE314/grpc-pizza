const { ChannelCredentials } = require("@grpc/grpc-js");
const { promisify } = require("util");
const messages = require("../pb/codegen/tomato_pb");
const { TomatoServiceClient } = require("../pb/codegen/tomato_grpc_pb");

class TomatoService {
  static client = new TomatoServiceClient(
    process.env.TOMATO_HOST,
    ChannelCredentials.createInsecure()
  );

  static async validateToken(token) {
    try {
      return await promisify(this.client.validateToken.bind(this.client))(
        new messages.ValidationRequest().setToken(token)
      );
    } catch (error) {
      return false;
    }
  }
}

module.exports = { TomatoService };
