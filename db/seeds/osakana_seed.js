/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('osakana').del()
  await knex('osakana').insert([
    {id: 1, name: "sake",habitat: "japan",cost_price: 100},
    {id: 2, name: "hokke",habitat: "finland",cost_price: 200},
  ]);
};
