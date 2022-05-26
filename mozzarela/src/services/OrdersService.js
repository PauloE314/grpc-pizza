const { OrdersRepository } = require("../repositories/OrdersRepository");

class OrdersService {
  static create(order) {
    return OrdersRepository.create(order);
  }

  static fetchByUser(userId) {
    return OrdersRepository.fetchByUser(userId);
  }

  static async finish(id) {
    const order = await OrdersRepository.fetch(id);
    if (!order || order.finished) return;

    return OrdersRepository.update(id, { finished: true });
  }
}

module.exports = { OrdersService };
