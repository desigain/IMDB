//Crear una clase denominada Professional con atributos públicos

// Creando un enumerator para las profesiones y después pasarlas por la clase
export enum profesiones {
    actor = "Actor",
    guionista = "Guionista",
    director = "Director"
}

export class Professional 
{
    //Declaración de atributos o propiedades
    public name: string; 
    public age: number; 
    public genre: string;
    public weight: number;
    public height: number; 
    public hairColor: string; 
    public eyeColor: string;
    public race: string; 
    public isRetired: boolean;
    public nationality: string;
    public oscasrsNumber: number; 
    public profession: profesiones //Los valores del enumerado tienen un valor numérico que empieza por 0 http://lineadecodigo.com/typescript/enumerados-en-typescript/

    //Implementación del método constructor
    constructor (name:string, age:number, genre:string, weight:number, height:number, hairColor:string, eyeColor:string, race:string, isRetired:boolean, nationality:string, oscarsNumber:number, profession:profesiones)
    {
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
    public showAttributes()
    { 
        console.log(`Name: ${this.name}  \n  Age:   ${this.age}  \n  Genre:   ${this.genre}  \n  Weight:  ${this.weight}  \n  Height:   ${this.height } \n  Hair Color:   ${this.hairColor}  \n Eye Color:   ${this.eyeColor } \n  Race:   ${this.race}  \n  Is Retired?   ${this.isRetired}  \n  Nationality:  ${this.nationality}  \n  Oscars Number:   ${this.oscasrsNumber}  \n  Profession:  ${this.profession} \n`);
    }
}


//comentario de prueba
