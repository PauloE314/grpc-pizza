require("express-async-errors");

const { Router } = require("express");
const { OrdersController } = require("./controllers/OrdersController");
const { UsersController } = require("./controllers/UsersController");
const { errorHandler } = require("./errors");

const routes = Router();

routes.post("/users/", UsersController.create);
routes.post("/users/login", UsersController.login);
routes.get("/users/orders", OrdersController.fetchUserOrders);

routes.post("/orders/", OrdersController.create);
routes.put("/orders/:id", OrdersController.finishOrder);

routes.use(errorHandler);

module.exports = { routes };
