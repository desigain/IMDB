let fs = require('file-system');
import {IMDB} from './IMDB';
import {Movie} from './movie';


let movieOne = new Movie("Frozen II", 2020, "EEUU", "Infantil");
let movieTwo = new Movie("Rambo", 1998, "China", "Acción");
let totalMovie = new IMDB([movieOne, movieTwo]);

console.log(totalMovie.peliculas[0].nacionality);
console.log(totalMovie.peliculas[1].showMovies());
console.log(totalMovie.peliculas[0].genre);


let movies = JSON.stringify(totalMovie);

console.log(movies);


// console.log(JSON.stringify(totalMovie.peliculas[0]));

