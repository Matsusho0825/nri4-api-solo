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
    await osakanaModel.delete(req.params.id);
    res.sendStatus(200);
  },
  async edit(req, res) {
    await osakanaModel.edit(req.params.id,req.body.key,req.body.value);
    res.sendStatus(200);
  }
}