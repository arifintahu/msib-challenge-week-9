const express = require("express");
const routes = require("./routes");
const { API } = require("./config");
const { errorHandler, morganMiddleware } = require("./middlewares");

function createServer() {
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(morganMiddleware);
  app.use(`/${API}`, routes);
  app.use(errorHandler);

  return app;
}

module.exports = createServer;
