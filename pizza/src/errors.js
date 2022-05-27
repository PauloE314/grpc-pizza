const grpc = require("grpc");

const errorHandler = (error, _req, res, _next) => {
  if (error.code) {
    const { code } = error;

    if (code === grpc.status.PERMISSION_DENIED) return res.status(401).send();
    if (code === grpc.status.NOT_FOUND) return res.status(404).send();
    if (code === grpc.status.ALREADY_EXISTS) return res.status(400).send();
    if (code === grpc.status.INVALID_ARGUMENT) return res.status(400).send();
    if (code === grpc.status.UNKNOWN) return res.status(500).send(error);
  }

  console.log(error);

  return res.status(error.httpCode || 500).send();
};

module.exports = { errorHandler };
