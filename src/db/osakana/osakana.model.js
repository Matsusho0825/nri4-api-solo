const knex = require("../../knex");

const OSAKANA_TABLE = "osakana";

module.exports = {
  OSAKANA_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */
  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        name: "name",
        habitat: "habitat",
        cost_price: "cost_price",
      })
      .from(OSAKANA_TABLE)
      .limit(limit);
  },
}