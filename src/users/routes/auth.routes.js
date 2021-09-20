const router = require("express").Router();

// controllers
const AuthController = require("../controllers/auth.controller");
const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
