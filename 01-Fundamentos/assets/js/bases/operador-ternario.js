
/**
    * Dias de semana abrimos 11
    * pero los fines de seman abrimos a las 9
    *
*/

//  Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0; // 0: domingo. 1: lunes
const horaActual = 10;
const cierre = 20;

let horaApertura;
let mensaje;// Esta abierto, Esta cerrado, hoy abrimos a las XX
let horaCerrar;

// en esta evaluamo que hora se abre la tienda
// if (dia === 0 || dia ===6){

//
//   if ([0,6].includes(dia) ){// en esta incluye los dias de la semana con el metodo INCLUDES y al hacer el (el valor DIA)
//   console.log( 'Fin de semana');
//   horaApertura = 10;
// } else {
//   console.log( 'Dia de la semana');
//   horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia) ) ? 9 : 21;

// en condicional evaluamos la hora acutal y la de la apertura
// if ( horaActual >= horaApertura){
//   mensaje = ' Esta abierto';
// } else{
//   mensaje = `Esta cerrado, lo sentimos mucho ${ horaApertura }`;
// }

mensaje = ( horaActual>= horaApertura) ? ' Esta abierto' : `Esta cerrado, lo sentimos mucho ${horaApertura}`;
console.log({ horaApertura, mensaje});

horaCerrar = ( horaActual >= horaCerrar) ? 'Esta cerrado ' : `Esta cerrado, ven manana a las 10 ${horaCerrar}`;
console.log( { horaCerrar, mensaje})