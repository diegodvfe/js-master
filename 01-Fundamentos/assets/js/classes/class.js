

class Persona{

static _coteo = 0;
static get conteo(){ //
  return Persona._coteo + `instancias`;
}  // estamos viendo quienes consumer todos los elementos del constructor

static mensaje () {
  console.log(this.nombre);
  console.log( `Hola desde el mundo estatico` )
}

    nombre = ``;
    codigo = ``;
    frase  = ``;
    comida = '';

    constructor(nombre = `Sin Nombre`, codigo = `Sin codigo de vida`, edad = `Sin edad`){

      this.nombre = nombre;
      this.codigo = codigo;
      this.edad   = edad;


      Persona._coteo++; // se hace la referencia al nombre de la clase y se hace
                      // hace en dentro del constructor para inicializar la secuencia

    }
    set setComidaFavorita ( comida ){
      this.comida = comida.toUpperCase();
    }

    get getComidaFavorita ( ){
      return `La comida favoita de ${this.nombre} es ${this.comida }`;
    }

    quienSoy(){
      console.log( `Soy ${ this.nombre} tu hermano mayor ${this.frase}`)
    }

    miFrase(){
      this.quienSoy();
      console.log( `${this.nombre}  y me identida es  ${ this.edad}`);

    }
}

const spiderman = new Persona('Peter', 'SpiderMan I', 'NO tengo edad');
const superman = new Persona('Jesus', 'Libertador', 'NO tengo edad');
// console.log( spiderman);
// console.log(superman);

spiderman.miFrase();
// superman.quienSoy();

spiderman.setComidaFavorita = `El pie de calabaza`;
// console.log( spiderman.comida)

// console.log( spiderman.getComidaFavorita);

console.log( `conteo`, Persona._coteo);
console.log( Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log( Persona.propiedadExterna);
console.log( Persona );




