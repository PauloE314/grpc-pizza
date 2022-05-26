const { status } = require("grpc");
const { TomatoService } = require("../../services/TomatoService");

function authRequired(cb) {
  return async (call, callback) => {
    const { accessToken } = call.request;
    const credentials = await TomatoService.validateToken(accessToken);
    if (!credentials) return callback({ code: status.PERMISSION_DENIED });

    call.auth = credentials;
    return cb(call, callback);
  };
}

module.exports = { authRequired };
