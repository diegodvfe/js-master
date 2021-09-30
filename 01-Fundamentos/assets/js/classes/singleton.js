

class Singleton {

  static instancia;// esta va la instacia para devolver un valor

  nombre = '';// De esta manera estamos ejecutando nombre la propiedad de manera global

  constructor( nombre = ''){

    if(!!Singleton.instancia ){  // el !! esta dando la logica boolean que en este caso es falso
        return Singleton.instancia // Al momento de ingresar el return, ya no esjucata mas
    }

    Singleton.instancia = this;// ejecutamos el this para unicamente retorne un dato de la memoria
    this.nombre = nombre; // hace el llamado del constructor
  }

}

const instancia1 = new Singleton(' Jesus');
const instancia2 = new Singleton( ' Pokemon');
const instancia3 = new Singleton( ' Iroman' );

console.log( `Nombre en la instancia1 es: ${ instancia1.nombre}`);
console.log( `Nombre en la instancia1 es: ${ instancia1.nombre}`);
console.log( `Nombre en la instancia3 es: ${ instancia3.nombre}`);