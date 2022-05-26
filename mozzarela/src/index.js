if (process.env.NODE_ENV !== "production") require("dotenv").config();

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { applyDefinitions } = require("./interface/grpc/definition");

function grpcServer(host, port) {
  const server = new grpc.Server();

  applyDefinitions(server);

  server.bind(`${host}:${port}`);
  server.start();
}

grpcServer(process.env.HOST, process.env.PORT);
