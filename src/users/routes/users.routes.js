const router = require("express").Router();

// controllers
const UserController = require("../controllers/users.controller");
const userController = new UserController();

router.get("/", userController.listUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
