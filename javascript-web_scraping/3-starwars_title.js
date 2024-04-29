#!/usr/bin/node

const request = require('request');


const apiUrl = `https://swapi-api.hbtn.io/api/films/${process.argv[1];}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  else
  const movie = JSON.parse(body);
  console.log(movie.title);
});