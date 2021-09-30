

class Retangunlo {

  #area =0

  constructor ( base = 0, altura = 0){
    this.base = base;
    this.altura= altura;

    this.#area = base * altura;
  }

  calcularaArea(){
    console.log( this.#area * 2);

  }
}

const retangulo = new Retangunlo( 10, 15);
retangulo.#area = 100;

console.log( retangulo);

