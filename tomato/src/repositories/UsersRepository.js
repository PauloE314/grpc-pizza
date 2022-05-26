const { connection } = require("../db/connection");
const { User } = require("../entities/User");

class UsersRepository {
  static async create(user) {
    const [id] = await connection("users").insert({
      name: user.name,
      password: user.password,
    });

    if (!id) return;
    return new User({ id, name: user.name, password: user.password });
  }

  static async fetchByName(name) {
    const [rawUser] = await connection("users").where({ name }).select("*");

    if (!rawUser) return;
    return new User(rawUser);
  }
}

module.exports = { UsersRepository };
