class User {
  constructor({ id, name, password }) {
    this.id = id;
    this.name = name;
    this.password = password;
  }

  toJSON() {
    const { password, ...remaining } = this;
    return remaining;
  }
}

module.exports = { User };
