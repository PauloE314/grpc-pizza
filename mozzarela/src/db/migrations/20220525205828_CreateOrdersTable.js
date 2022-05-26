/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id");
    table.integer("userId").unsigned().index().notNullable();
    table.string("name").index().notNullable();
    table.integer("price").unsigned().notNullable();
    table.boolean("finished").defaultTo(false).notNullable();
    table.string("description");
    table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .table("orders", (table) => {
      table.dropIndex("userId");
      table.dropIndex("name");
    })
    .then(() => knex.schema.dropTable("orders"));
};
