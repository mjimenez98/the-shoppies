const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
const directory = __dirname.replace('/server','');

// Serve static files from the React app
app.use(express.static(path.join(directory, '/client/build')));

// Put all API endpoints under '/api'
app.get('/api/getMovies', async (req, res) => {
  console.log(`Request received for /api/getMovies`);
  let movies;

  try {
    const type = 'movie';
    const s = req.query.search;

    await fetch(`${'http://www.omdbapi.com/?'
      + 'apikey='}${process.env.OMDB_KEY
    }&type=${type
    }&s=${s}`)
      .then((response) => response.json())
      .then((response) => { movies = response })
  } catch (error) {
    console.error(error);
  }

  console.log(`Sending response for /api/getMovies`);
  res.json(movies);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(directory + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express app listening on ${port}`)
