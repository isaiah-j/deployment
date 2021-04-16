exports.up = function (knex) {
  return knex.schema.createTable("people", (tbl) => {
    tbl.increments();
    tbl.string("name");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("people");
};
