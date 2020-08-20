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