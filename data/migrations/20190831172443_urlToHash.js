
exports.up = function(knex) {
  return knex.schema.createTable('urlToHash', tbl => {
    tbl.string('url').unique();
    tbl.string('hash').unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('urlToHash');
};
