const { status } = require("@grpc/grpc-js");
const messages = require("../../../pb/contract_pb");
const {
  AuthenticationService,
} = require("../../../services/AuthenticationService");

class AuthenticationController {
  static async login(call, callback) {
    const credentials = await AuthenticationService.login({
      name: call.request.getName(),
      password: call.request.getPassword(),
    });

    if (!credentials) return callback({ code: status.PERMISSION_DENIED });

    const response = new messages.LoginResponse().setCredentials(
      AuthenticationController.buildPbCredentials(credentials)
    );
    return callback(null, response);
  }

  static async validateToken(call, callback) {
    const credentials = await AuthenticationService.validateToken(
      call.request.getToken()
    );

    if (!credentials) return callback({ code: status.PERMISSION_DENIED });

    const response = new messages.ValidationResponse().setCredentials(
      AuthenticationController.buildPbCredentials(credentials)
    );
    return callback(null, response);
  }

  static buildPbCredentials(credentials) {
    return new messages.Credentials()
      .setToken(credentials.token)
      .setExpiresIn(credentials.expiresIn)
      .setUser(
        new messages.User()
          .setName(credentials.user.name)
          .setId(credentials.user.id)
      );
  }
}

module.exports = { AuthenticationController };
