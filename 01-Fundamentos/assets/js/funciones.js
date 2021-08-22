

function saludar () {
  console.log( arguments );
  console.log('Hola Mundo');
}

const saludar2 = function(name){
  console.log('Hola Mundo ' + name)
}

function bienvendia (nombre){
  console.log('Bienvenido ' + nombre)
}

const apelle = (chio) =>{
  console.log('Chiao ' + chio)
}



saludar( 'Diego', 40, true, 'Costa Rica');// con el console.log( arguments) se puede determinar agregar en la consola.
// saludar2('Fernando');
// bienvendia('Vanessa');

apelle('Diego Alvarado')