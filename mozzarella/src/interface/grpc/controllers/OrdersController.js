const { status } = require("@grpc/grpc-js");
const { OrdersService } = require("../../../services/OrdersService");

class OrdersController {
  static async create(call, callback) {
    const { auth, request: orderData } = call;

    const order = await OrdersService.create({
      userId: auth.user.id,
      ...orderData,
    });

    return callback(null, { order: order.toJSON() });
  }

  static async fetchByUser(call, callback) {
    const { auth } = call;
    const orders = await OrdersService.fetchByUser(auth.user.id);
    return callback(null, { orders: orders.map((order) => order.toJSON()) });
  }

  static async finish(call, callback) {
    const { id } = call.request;
    const order = await OrdersService.finishOrder(id);

    if (order) callback(null, { order: order.toJSON() });
    return callback({ code: status.INVALID_ARGUMENT });
  }
}

module.exports = { OrdersController };
