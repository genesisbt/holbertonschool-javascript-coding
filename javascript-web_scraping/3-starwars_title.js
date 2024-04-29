#!/usr/bin/node

const request = require('request');


const apiUrl = `https://swapi-api.hbtn.io/api/films/${process.argv[2];}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
    else {
        try {
            const movie = JSON.parse(body);
            if (movie.title) {
                console.log(movie.title);
            } 
            else {
                console.error('Movie title not found');
            }
        } 
        catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    }
});