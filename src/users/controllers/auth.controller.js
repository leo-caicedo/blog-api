// models
const User = require("../models/User");

class AuthController {
  // register
  async register(req, res, next) {
    const { username, email, password } = req.body;
    try {
      const userCreated = new User({
        username,
        email,
        password: await User.encryptPassword(password),
      });
      await userCreated.save();
      res.status(201).json(userCreated);
    } catch (err) {
      next(err);
    }
  }

  // login
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const matchPassword = await User.validatePassword(
        password,
        user.password
      );
      if (!matchPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      res.json({
        message: `Welcomme ${user.username}`,
        profile: user,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AuthController;
