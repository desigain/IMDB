"use strict";
//Crear una clase denominada Professional con atributos públicos
exports.__esModule = true;
exports.Professional = exports.profesiones = void 0;
// Creando un enumerator para las profesiones y después pasarlas por la clase
var profesiones;
(function (profesiones) {
    profesiones["actor"] = "Actor";
    profesiones["guionista"] = "Guionista";
    profesiones["director"] = "Director";
})(profesiones = exports.profesiones || (exports.profesiones = {}));
var Professional = /** @class */ (function () {
    //Implementación del método constructor
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscasrsNumber = oscarsNumber;
        this.profession = profession;
    }
    //Otros métodos
    Professional.prototype.showAttributes = function () {
        console.log("Name:   " + this.name + "  \n  Age:   " + this.age + "  \n  Genre:   " + this.genre + "  \n  Weight:  " + this.weight + "  \n  Height:   " + this.height + " \n  Hair Color:   " + this.hairColor + "  \n Eye Color:   " + this.eyeColor + " \n  Race:   " + this.race + "  \n  Is Retired?   " + this.isRetired + "  \n  Nationality:  " + this.nationality + "  \n  Oscars Number:   " + this.oscasrsNumber + "  \n  Profession:  " + this.profession + " \n");
    };
    return Professional;
}());
exports.Professional = Professional;
