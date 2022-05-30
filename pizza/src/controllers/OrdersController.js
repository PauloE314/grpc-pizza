const { MozzarellaService } = require("../services/MozzarellaService");

class OrdersController {
  static async create(req, res) {
    const { authorization } = req.headers;
    const { name, description, price } = req.body;

    const order = await MozzarellaService.createOrder({
      name,
      description,
      price,
      accessToken: authorization,
    });

    return res.status(201).send(order);
  }

  static async fetchUserOrders(req, res) {
    const { authorization } = req.headers;
    const orders = await MozzarellaService.fetchByUser({
      accessToken: authorization,
    });

    return res.send(orders);
  }

  static async finishOrder(req, res) {
    const { authorization } = req.headers;
    const { id } = req.params;

    const order = await MozzarellaService.finishOrder({
      id,
      accessToken: authorization,
    });

    return res.send(order);
  }
}

module.exports = { OrdersController };
