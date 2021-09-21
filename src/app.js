const express = require("express");
const morgan = require("morgan");

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

  app.get("/", (req, res) => {
    res.json({ message: "Todo bien" });
  });

  // routes
  app.use("/api/auth", authRoutes);
  app.use("/api/users", usersRoutes);
  app.use("/api/posts", postsRoutes);
  app.use("/api/categories", categoriesRoutes);

  return app;
};

module.exports = createApp;
