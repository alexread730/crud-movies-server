
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {
          name: 'Bob Stanky',
          email: 'stanky@stink.com',
          password: 'WhoLetTheStankOut300',
          is_active: true
        },
        {
          name: 'Freddy Fungus',
          email: 'moldyfreddy@aol.com',
          password: 'penicillin39',
          is_active: true
        },
        {
          name: 'Ron Burgundy',
          email: 'lovepanther@news.com',
          password: '1000curlsaday',
          is_active: true
        },
      ]);
    });
};
