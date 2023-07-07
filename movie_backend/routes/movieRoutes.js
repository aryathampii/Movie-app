const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Define your API endpoints for movies
router.get('/', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch movies' });
    });
});

router.post('/', (req, res) => {
  const { title, director, year } = req.body;
  const movie = new Movie({ title, director, year });

  movie.save()
    .then((savedMovie) => {
      res.status(201).json(savedMovie);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to save movie' });
    });
});

module.exports = router;
