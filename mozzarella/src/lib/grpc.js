const { loadPackageDefinition } = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const defaultConfigs = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

function getPackageDefinition(protoPath) {
  const packageDefinition = protoLoader.loadSync(protoPath, defaultConfigs);
  return loadPackageDefinition(packageDefinition);
}

module.exports = { getPackageDefinition };
