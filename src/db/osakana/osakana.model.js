const knex = require("../../knex");

const OSAKANA_TABLE = "osakana";

module.exports = {
  OSAKANA_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */
  getAll() {
    return knex(OSAKANA_TABLE).select({
      id: "id",
      name: "name",
      habitat: "habitat",
      cost_price: "cost_price",
    });
  },
  getById(id) {
    return knex(OSAKANA_TABLE)
      .select({
        id: "id",
        name: "name",
        habitat: "habitat",
        cost_price: "cost_price",
      })
      .where("id", id);
  },

  register(fish) {
    return knex(OSAKANA_TABLE).insert(
      [
        {
          id: fish.id,
          name: fish.name,
          habitat: fish.habitat,
          cost_price: fish.cost_price,
        },
      ],
      ["id"]
    );
  },

  delete(id) {
    return knex(OSAKANA_TABLE).where("id", id).del();
  },

  edit(id, key, value) {
    return knex(OSAKANA_TABLE).where("id", id).update(key, value);
  },
};
