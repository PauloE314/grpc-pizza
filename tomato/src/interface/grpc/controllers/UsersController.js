const grpc = require("grpc");
const { UserService } = require("../../../services/UsersService");

class UsersController {
  static async create(call, callback) {
    const user = await UserService.create(call.request);

    if (user) return callback(null, user);
    else return callback({ code: grpc.status.ALREADY_EXISTS });
  }
}

module.exports = { UsersController };
