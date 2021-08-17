
let juegos = ['Mario', 'Zelda', 'Chrono', 'thanos'];

console.log('Largo:', juego.length);


let primero = juego[0];
let ultimo = juego[juego.length - 1];

console.log({primero, ultimo});

juego.forEach( (elemento, indice, arr)=>{
  console.log({elemento, indice, arr})
} );

let nuevaLongitud = juego.push('Eeto');
console.log({nuevaLongitud, juego});

juego.unshift()
