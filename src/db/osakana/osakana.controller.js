const osakanaModel = require("./osakana.model");

module.exports = {
  async index(req, res) {
    const fishes = await osakanaModel.getAll();
    res.json(fishes);
  },
  async serch(req, res) {
    const fish = await osakanaModel.getById(req.params.id);
    res.json(fish);
  },
  async register(req, res) {
    const fish = await osakanaModel.getById(req.body.fish.id);
    if (fish[0]) {
      res.sendStatus(400).send("failed");
    } else {
      await osakanaModel.register(req.body.fish);
      res.sendStatus(200).send("success");
    }
  },
  async delete(req, res) {
    await osakanaModel.delete(req.params.id);
    res.sendStatus(200).send("success");
  },
  async edit(req, res) {
    await osakanaModel.edit(req.params.id, req.body.key, req.body.value);
    res.sendStatus(200);
  },
};
