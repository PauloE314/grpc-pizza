if (process.env.NODE_ENV !== "production") require("dotenv").config();

const { Server, ServerCredentials } = require("@grpc/grpc-js");
const { applyDefinitions } = require("./interface/grpc/definition");

function grpcServer(port) {
  const server = new Server();

  applyDefinitions(server);

  // Insecure connection only on development
  server.bindAsync(
    `0.0.0.0:${port}`,
    ServerCredentials.createInsecure(),
    (error) => {
      if (error) console.error(error);
      else server.start();
    }
  );
}

grpcServer(process.env.PORT || 3001);
