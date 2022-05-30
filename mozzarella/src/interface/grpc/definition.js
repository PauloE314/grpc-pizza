const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const { loadPackageDefinition } = require("@grpc/grpc-js");

const { authRequired } = require("./auth");
const { OrdersController } = require("./controllers/OrdersController");
const { defaultConfigs } = require("../../lib/grpc");

const protoPath = path.resolve(__dirname, "..", "..", "pb", "contract.proto");

function applyDefinitions(server) {
  const packageDefinition = protoLoader.loadSync(protoPath, defaultConfigs);
  const proto = loadPackageDefinition(packageDefinition);

  server.addService(proto.MozzarellaService.service, {
    fetchByUser: authRequired(OrdersController.fetchByUser),
    createOrder: authRequired(OrdersController.create),
    finishOrder: authRequired(OrdersController.finish),
  });
}

module.exports = { applyDefinitions };
