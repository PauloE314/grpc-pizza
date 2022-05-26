const path = require("path");

module.exports = {
  development: {
    client: "sqlite",
    connection: {
      filename: path.resolve(__dirname, "db.sqlite"),
    },
    migrations: {
      directory: path.resolve(__dirname, "migrations"),
    },
    useNullAsDefault: true,
  },
};
