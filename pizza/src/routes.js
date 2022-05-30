require("express-async-errors");

const { Router } = require("express");
const { OrdersController } = require("./controllers/OrdersController");
const { UsersController } = require("./controllers/UsersController");
const { errorHandler } = require("./errors");

const routes = Router();

routes.post("/users/", UsersController.create);
routes.get("/users/orders", OrdersController.fetchUserOrders);
routes.post("/auth/login", UsersController.login);

routes.post("/orders/", OrdersController.create);
routes.put("/orders/:id/finish", OrdersController.finishOrder);

routes.use(errorHandler);

module.exports = { routes };
