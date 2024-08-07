#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body).results;
    const wedgeFilms = films.filter(film => film.characters.includes('https://swapi-api.hbtn.io/api/people/18/'));
    console.log(wedgeFilms.length);
  }
});