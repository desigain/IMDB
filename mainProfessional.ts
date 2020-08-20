import { Professional } from './IMDB';
import { profesiones } from './IMDB';


let actor = new Professional("Desiree", 26, "Drama", 65, 1.70, "Castaño", "Marrón", "Escritora", false, "Española", 6, profesiones.actor);
let trabajador2 = new Professional ("Elsa Frozen", 70, "Mujer", 58, 1.60, "Gris", "Azul", "narnia", true, "congelada", 8, profesiones.guionista);
let trabajador3 = new Professional ("Olaf", 18, "Hombre", 70, 1.80, "rubio con estalactitas", "verde", "blanca", false, "italiana", 1, profesiones.actor);

actor.showAttributes();
trabajador2.showAttributes();
trabajador3.showAttributes();


