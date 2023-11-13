/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("osakana", function (table) {
        table.increments("id").primary();
        table.string("name", 32);
        table.string("habitat", 64);
        table.decimal("cost_price", 32,2);
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Osakana");
};
