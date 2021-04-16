
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Bruce Wayne'},
        {id: 2, name: 'Tommy Shelby'},
        {id: 3, name: 'Barrack Obama'}
      ]);
    });
};
