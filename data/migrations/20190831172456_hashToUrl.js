
exports.up = function(knex) {
  return knex.schema.createTable('hashToUrl', tbl => {
    tbl.string('hash').unique();
    tbl.string('url').unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hashToUrl');
};
