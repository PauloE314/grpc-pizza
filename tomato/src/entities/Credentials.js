class Credentials {
  constructor({ token, user, expiresIn }) {
    this.token = token;
    this.user = user;
    this.expiresIn = expiresIn;
  }
}

module.exports = { Credentials };
