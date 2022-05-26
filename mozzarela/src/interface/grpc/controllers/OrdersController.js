const { OrdersService } = require("../../../services/OrdersService");

class OrdersController {
  static async create(call, callback) {
    const { auth, request: orderData } = call;

    const order = await OrdersService.create({
      userId: auth.user.id,
      ...orderData,
    });

    return callback(null, order);
  }

  static async fetchByUser(call, callback) {
    const { auth } = call;
    const orders = await OrdersService.fetchByUser(auth.user.id);
    return callback(null, { orders });
  }

  static async finish(call, callback) {
    const { id } = call.request;
    const order = await OrdersService.finishOrder(id);
    return callback(null, order);
  }
}

module.exports = { OrdersController };
