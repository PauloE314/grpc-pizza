const { status } = require("@grpc/grpc-js");
const messages = require("../../../pb/codegen/contract_pb");
const { UserService } = require("../../../services/UsersService");

class UsersController {
  static async create(call, callback) {
    const user = await UserService.create({
      name: call.request.getName(),
      password: call.request.getPassword(),
    });

    if (!user) return callback({ code: status.ALREADY_EXISTS });

    const response = new messages.CreateUserResponse().setUser(
      new messages.User().setName(user.name).setId(user.id)
    );

    return callback(null, response);
  }
}

module.exports = { UsersController };
