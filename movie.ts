export class Movie {
  public title: string;
  public releaseYear: number;
  public actors: string;
  public nacionality: string;
  public director: string;
  public writer: string;
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

  showMovies() {
    console.log(
      `\n Titulo :${this.title} \n Año: ${this.releaseYear} \n País: ${this.nacionality} \n Género: ${this.genre} \n`
    );
  }
}
