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

  static async createUser(params) {
    const { user } = await promisify(this.client.createUser.bind(this.client))(
      params
    );

    return user;
  }

  static async login(params) {
    const { credentials } = await promisify(
      this.client.login.bind(this.client)
    )(params);

    return credentials;
  }
}

module.exports = { TomatoService };
