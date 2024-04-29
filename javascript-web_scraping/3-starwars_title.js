#!/usr/bin/node

const request = require('request');


const URL = `https://swapi-api.hbtn.io/api/films/${process.argv[2];}`;

function gettitle (URL) {
    request.get(URL, (error, response, body) => {
        if (error) {
            console.error(error);
        return;
        }
  
        const movie = JSON.parse(body);
        console.log(movie.title);
    });
}

gettile(URL);
