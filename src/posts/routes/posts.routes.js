const router = require("express").Router();

// controllers
const PostController = require("../controllers/posts.controller");
const postController = new PostController();

router.get("/", postController.listPost);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
