const { connection } = require("../db/connection");
const { Order } = require("../entities/Order");

class OrdersRepository {
  static async create(order) {
    const [id] = await connection("orders").insert({
      userId: order.userId,
      name: order.name,
      description: order.description,
      price: order.price,
    });

    return this.fetch(id);
  }

  static async fetch(id) {
    const [rawOrder] = await connection("orders").where({ id }).select("*");
    return new Order(rawOrder);
  }

  static async fetchByUser(userId) {
    const rawOrders = await connection("orders").where({ userId }).select("*");
    return rawOrders.map((rawOrder) => new Order(rawOrder));
  }

  static async update(id, params) {
    await connection("orders").where({ id }).update(params);
    return this.fetch(id);
  }
}

module.exports = { OrdersRepository };
