
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patients').del()
    .then(function () {
      // Inserts seed entries
      return knex('patients').insert([
        {firstName: 'DeAndre', lastName: 'Rodgers'},
        {firstName: 'Jeff', lastName: 'Bridges'},
        {firstName: 'Adam', lastName: 'Stockholm'},
        {firstName: 'April', lastName: 'Ping'},
        {firstName: 'Kimberly', lastName: 'Taylor'},
      ]);
    });
};
