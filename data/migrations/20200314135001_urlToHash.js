
exports.up = function(knex) {
  return knex.schema.createTable("urlToHash", tbl => {
      tbl.increments();
      tbl.string("url").unique().notNullable();
      tbl.string("hash").unique().notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("urlToHash");
};
