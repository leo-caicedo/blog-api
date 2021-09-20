const express = require("express");
const morgan = require("morgan");

// required routes
const authRoutes = require("./users/routes/auth.routes");

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

  return app;
};

module.exports = createApp;
