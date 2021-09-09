
function saludar ( ){
  console.log('Hola Mundo');// este es un metodo que esta defenido
}
// se ejecuta llamando a la funcion
saludar( );

const saludar2 = function(){ // al usar la propiedad const no permite cambiar la variable
  console.log('Hola Mundo');
}
// saludar2();

function saludar3 ( nombre){
  console.log('Hola ' + nombre); // impresion // Hola Diego
}
saludar3( ' Diego') //  al pasar un parametro se imprime 1

const saludarFlecha = ( nombre) => {
  console.log('Hola Flecha ' + nombre);
}
saludarFlecha('Sofia')

// ----------------------------------------------------------------------

function argumentos (nombre) {
  // console.log( 'Hola ' + nombre)
  // console.log( arguments );
  return 1;       // al momento de escribir un consolo.log no se va ejecutar por una sola cosa

                  //   1. La primera es que el retorno significa que hasta ahi va poder leer el codigo.
                  //   2. Javascript no permite


}

const retornoDeSaludar = argumentos('Vanessa' , 31, false, 'Alemania' );

console.log({retornoDeSaludar});
argumentos(' diego');

//----------------------- Ejercicios de Funciones----------------------------------------------------

function sumar ( a, b){
  return a + b;
}

console.log( sumar(57,4));

const sumar2 = (a,b) => {
  return a + b;
}

console.log(sumar2( 3,5) );

const sumar3 = (c, d) => c +d; // unicamente cuando se ejecuta una sola cosa
console.log(sumar3( 38, 5));


function getAleatorio (){
  return  Math.random();
}
console.log( getAleatorio());

const getAleatorio2 = () => Math.random;
console.log( getAleatorio2());

