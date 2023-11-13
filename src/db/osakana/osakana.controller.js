const osakanaModel = require("./osakana.model");


module.exports = {
  async index(req, res) {
    const fishes = await osakanaModel.getAll();
    res.json(fishes);
  },
  async register(req, res) {
    const registeredFishId = await osakanaModel.register(req.body.fish);
    res.sendStatus(200);
  },
  async delete(req, res) {
    await osakanaModel.delete(req.body.id);
    res.sendStatus(200);
  }
}