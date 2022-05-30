const path = require("path");
const { promisify } = require("util");
const { ChannelCredentials } = require("@grpc/grpc-js");
const messages = require("../pb/codegen/mozzarella_pb");
const { MozzarellaServiceClient } = require("../pb/codegen/mozzarella_grpc_pb");

class MozzarellaService {
  static client = new MozzarellaServiceClient(
    process.env.MOZZARELLA_HOST,
    ChannelCredentials.createInsecure()
  );

  static async createOrder(params) {
    const request = new messages.CreateOrderRequest()
      .setName(params.name)
      .setPrice(params.price)
      .setDescription(params.description)
      .setAccessToken(params.accessToken);

    const response = await promisify(this.client.createOrder.bind(this.client))(
      request
    );

    return response.getOrder().toObject();
  }

  static async finishOrder(params) {
    const request = new messages.FinishOrderRequest()
      .setId(params.id)
      .setAccessToken(params.accessToken);

    const response = await promisify(this.client.finishOrder.bind(this.client))(
      request
    );

    return response.getOrder().toObject();
  }

  static async fetchByUser(params) {
    const request = new messages.FetchByUserRequest().setAccessToken(
      params.accessToken
    );

    const response = await promisify(this.client.fetchByUser.bind(this.client))(
      request
    );

    return response.toObject().ordersList;
  }
}

module.exports = { MozzarellaService };
