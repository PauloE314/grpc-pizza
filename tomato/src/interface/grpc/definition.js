const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const { loadPackageDefinition } = require("@grpc/grpc-js");
const { UsersController } = require("./controllers/UsersController");
const {
  AuthenticationController,
} = require("./controllers/AuthenticationController");

const protoPath = path.resolve(__dirname, "..", "..", "pb", "contract.proto");
const config = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

function applyDefinitions(server) {
  const packageDefinition = protoLoader.loadSync(protoPath, config);
  const proto = loadPackageDefinition(packageDefinition);

  server.addService(proto.TomatoService.service, {
    createUser: UsersController.create,
    login: AuthenticationController.login,
    validateToken: AuthenticationController.validateToken,
  });
}

module.exports = { applyDefinitions };
