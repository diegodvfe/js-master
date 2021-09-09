

const elMayor = ( a, b) => ( a > b ) ? a: b;

console.log( elMayor( 20, 15 ));


console.warn('=============')

const edad = ( a, b, c) =>{
  return ( a > b || b > c || c > a) ? a: b ? b: c ? c: a;
}

console.log( edad (27, 24, 40));


console.warn('==========')

const tieneMembresia = ( miembro) => (miembro) ? '2 Dolores' : ' 10 Dolares';
console.log( tieneMembresia(true))// 2 dolares
console.log( tieneMembresia( !false))// 10 dolares

console.warn( '=================')

const  amigos = false;
const arrAmigos = [
  'Diego',
  'Elmer',
  'Dr.Strange',
  amigos ? 'Juan' : ' loki',
  // (()=>'Nick')() // funcion anonima autoinvocada
];

console.log( arrAmigos);

console.warn( '===================')

const pais = 'no' ;
const  ciudad = pais === 'francia' ? 'paris'  :
                pais === 'italia' ? 'roma'  :
                pais === 'grecia' ? 'atenas' :
                pais === 'alemania' ? 'berlin': 'Washingston';

       console.log( { pais, ciudad});










