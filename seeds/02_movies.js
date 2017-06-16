
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE movies RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Police Academy',
          year: 1984,
          director: 'Hugh Wilson',
          person_id: 1
        },
        {
          title: 'Police Academy 2: Their First Assignment',
          year: 1985,
          director: 'Jerry Paris',
          person_id: 1
        },
        {
          title: 'Police Academy 3: Back in Training',
          year: 1986,
          director: 'Jerry Paris',
          person_id: 1
        },
        {
          title: 'Taken',
          year: 2008,
          director: 'Pierre Morel',
          person_id: 2
        },
        {
          title: 'Taken 2',
          year: 2012,
          director: 'Olivier Megaton',
          person_id: 2
        },
        {
          title: 'Taken 3',
          year: 2014,
          director: 'Olivier Megaton',
          person_id: 2
        },
        {
          title: 'Saturday Night Fever',
          year: 1977,
          director: 'John Badham',
          person_id: 3
        },
        {
          title: 'Grease',
          year: 1978,
          director: 'Randal Kleiser',
          person_id: 3
        },
        {
          title: 'Urban Cowboy',
          year: 1980,
          director: 'James Bridges',
          person_id: 3
        }
      ]);
    });
};
