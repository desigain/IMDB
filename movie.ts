//Crear una clase Movie con todos los atributos públicos y title, releaseYear y nacionality como únicos parámetros del constructor.

//Importamos clase profesional para los atributos actors, director y writer de nuestra clase Movie.
import { Professional } from "./professional";

export class Movie {
  public title: string;
  public releaseYear: number;
  public actors: Professional[]; // El atributo profesion es actor
  public nacionality: string;
  public director: Professional; // Su atributo profesion es director
  public writer: Professional; // Su atributo profesion es guionista
  public language: string;
  public platform: string;
  public isMCU: boolean;
  public mainCharacterName: string;
  public producer: string;
  public distributor: string;
  public genre: string;

  //Implementacion del método constructor
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

  public showMoviesInfo() { // Muestra todos los datos de las películas
    console.log(
      "Titulo: " + this.title + "\n" + "Año de Lanzamiento: " + this.releaseYear
    );
    console.log("Actores: ");

    for (
      let i = 0;
      i < this.actors.length;
      i++ // Creamos un buclee porque el atributo actores es un ARRAY DE OBJETOS DE CLASE PROFESSIONAL. De esta manera podemos acceder al atributo nombre de cada uno.
    ) {
      console.log(this.actors[i].showAttributes()); // se pueden sacar todos los atributos llamando al método showAttributes()
    }

    console.log(
      "Nacionalidad: " +
      this.nacionality +
      "\n" +
      "Director: " +
      this.director.name + //continuamos con el resto del mensaje a mostrar. Tanto director como guionista son OBJETOS DE CLASE PROFESIONAL pero podemos acceder a sus atributos directamente al no ser un array.
        "\n" +
        "Guionista: " +
        this.writer.name +
        "\n" +
        "Idioma: " +
        this.language +
        "\n" +
        "Plataforma: " +
        this.platform +
        "\n" +
        "Is MCU?: " +
        this.isMCU +
        "\n" +
        "Nombre del protagonista: " +
        this.mainCharacterName +
        "\n" +
        "Productor: " +
        this.producer +
        "\n" +
        "Productora: " +
        this.distributor +
        "\n" +
        "Género: " +
        this.genre +
        "\n"
    );
  }
}
