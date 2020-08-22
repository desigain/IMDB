import { IMDB } from "./IMDB";
import { Movie } from "./movie";
// import { Professional } from "./professional";
// import { profesiones } from "./professional";
const fs = require("file-system");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Titulo: ", function (title: string) {
  // let test = title;

  let movie1 = new Movie(title, 3, "aaa646", "drama");
  let movie2 = new Movie(title, 6, "jajjajaja", "comica");
  // console.log(movie1);

  let objetoPrueba: IMDB = new IMDB([]);

  // //   objetoPrueba.escribirJSON("prueba.json");

  objetoPrueba.obtenerInstancia("prueba.json");
  console.log(objetoPrueba);
  console.log(objetoPrueba.peliculas);

  objetoPrueba.peliculas.push(movie1);

  console.log(objetoPrueba);

  objetoPrueba.escribirJSON("prueba.json");

  //   console.log(infoJSON);

  //   objetoPrueba.escribirJSON("prueba.json");
  readline.close();
});

