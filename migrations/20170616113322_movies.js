
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments().primary();
    table.text('title').notNullable();
    table.integer('year').notNullable();
    table.text('director').notNullable();
    table.integer('person_id').references('person.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
