const express = require("express");
const morgan = require("morgan");
const multer = require("multer");

// required routes
const authRoutes = require("./users/routes/auth.routes");
const usersRoutes = require("./users/routes/users.routes");
const postsRoutes = require("./posts/routes/posts.routes");
const categoriesRoutes = require("./posts/routes/categories.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(morgan("dev"));
  app.use(express.json());

  // multer
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(201).json("File has been uploaded");
  });

  // routes
  app.use("/api/auth", authRoutes);
  app.use("/api/users", usersRoutes);
  app.use("/api/posts", postsRoutes);
  app.use("/api/categories", categoriesRoutes);

  return app;
};

module.exports = createApp;
