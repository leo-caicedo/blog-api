const createApp = require("./app");
require("./db");
const { config } = require("./config");
const app = createApp();

app.listen(config.port, (err) => {
  if (err) return console.error(err);
  console.log(`Server on port ${config.port}`);
});
