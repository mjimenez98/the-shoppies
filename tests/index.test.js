const request = require('supertest')
const nock = require('nock')

const app = require('../index')

describe('Endpoints', () => {
  test('return OMDb movies', async () => {
    const scope = nock('http://www.omdbapi.com')
      .get('/?apikey=12345&type=movie&s=vertigo')
      .reply(200, {
        "Search": [
          {
            "Title": "Vertigo",
            "Year": "1958",
            "imdbID": "tt0052357",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
          },
        ],
      })

    const res = await request(app)
      .get('/api/getMovies')
      .query({ search: 'vertigo' })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toMatchSnapshot()
  })
})
