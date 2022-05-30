const { status } = require("@grpc/grpc-js");
const { TomatoService } = require("../../services/TomatoService");

function authRequired(cb) {
  return async (call, callback) => {
    const accessToken = call.request.getAccessToken();
    const response = await TomatoService.validateToken(accessToken);
    if (!response) return callback({ code: status.PERMISSION_DENIED });

    call.auth = response.getCredentials();
    return cb(call, callback);
  };
}

module.exports = { authRequired };
