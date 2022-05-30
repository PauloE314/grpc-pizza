const { ChannelCredentials } = require("@grpc/grpc-js");
const { promisify } = require("util");
const messages = require("../pb/codegen/tomato_pb");
const { TomatoServiceClient } = require("../pb/codegen/tomato_grpc_pb");

class TomatoService {
  static client = new TomatoServiceClient(
    process.env.TOMATO_HOST,
    ChannelCredentials.createInsecure()
  );

  static async createUser(params) {
    const request = new messages.CreateUserRequest()
      .setName(params.name)
      .setPassword(params.password);

    const response = await promisify(this.client.createUser.bind(this.client))(
      request
    );

    return response.getUser().toObject();
  }

  static async login(params) {
    const request = new messages.LoginRequest()
      .setName(params.name)
      .setPassword(params.password);

    const response = await promisify(this.client.login.bind(this.client))(
      request
    );

    return response.getCredentials().toObject();
  }
}

module.exports = { TomatoService };
