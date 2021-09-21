const router = require("express").Router();

// controllers
const CategoryController = require("../controllers/categories.controller");
const categoryController = new CategoryController();

router.get("/", categoryController.listCategories);
router.get("/:id", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
