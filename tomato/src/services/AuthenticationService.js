const jwt = require("jsonwebtoken");
const { Credentials } = require("../entities/Credentials");
const { User } = require("../entities/User");
const { UserService } = require("./UsersService");

const secretKey = () => String(process.env.SECRET_KEY);

class AuthenticationService {
  static async login({ name, password }) {
    const user = await UserService.fetchUser(name);
    if (!user) return false;

    const isPasswordValid = await UserService.checkPassword(user, password);
    if (!isPasswordValid) return false;

    const { token, expiresIn } = this.generateUserToken(user);
    return new Credentials({ token, expiresIn, user });
  }

  static async validateToken(token) {
    try {
      const payload = jwt.verify(token, secretKey());

      return new Credentials({
        token,
        user: payload.data,
        expiresIn: Number(payload.exp),
      });
    } catch (error) {
      return false;
    }
  }

  static generateUserToken(user) {
    const timeLimitInHours = 6;
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const secondsToExpiration = nowInSeconds + timeLimitInHours * 3600;

    return {
      token: jwt.sign({ exp: secondsToExpiration, data: user }, secretKey()),
      expiresIn: secondsToExpiration,
    };
  }
}

module.exports = { AuthenticationService };
