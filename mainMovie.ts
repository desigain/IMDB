// Crear un fichero main que muestre todos los datos de las películas.
import { Movie } from "./movie";
import { Professional } from "./professional";
import { profesiones } from "./professional";

//Empezamos creando un objeto de tipo Movie: Película 1 para luego poder probar y mostrar todos los datos de la película con el método (una vez que todos los atributos tienen valor)

//Película 1:
//Creamos objetos de clase Professional para añadirlos más tarde en el atributo actors al objeto Movie.
let actor1Movie1 = new Professional(
  "Clark Gable",
  59,
  "Masculino",
  80,
  1.85,
  "marrón",
  "gris",
  "americana",
  true,
  "estadounidense",
  1,
  profesiones.actor
);
let actor2Movie1 = new Professional(
  "Vivien Leigh",
  53,
  "Femenino",
  55,
  1.57,
  "negro",
  "miel",
  "india",
  true,
  "británica",
  2,
  profesiones.actor
);
let actor3Movie1 = new Professional(
  "Leslie Howard",
  50,
  "Masculino",
  73,
  1.78,
  "rubio",
  "marrón",
  "caucásica",
  true,
  "británica",
  0,
  profesiones.actor
);
let actor4Movie1 = new Professional(
  "Olivia de Havilland",
  104,
  "Femenino",
  57,
  1.6,
  "pelirrojo",
  "verde",
  "asiática",
  true,
  "Francesa",
  1,
  profesiones.actor
);
let actorRevelacion = new Professional(
  "Felipe Bedoya",
  32,
  "Masculino",
  80,
  1.75,
  "negro",
  "marrón",
  "developer aburguesada",
  false,
  "boliviana",
  2,
  profesiones.actor
);

// Ahora creamos el array de objetos professional que incluye nuestros actores y los incluimos.
let actoresMovie1: Professional[] = [
  actor1Movie1,
  actor2Movie1,
  actor3Movie1,
  actor4Movie1,
  actorRevelacion,
];

// Creamos los objetos de la clase Professional Director (con atributo profesión director) y Escritor (con atributo profesión guionista) para incluirlos también como atributos de nuestro objeto Movie.
let escritorMovie1 = new Professional(
  "Sidney Howard",
  48,
  "Masculino",
  76,
  1.8,
  "rubio",
  "marrón",
  "americana",
  true,
  "estadounidense",
  1,
  profesiones.guionista
);
let directorMovie1 = new Professional(
  "Victor Fleming",
  59,
  "Masculino",
  78,
  1.75,
  "castaño",
  "verde",
  "americana",
  true,
  "estadounidense",
  1,
  profesiones.director
);

// Ahora podemos crear el objeto de clase Movie, rellenando los parámetros del constructor con los valores creados y, después, A MANO, el resto de atributos que no están en el constructor y son PÚBLICOS (accedemos directamente con punto, no es necesario setter)
let movie1 = new Movie(
  "Lo que el viento se llevó: No me des más tormento",
  1939,
  "Estados Unidos",
  "Dramón | Aventuras | Tragicomedia"
);
movie1.actors = actoresMovie1;
movie1.director = directorMovie1;
movie1.writer = escritorMovie1;
movie1.language = "español (subtítulos en typescript)";
movie1.platform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Scarlett O'Hara";
movie1.producer = "Desirée G.";
movie1.distributor = "Metro-Goldwyn-Mayer (MGM)";

// Para terminar probamos el método showMoviesInfo para mostrar todos los datos de nuestro OBJETO DE CLASE MOVIE.
movie1.showMoviesInfo();
