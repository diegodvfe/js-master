

function crearPersonas (nombre, apellido ){
  return {
    nombre: nombre, // este es un modo el cual ejecuta aqui Diego de manera en Ecmascript 5
    apellido // Y este es la manera mas facil, ya que es JS reconoce que queremos un parametro de la funcion en este caso apellio
  }
}



const persona = crearPersonas( 'Diego', ' Lopez');
console.log( persona);

// ---------------------------------------------------------------
const personal = ( nombre, apellidos) => ({ nombre, apellidos}); // sin los parantesis nos va a provocar un error en los parametros por lo cual nos aparecer undefiended

const personales = personal ( 'Francisco', ' Alvarado');
console.log( personales);

// -----------------------------------------------------------------------

function impremeArgumentos ( ) {
  console.log( arguments); // la propiedad arguments nos permite poder pasar datos que no estan definidos
}
console.log( impremeArgumentos( 'gg', 10, false, true, 'diego', ' Hallo'));

// ------------------------------------------------------------------------------------------------------
             // Parametro Rest... TENER EN CUENTA QUE SOLO SE PUEDE UTILIZAR EN PRIMER LUGAR
             // EJEMPLO; 1. ( ...args, edad) Esto no es posible porque marca un error
             //          2. ( edad, ...args) Een esta la edad va tomar el primer el argumentos es : Sofia
             //          3.
 const imprimirArgumentos2 = (edad, ...arguments) =>{ // ... significa que va a trabajar sobre todos los elementos que hay en en ImprimirArgumentos2
   console.log( { edad, arguments});
}

imprimirArgumentos2( 'sofia', 38, false, true, )

// ---------------------------------Desestructuracion de objetos--------------------------------------------------

// 1. Debe de ir por defecto las funciones de primero

const imprimirPropiedades = ({ nombre, codeName, vivo, edad = 67, estado_civil, trajes}) => {
  console.log( {nombre});
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad});
  console.log({ estado_civil});
  console.log({trajes});
}

const diego = {
  nombre: " Tony",
  codeName: ' Iromas',
  vivo: true,
  // edad: 0,   // Este 
  estado_civil: 'casado',
  trajes: [ 'Mark I', 'Mark V', 'Hulkerbanker']
};

imprimirPropiedades( diego );





