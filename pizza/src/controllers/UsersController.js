const { TomatoService } = require("../services/TomatoService");

class UsersController {
  static async create(req, res) {
    const { name, password } = req.body;
    const payload = await TomatoService.createUser({ name, password });

    return res.status(201).json(payload);
  }

  static async login(req, res) {
    const { name, password } = req.body;
    const payload = await TomatoService.login({ name, password });

    return res.send(payload);
  }
}

module.exports = { UsersController };
