
let juegos = ['Zelda', 'Mario', 'Metroid', 'Choro'];

console.log('Largo:', juegos.length);


let primero = juegos[2 -2 ];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr)=>{  // ejecuta una instruccion por cada elemento
  console.log({elemento, indice, arr})
} );

let nuevaLongitud = juegos.push('F-Zero'); // Push para poner un elemento de ultimo
console.log({nuevaLongitud, juegos});

    nuevaLongitud = juegos.unshift('Fire Emble'); // Unshift para poner un elemento a inicio de la cadena
console.log( nuevaLongitud, juegos);

let juegoBorrado = juegos.pop() // Pop sirve para borrar el ultimo elemento dentro de array
console.log({juegoBorrado, juegos});


let pos = 1;
console.log(juegos);

let juegosBorrados = juegos.splice(pos, 2 ); // Splice sirve para borrar elmentos de forma ordenada 0 hasta donde termine el arreglo
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid');// el Indexof sirve para buscar un elemento dentro una array
console.log( {metroidIndex} );



