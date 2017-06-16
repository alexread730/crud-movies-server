
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', (table) => {
    table.increments().primary();
    table.text('name').notNullable();
    table.text('email');
    table.text('password').notNullable();
    table.dateTime('created_at').notNullable();
    table.boolean('is_active').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person');
};
