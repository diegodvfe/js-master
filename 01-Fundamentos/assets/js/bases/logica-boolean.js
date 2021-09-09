

const regresaTrue =()=> {
  console.log( 'regresa true');
  return true;
}

const regresaFalse = ()=>{
  console.log( 'regresa false');
  return false;
}

console.warn('Not o la negacion');
console.log( true);// true

// el operador ! cambia la logica booleana QUE QUIERE DECIR ( QUE SI ES VERDADERO VA SER FALSO)
console.log( !true); //false
console.log( !false); // true

console.log( !regresaFalse());

console.log('And');
console.log(true && false)// false
console.log( true && !false)// true

console.log( '======')
console.log( regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log( '=====&&====');
regresaFalse()&& regresaTrue();

console.log( '4 condicionales: ', true && false && true&& true);

console.warn( 'OR')
console.log( true || false);
console.log( false|| true);

console.log( regresaTrue()|| regresaFalse());
console.log('4 condicionales: ', true || false || true || true);

console.warn( 'Asignaciones');

const soyUnderfined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;// ? // por el operador falso ya no pasa los siguientes valores
const a2 = 'Hola' && 'Mundo' && soyFalso && true;// falso por un solo operador
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso|| soyNull|| soyUnderfined|| ' ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUnderfined || true || soyNull|| regresaTrue()|| 'ya no soy falso';



console.log( {a1, a2, a3, a4, a5, });

// if ( )