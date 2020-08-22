//Crear una clase denominada IMDB cuyo constructor reciba un array de objetos de la clase Movie
const fs = require("file-system");
import { Movie } from "./movie";

export class IMDB {
  //Declaración de atributos o propiedades
  public peliculas: Movie[];

  //Implementación del método constructor
  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas;
  }

  public escribirJSON(nombreFichero: string) {
    //
    let stringConversor = JSON.stringify(this.peliculas);
    fs.writeFile(nombreFichero, stringConversor);
  }

  public obtenerInstancia(elNombreDeMiArchivo: string) {
    let file = fs.readFileSync(elNombreDeMiArchivo);

    let objetizador = JSON.parse(file);

      this.peliculas = objetizador
  }
}

// peliculas.escribirJSON("desi.json");
