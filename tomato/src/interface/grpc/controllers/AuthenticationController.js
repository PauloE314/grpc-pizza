const { status } = require("grpc");
const {
  AuthenticationService,
} = require("../../../services/AuthenticationService");

class AuthenticationController {
  static async login(call, callback) {
    const credentials = await AuthenticationService.login(call.request);

    if (credentials) return callback(null, credentials);
    else return callback({ code: status.PERMISSION_DENIED });
  }

  static async validateToken(call, callback) {
    const { token } = call.request;
    const credentials = await AuthenticationService.validateToken(token);

    if (credentials) return callback(null, credentials);
    else return callback({ code: status.PERMISSION_DENIED });
  }
}

module.exports = { AuthenticationController };
