const path = require("path");
const { promisify } = require("util");
const { ChannelCredentials } = require("@grpc/grpc-js");
const { getPackageDefinition } = require("../lib/grpc");

const protoPath = path.join(__dirname, "..", "pb", "tomato.proto");
const TomatoClient = getPackageDefinition(protoPath).TomatoService;

class TomatoService {
  static client = new TomatoClient(
    process.env.TOMATO_HOST,
    ChannelCredentials.createInsecure()
  );

  static async validateToken(token) {
    try {
      return await promisify(this.client.validateToken.bind(this.client))({
        token,
      });
    } catch (error) {
      return false;
    }
  }
}

module.exports = { TomatoService };
