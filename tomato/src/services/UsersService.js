const bcrypt = require("bcrypt");
const { UsersRepository } = require("../repositories/UsersRepository");

class UserService {
  static async create({ name, password }) {
    const salts = 10;

    const user = {
      name,
      password: await bcrypt.hash(password, salts),
    };

    const repeatedUser = await this.fetchUser(user.name);
    if (repeatedUser) return;

    return await UsersRepository.create(user);
  }

  static fetchUser(name) {
    return UsersRepository.fetchByName(name);
  }

  static checkPassword(user, password) {
    return bcrypt.compare(password, user.password);
  }
}

module.exports = { UserService };
