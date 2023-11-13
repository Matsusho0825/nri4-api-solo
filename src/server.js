const express = require("express");
const app = express();
app.use(express.json());

const osakanaController = require("./db/osakana/osakana.controller");

const setupExpressServer = () => {
  /* return configured express app */
  app.get("/teapot", (req, res) => {
    res.status(418).send("I'm a teapot");
  });
  
  app.get("/api/fishes", osakanaController.index);
  return app;
}

module.exports = { setupExpressServer };

