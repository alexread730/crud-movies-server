const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('person');
  },

  getOne(id) {
    return knex('person').where('person.id', id);
  },

  getPersonMovies(id) {
    return knex('movies').where('person_id', id);
  },

  createMovies(movie, id) {
    return knex('movies').insert({
      title: movie.title,
      director: movie.director,
      year: movie.year,
      person_id: id
    })
  }
}
