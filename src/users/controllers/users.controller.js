// models
const User = require("../models/User");
const Post = require("../../posts/models/Post");

class UserController {
  async listUsers(req, res, next) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUser(req, res, next) {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    const { body: data } = req;
    const { id } = req.params;
    try {
      if (data.password) {
        data.password = await User.encryptPassword(data.password);
      }
      const userUpdated = await User.findByIdAndUpdate(id, data, { new: true });
      res.json(userUpdated);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      await Post.deleteMany({ username: user.username });
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
