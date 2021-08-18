
let juegos = ['Mario', 'Zelda', 'Chrono', 'thanos'];

console.log('Largo:', juego.length);


let primero = juegos[0];
let ultimo = juegos[juego.length - 1];

console.log({primero, ultimo});

juego.forEach( (elemento, indice, arr)=>{
  console.log({elemento, indice, arr})
} );

let nuevaLongitud = juegos.push('Eeto');
console.log({nuevaLongitud, juego});

nuevaLongitud = juegos.unshift('Fire Emble');
console.log( nuevaLongitud, juego);

let juegoBorrado = juegos.pop()
console.log(juegoBorrado, juego);

let pos = 1;

juegos.splice( pos, 1);

// class ThreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }