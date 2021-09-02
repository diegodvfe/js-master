

let a = 30;
let b = a;
a = 30;

console.log( {a, b});

let juan = { nombre: 'Juan'};
        // Operador spread sirve para separar
let ana  = {...juan};
ana.nombre = 'Ana';
console.log( { juan, ana})

//  el (parametro Rest ...) dentro de los parametros
const cambiaNombre = ({...persona})=>{ // {}-> al momento de que se utiliza llaves se vuelve operador spread
  persona.nombre = 'Tony';
  return persona
}

let peter = { nombre: 'Peter'}
let tony  = cambiaNombre(peter);
console.log( {peter, tony})

// Arreglos

const frutas = [ 'manzanas', 'peras', 'bananas', 'uvas'];

//------------------------ metodos son para roper y reasignar los componentes de cada variable------
console.time('spread')
const otrasFrutas = [...frutas]; // renombra con otra variable para simplemente agregar
    // al momento de usar [...] -> rompe la cadena, por lo consiguiente imprime mango en otrasFrutas pero no en frutas
console.timeEnd('spread') //  Esta unicamente muestra la velocidad que tiene

console.time('slice');
const otrasFrutas = frutas.slice();
console.log.timeEnd('slice');


    otrasFrutas.push('mango'); // en este caso se agrega la variable otras frutas---> Pero esta renombrada por otra variable por lo cual al  momento de pasar al arreglo se imprime en la variable frutas.

console.table({frutas, otrasFrutas});// se puede ver la diferencia que se puede entre ambas variable, es muy interesante ver como la variable otrasFrutas
