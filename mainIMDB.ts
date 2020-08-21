//Requerimos la libreria filesystem para convertir a JSON el objeto IMBD...
const fs = require("file-system");
const file = 'imdbBBDD.json';
// Crear un fichero main pra probar esta clase creando un objeto de tipo IMDB.
//Importamos antes la clase IMDB que hemos creado y también las clases anteriores, Movie, Professional y profesiones, porque serán datos que estén dentro de nuestro objeto IMDB ahora.
import { IMDB } from "./IMDB";
import { Movie } from "./movie";
import { Professional } from "./professional";
import { profesiones } from "./professional";

//Nuestro objeto IMDB es un array de OBJETOS DE LA CLASE MOVIE. Tenemos que crear primero Movies para crearlo después. 
//La clase Movie (y por tanto todos los objetos deesta clase) tenía objetos de clase Professional componiendo algunos de sus atributos. 
//Creamos las películas siguiendo el mismo procedimiento anterior:

// Película 2: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie2 = new Professional ("Santiago Segura", 55, "Masculino", 80, 1.85, "calvo", "marrón", "blanca", false, "española", 0, profesiones.actor);
let actor2Movie2 = new Professional ("Toni Acosta", 48, "Femenino", 55, 1.60, "castaño", "marrón", "blanca", false, "española", 0, profesiones.actor);
let actor3Movie2 = new Professional ("Loles León", 70, "Femenino", 62, 1.60, "negro", "marrón", "blanca", true, "española", 0, profesiones.actor);

//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie2: Professional [] = [actor1Movie2, actor2Movie2, actor3Movie2];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let directorMovie2 = new Professional ("Santiago Segura Silva", 55, "Masculino", 80, 1.85, "calvo", "marrón", "blanca", false, "española", 0, profesiones.director);
let escritorMovie2 = new Professional ("Marta González de Vega", 43, "Femenino", 55, 1.63, "castaño", "marrón", "caucásica", false, "española", 0, profesiones.guionista);

// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie2 = new Movie ("Padre no hay más que uno 2: La llegada de la suegra", 2020, "España", "Comedia | Secuela. Familia");
movie2.actors= actoresMovie2; 
movie2.director = directorMovie2;
movie2.writer = escritorMovie2;
movie2.language ="español";
movie2.platform = "cines";
movie2.isMCU = false; 
movie2.mainCharacterName = "Javier";
movie2.producer = "Santiago Segura";
movie2.distributor = "Sony Pictures Entertainment";

//Película 3: 
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie3 = new Professional ("Tom Hanks", 64, "Masculino", 86, 1.83, "castaño ceniza", "azul", "americana", false, "estadounidense", 1, profesiones.actor);
let actor2Movie3 = new Professional ("Robin Wright", 54, "Femenino", 59, 1.68, "rubio", "azul", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie3 = new Professional ("Gary Sinise", 65, "Masculino", 70, 1.75, "marrón", "gris", "americana", true, "estadounidense", 0, profesiones.actor);

//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie3: Professional [] =  [actor1Movie3, actor2Movie3, actor3Movie3];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie3 = new Professional ("Robert Zemeckis", 68, "Masculino", 74, 1.70, "gris", "marrón", "americana", false, "estadounidense", 1, profesiones.director);
let escritorMovie3 = new Professional ("Eric Roth", 75, "Masculino", 78, 1.80, "negro", "marrón", "americana", true, "estadounidense", 1, profesiones.guionista);

// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie3 = new Movie ("Forrest Gump", 1994, "Estados Unidos", "Comedia/Drama/Romance");
movie3.actors = actoresMovie3; 
movie3.director = directorMovie3;
movie3.writer = escritorMovie3;
movie3.language = "inglés";
movie3.platform = "tv";
movie3.isMCU = false;
movie3.mainCharacterName = "Forrest Gump";
movie3.producer = "Wendy Finerman";
movie3.distributor = "Paramount Pictures";

//Película 4:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie4 = new Professional ("Kristen Bell", 40, "Femenino", 50, 1.55, "rubio", "verdes", "americana", false, "estadounidense", 0, profesiones.actor);
let actor2Movie4 = new Professional ("Indina Menzel", 49, "Femenino", 52, 1.63, "castaño", "amarrón", "americana", false, "estadounidense", 0, profesiones.actor);
let actor3Movie4 = new Professional ("Jonathan Groff", 35, "Masculino", 77, 1.80, "castaño claro", "verde", "americana", false, "estadounidense", 0, profesiones.actor);
let actor4Movie4 = new Professional ("Josh Gad", 39, "Masculino", 72, 1.69, "castaño oscuro", "marrón", "americana", false, "estadounidense", 0, profesiones.actor);
let actor5Movie4 = new Professional ("Santino Fontana", 38, "Masculino", 81, 1.87, "castaño", "azul", "americana", false, "estadounidense", 0, profesiones.actor);

//Creamos el array de objetos professional que incluye nuestros actores para añadirlo en el atributo actores de nuestro objeto Movie. 
let actoresMovie4: Professional [] =  [actor1Movie4, actor2Movie4, actor3Movie4, actor4Movie4, actor5Movie4];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos como atributos de nuestro objeto Movie.
let directorMovie4 = new Professional ("Chris Buck", 62, "Masculino", 88, 1.90, "gris", "azul", "americana", false, "estadounidense", 1, profesiones.director);
let escritorMovie4 = new Professional ("Jennifer Lee", 48, "Femenino", 66, 1.72, "rubio", "azul", "americana", false, "estadounidense", 1, profesiones.guionista);

// Ahora creamos el objeto de clase Movie, rellenando los parámetros del constructor y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie4 = new Movie ("Frozen: El reino del hielo", 2013, "Estados Unidos", "Animación | Infantil | Fantástico | Musical | Aventuras");
movie4.actors = actoresMovie4; 
movie4.director = directorMovie4;
movie4.writer = escritorMovie4;
movie4.language = "español";
movie4.platform = "Amazon Prime Video";
movie4.isMCU = false;
movie4.mainCharacterName = "Elsa";
movie4.producer = "Peter Del Vecho";
movie4.distributor = "Walt Disney Pictures";

//Por último creamos un array de películas (que son OBJETOS DE CLASE MOVIE)
let arrFilms: Movie [] = [movie2, movie3, movie4];

//Ahora podemos crear el objeto de clase IMDB, incluyendo estas películas en un array de Movie, tal y como pide el constructor
let myIMBD = new IMDB (arrFilms);

// console.log(myIMBD.peliculas);  Comprobamos que el objeto IMDB funciona y muestra toa la información de las peliculas, muestras tambien
// la información de los objetos director y guionista

// Guardamos
let movies = JSON.stringify(myIMBD.peliculas);


// Utilizamos el metodo de la libreria filesystem para crear el JSON
fs.writeFile(file, movies, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Archivo guardado correctamente...");
  });

