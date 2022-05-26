if (process.env.NODE_ENV !== "production") require("dotenv").config();

const grpc = require("grpc");
const { applyDefinitions } = require("./interface/grpc/definition");

function grpcServer(port) {
  const server = new grpc.Server();

  applyDefinitions(server);

  // Insecure connection only on development
  server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();
}

grpcServer(process.env.PORT || 3001);
