const { authRequired } = require("./auth");
const { OrdersController } = require("./controllers/OrdersController");
const {
  MozzarellaServiceService,
} = require("../../pb/codegen/contract_grpc_pb");

function applyDefinitions(server) {
  server.addService(MozzarellaServiceService, {
    fetchByUser: authRequired(OrdersController.fetchByUser),
    createOrder: authRequired(OrdersController.create),
    finishOrder: authRequired(OrdersController.finish),
  });
}

module.exports = { applyDefinitions };
