// models
const Post = require("../models/Post");

class PostController {
  async listPost(req, res, next) {
    const { username } = req.query;
    const { cat } = req.query;
    try {
      let posts = await Post.find({});
      if (username) {
        posts = await Post.find({ username });
      }
      if (cat) {
        posts = await Post.find({
          categories: {
            $in: [cat],
          },
        });
      }
      res.json(posts);
    } catch (err) {
      next(err);
    }
  }

  async getPost(req, res, next) {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  async createPost(req, res, next) {
    const { body: newPost } = req;
    try {
      const postCreated = new Post(newPost);
      await postCreated.save();
      res.status(201).json(postCreated);
    } catch (err) {
      next(err);
    }
  }

  async updatePost(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;
    try {
      const postUpdated = await Post.findOneAndUpdate(id, data, { new: true });
      res.json(postUpdated);
    } catch (err) {
      next(err);
    }
  }

  async deletePost(req, res, next) {
    const { id } = req.params;
    try {
      await Post.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PostController;
