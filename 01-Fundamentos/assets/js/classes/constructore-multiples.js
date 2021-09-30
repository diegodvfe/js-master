

class Persona {
// static nos permite poder tener multiples constructores
  static porObjeto({nombre, apellido, pais}){ // destructuracion de los parametros del contructor
    return new Persona( nombre, apellido, pais);
  }

  constructor( nombre, apellido, pais){
    this.nombre  = nombre
    this.apellido = apellido
    this.pais = pais
  }

  getIngo(){
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
  }
}

const nombre1 = 'Melissa',
      apellido1 = 'Lopez',
      pais1 = ' Inglaterra';

const diego = {
  nombre: 'Diego',
  apellido: 'Lopez',
  pais: 'Guatemala'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( diego);// no lleva instacia de new

persona1.getIngo();// llamamos a persona1 y utilizamos el metodo de getInfo para pintar en consola
persona2.getIngo();
