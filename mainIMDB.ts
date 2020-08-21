const fs = require("file-system");
const file = 'imdbBBDD.json';
import { IMDB } from "./IMDB";
import { Movie } from "./movie";

let movieOne = new Movie("Frozen II", 2020, "EEUU", "Infantil");
let movieTwo = new Movie("Rambo", 1998, "China", "Acción");
let totalMovie = new IMDB([movieOne, movieTwo]);

console.log(totalMovie.peliculas[0].nacionality);
console.log(totalMovie.peliculas[1].showMoviesInfo());
console.log(totalMovie.peliculas[0].genre);

let movies = JSON.stringify(totalMovie);

console.log(movies);

fs.writeFile(file, movies, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Archivo guardado correctamente...");
});


// console.log(JSON.stringify(totalMovie.peliculas[0]));
