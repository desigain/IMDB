import { Professional } from "./professional";

export class Movie {
  public title: string;
  public releaseYear: number;
  public actors: Professional[];  // El atributo profesion es actor
  public nacionality: string;
  public director: Professional;  // Su atributo profesion es director
  public writer: Professional;   // Su atributo profesion es guionista
  public language: string;
  public platform: string;
  public isMCU: boolean;
  public mainCharacterName: string;
  public producer: string;
  public distributor: string;
  public genre: string;

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

  public showMovies() {
    console.log(
      `\n Titulo :${this.title} \n Año: ${this.releaseYear} \n País: ${this.nacionality} \n Género: ${this.genre} \n`
    );
  }
}
