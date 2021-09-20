const express = require("express");
const morgan = require("morgan");

const createApp = () => {
  const app = express();
  // middleware
  app.use(morgan("dev"));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Todo bien" });
  });

  return app;
};

module.exports = createApp;
