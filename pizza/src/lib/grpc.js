const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const defaultConfigs = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

function connectGRPServer(params) {
  const { protoFilePath, config, service, host, port, credentials } =
    Object.assign(
      {
        host: "localhost",
        config: defaultConfigs,
        credentials: grpc.credentials.createInsecure(),
      },
      params
    );

  const packageDefinition = protoLoader.loadSync(protoFilePath, config);

  const proto = grpc.loadPackageDefinition(packageDefinition);
  const ServiceConstructor = proto[service];
  return new ServiceConstructor(`${host}:${port}`, credentials);
}

module.exports = { connectGRPServer, defaultConfigs };
