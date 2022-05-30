if (process.env.NODE_ENV !== "production") require("dotenv").config();

const { Server, ServerCredentials } = require("@grpc/grpc-js");
const { applyDefinitions } = require("./interface/grpc/definition");

function grpcServer(host, port) {
  const server = new Server();

  applyDefinitions(server);

  server.bindAsync(
    `${host}:${port}`,
    ServerCredentials.createInsecure(),
    (error) => {
      if (error) console.error(error);
      else server.start();
    }
  );
}

grpcServer(process.env.HOST, process.env.PORT);
