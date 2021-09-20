const router = require("express").Router();

// controllers
const UserController = require("../controllers/auth.controller");
const userController = new UserController();

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
