# The Shoppies
UX &amp; Web Developer Shopify Intern Challenge Winter 2021

## What is this project?
The Shoppies is a website for users to nominate up to 5 of their favorite movies to The Shoppies :star:

This project has been created with the purpose of participating in Shopify's Winter 2021 internship program, therefore development of new features or long-run maintainership is unlikely. There are a few things I might try out before I officially say farewell; nevertheless, everyone is welcome to start a fork and code away!

## Setup
1. Clone the repo using your favorite method.
2. Open two tabs in the terminal.
2. Tab 1: `cd ~/the-shoppies`
3. Tab 1: `npm install`
4. Tab 2: `cd ~/the-shoppies/client/`
5. Tab 2:`npm install && npm run build`
6. Tab 2: `npm run start-dev`
7. Tab 1: `npm start`

## Usage
The Shoppies contains one Express API server at the root of the project structure, and one React app in `~/the-shoppies/client/`.

When the viewer searches for a movie, the React app calls the Express API, which calls the [OMDb API](https://www.omdbapi.com/) to find results. These results then flow in the opposite direction going through the Express API and the React app for the user to see.

After that they can nominate movies and remove them. Users can select up to 5 movies.

<img width="1280" alt="Screen Shot 2020-09-08 at 5 08 32 AM" src="https://user-images.githubusercontent.com/10281272/92456770-5cefe900-f191-11ea-90a7-6c56d099dbfe.png">

## Testing
At the moment there are 3 required checks running on GitHub Actions for any incoming pull request:
- Client TypeScript & CSS linter: `cd ~/the-shoppies/client/ && npm run lint`
- Client test runner: `cd ~/the-shoppies/client/ && npm test`
- Server test runner: `cd ~/the-shoppies && npm test`

## Deploying
This website is live at https://mjimenez98-the-shoppies.herokuapp.com

Deployment is done exclusively through my (@mjimenez98) Heroku account.

## How this project was created
- Bootstrap
- Enzyme
- Express
- Heroku
- Jest
- Nock
- Nodemon
- OMDb API
- React (create-react-app)
- Supertest
- TypeScript
