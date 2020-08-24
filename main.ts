import { IMDB } from "./IMDB";
import { Movie } from "./movie";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Titulo: ", function (title: string) {
  readline.question("Año: ", function (releaseYear: number) {
    readline.question("País: ", function (nacionality: string) {
      readline.question("Género: ", function (genre: string) {
        let movie1 = new Movie(title, releaseYear, nacionality, genre);
        let movie2 = new Movie(title, releaseYear, nacionality, genre);

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
    });
  });
});
