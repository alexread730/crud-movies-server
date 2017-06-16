const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js');
const knex = require('../db/knex');

router.get('/', (req, res) => {
  queries
  .getAll()
  .then(person => {
    res.json({
      person
    })
  })
})

router.get('/:id', (req, res, next) => {
  queries
  .getOne(req.params.id)
  .then(person => {
    res.json({
      person
    })
  })
})

router.get('/:id/movies', (req, res, next) => {
  queries
  .getPersonMovies(req.params.id)
  .then(person => {
    res.json({
      person
    })
  })
})

router.post('/:id/movies', (req, res, next) => {
  queries
  .createMovies(req.body, req.params.id)
  .then(person => {
    res.json(person)
  })
})



module.exports = router;
