const { TomatoServiceService } = require("../../pb/contract_grpc_pb");
const { UsersController } = require("./controllers/UsersController");
const {
  AuthenticationController,
} = require("./controllers/AuthenticationController");

function applyDefinitions(server) {
  server.addService(TomatoServiceService, {
    createUser: UsersController.create,
    login: AuthenticationController.login,
    validateToken: AuthenticationController.validateToken,
  });
}

module.exports = { applyDefinitions };
