const { status } = require("@grpc/grpc-js");
const messages = require("../../../pb/codegen/contract_pb");
const { OrdersService } = require("../../../services/OrdersService");

class OrdersController {
  static async create(call, callback) {
    const { auth } = call;

    const order = await OrdersService.create({
      userId: auth.getUser().getId(),
      name: call.request.getName(),
      description: call.request.getDescription(),
      price: call.request.getPrice(),
    });

    const response = new messages.CreateOrderResponse().setOrder(
      OrdersController.buildPbOrder(order)
    );

    return callback(null, response);
  }

  static async fetchByUser(call, callback) {
    const { auth } = call;
    const orders = await OrdersService.fetchByUser(auth.getUser().getId());
    const response = new messages.FetchByUserResponse();

    orders.forEach((order) =>
      response.addOrders(OrdersController.buildPbOrder(order))
    );

    return callback(null, response);
  }

  static async finish(call, callback) {
    const order = await OrdersService.finishOrder(call.request.getId());

    if (!order) return callback({ code: status.INVALID_ARGUMENT });

    const response = new messages.FinishOrderResponse().setOrder(
      OrdersController.buildPbOrder(order)
    );

    return callback(null, response);
  }

  static buildPbOrder(order) {
    return new messages.Order()
      .setId(order.id)
      .setUserId(order.userId)
      .setName(order.name)
      .setDescription(order.description)
      .setCreatedAt(order.createdAt)
      .setPrice(order.serializedPrice())
      .setFinished(order.finished);
  }
}

module.exports = { OrdersController };
