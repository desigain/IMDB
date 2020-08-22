//Crear una clase denominada IMDB cuyo constructor reciba un array de objetos de la clase Movie
import {Movie} from "./movie"

  export class IMDB 
  {
    //Declaración de atributos o propiedades
    public peliculas: Movie [];

    //Implementación del método constructor
    constructor(peliculas: Movie[])
    {
      this.peliculas = peliculas;
    }
  }
  rl.question ("Título: " +  "Año de lanzamiento: " + "Nacionalidad: " +  "Género: ")

  constructor(
    title: string,
    releaseYear: number,
    nacionality: string,
    genre: string
  ) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nacionality = nacionality;
    this.genre = genre;
  }
