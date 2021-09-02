


let a = 5;


if ( a >= 10) { // EXCEPCIONES undefined, null, una asignacion
    console.log('A es mayor a 10')
}else {
  console.log('A es menor a 10')
}

// console.log(' Fin de progr
//  En el new Date tu puedes definir que es importante dentro de los parantesis ( 01, september, 2021,  15:50pm );
const hoy = new Date(); // este metodo te define poder trabajar un nuevo dia
let dia = hoy.getDate(); // esta metodo te brinda toda la informacion necesaria ( dia, mes, hora, pais)

console.log({dia})

    if ( dia === 2){
      console.log('Domingo ');
    } else if ( dia === 3 ) {
      console.log('Hoy es viernes, listo para fiesta')
    }

    //       // if(dia === 4){
    //       //   console.log(' el sabado hizo para descansar');
    //       // } else {
    //       //   console.log( ' la noche es larga');
    //       // }

    //   console.log(' Hoy te quedas en la casa')
    // }



      dia  = 5;

    const diasdelaSemana = {
      0: 'domingo',   // como realizar funcionalidades dentro de los objetos
      1: 'lunes',     // UTILIZAR CONST
      2: 'martes',
      3: 'miercoles',
      4: 'jueves',
      5: 'viernes',
      6: 'sabado'
    }

console.log( diasdelaSemana[dia]);
// todo los objetos se deben de ejecutar mediante arreglos:
// esto porque al renombrar el valor de dia se ejecuta teniendo el valor indicado dentro del objeto
// por resultado nos tienen que aparecer el viernes//


const diasdelaSemana2 = [ 'domingo', ' lunes', ' martes', 'miercoles', 'jueves', ' viernes', 'sabado'];

console.log( diasdelaSemana2);


