const { ChannelCredentials, loadPackageDefinition } = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const defaultConfigs = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

function connectGRPServer({ host, protoFilePath, service, credentials }) {
  credentials = credentials || ChannelCredentials.createInsecure();

  const packageDefinition = protoLoader.loadSync(protoFilePath, defaultConfigs);
  const proto = loadPackageDefinition(packageDefinition);

  const ServiceConstructor = proto[service];
  const client = new ServiceConstructor(host, credentials);

  return client;
}

module.exports = { connectGRPServer };
