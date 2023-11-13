const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));

const osakanaController = require("./db/osakana/osakana.controller");

const setupExpressServer = () => {
  /* return configured express app */
  app.get("/teapot", (req, res) => {
    res.status(418).send("I'm a teapot");
  });

  app.get("/api/fishes", osakanaController.index);

  app.post("/api/fishes", osakanaController.register);
  return app;
}

module.exports = { setupExpressServer };

