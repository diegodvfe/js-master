

const fer = {
  nombre: 'fernando',
  edad: 18,
  imprimir(){// se agrega un metodo para imprimir el dato
    console.log( `Nombre ${this.nombre} - edad ${this.edad}`)
  }
}


const melissa = {
  nombre: `melissa`,
  edad: 45,
   imprimir(){
    console.log( `Nombre ${this.nombre} - edad ${this.edad}`)
  }
}

// fer.imprimir();

console.warn('Nueva herencia');
//you must to crete a property of new to call the new instans
function Persona(nombre, edad){
  console.log( 'Se ejecuto esta linea')

  this.nombre = nombre,// estamos creando una propiedad de Persona llamada nombre
         edad = edad;

  this.imprimir = function (){
    console.log( `Nombre ${this.nombre} - edad ${this.edad}`) // creamos la propiedad de funcionalidad para que funcione
  }


}
    // new significa una nueva instancia
const maria = new Persona(`Maria`, 24);
const melissa = new Persona( `Melissa`, 60);
maria.imprimir();
melissa.imprimir();