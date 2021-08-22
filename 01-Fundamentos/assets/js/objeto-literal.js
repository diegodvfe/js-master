
 let personaje = {
    nombre: 'Diego',
    codeName: 'Diegodev',
    edad: 34,
    vivo: false,
    coords: {
      lat: 34.034,
      lng: -118.90
    },
    trajes: ['Hulk', 'Mario', 'Luigui'],
    direccion: {
      zip: '03008',
      domicilio: 'San Lucas',
      departamento: 'Sacatepequez'
    },
    experienciaLaboral: {
      primerTrabajo: 'Minfin',
      segundoTrabajo: 'Traeguate'
    },
    'ultima-pelicula': 'Iroman'
 }

console.log(personaje)
 console.log('Actor: ', personaje.experienciaLaboral.primerTrabajo);
console.log('Actor', personaje['vivo']);

console.log('Actor:', personaje.trajes.length);
console.log('Ultimo traje del Actor:', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('vivo', personaje[x]);

console.log('Ultima pelicula', personaje["ultima-pelicula"]);

// Mas detalles

 delete personaje.edad // Delete sirve para poder eliminar un elemento dentro del objeto en este caso edad
 console.log(personaje);

 personaje.casado = true;// Al utilizar la propiedades de booleanas como el true Javascript reconoce y crear un nuevo objeto

 const entriesPares = Object.entries( personaje); // La propiedad de Object nos sirve para determinar el objeto y Entrise es para crear pares
 console.log(entriesPares);

 Object.freeze( freeze ); // Esta propiedad freeze sirve para que no haya cambios en los objetos generales pero no en el los especificos

 personaje.dinero = 3900399; //
 personaje.casado = false;
 personaje.direccion.departamento = 'Guatemala' // En este caso hubo un cambio, ya teniendo el metodo freeze
 console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
const name = Object.filter(personaje)
console.log({propiedades, valores, name});

