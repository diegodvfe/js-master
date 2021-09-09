


//  ejercicio

const carros = [ 'vw', 'porsche', 'audi', 'nissan'];

    let i = 0;

    // while( i < carro.length){
    //   console.log( carro[i]);//aqui se crear un ciclo infinito
    //   // i = i +1; este hace que se sume EJEMPLO ( 0=VW, 1= porsche, ... hasta llegar a todo el arreglo)
    //   // i++
    // }


// undefined
// null
// false

console.warn('WHILE')

while (carros[i]){
  if (  i=== 1){
    // break// se utiliza para parrar la condicion
    i++; // este esta aumentado vw, porshe, audi, nissan
    continue; // este dice que continue pero si no hay sumatoria se crea un ciclo infinito.
  }
  console.log( carros[i] ); // este muestra todos lo que hay dentro del arreglo
  i++; //este ++  esta aumentando el valor dentro del arreglo.
}

console.warn('DO WHILE');

let j =103;
let mensaje ;

do {
  console.log( carros[j]);
  j++;
  }  while (carros[j] );




