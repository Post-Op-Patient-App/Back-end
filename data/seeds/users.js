const bcrpyt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'Doctor', password: bcrpyt.hashSync('PassWord20@$', 10), 'doctor': true},
        {userName: 'Nurse', password: bcrpyt.hashSync('PassWord20@$', 10), 'doctor': false},
      ]);
    });
};
