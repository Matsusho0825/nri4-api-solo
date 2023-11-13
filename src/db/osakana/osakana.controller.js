const osakanaModel = require("./osakana.model");

module.exports = {
  async index(req, res) {
    const fishes = await osakanaModel.getAll();
    res.json(fishes);
  }
}