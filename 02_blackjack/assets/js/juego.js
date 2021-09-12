/**
 *2C = Two of Clubs
 *2D = Two of Diaminds
 *2H = Two of Hearts
 *2S = Two of Spades
 */

 let deck = [];
 const tipos = ['C', 'D', 'H', 'S' ];
 const especiales = [ 'A', 'J', 'Q', 'K'];

 let puntosJugadores     = 0;
 let puntosCoumputadora  = 0;

//   Referencias de HTML
const btnPedir = document.querySelector(`#btnPedir`);

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector( `#compu-cartas`)
const points = document.querySelectorAll('small');


 // Esta funcion crea una nueva baraja.
 const crearDeck = () =>{

    for ( let i = 2; i <=10; i++){
      // deck.push( i + 'C');
        for( let tipo of tipos ){ // se creo un variable para recorrer el arreglo
          deck.push( i + tipo);
        }
    }
    for ( let tipo of tipos){
          for ( let esp of especiales){
            deck.push( esp + tipo);
          }
      }
    // en esta parte se retorna toda la funcion

      // console.log( deck);
      deck = _.shuffle(deck);
      // console.log( deck );
      return deck;

 }

 crearDeck();

//  Esta funcion es para pedir carta

const pedirCarta = () =>{

  if ( deck.length === 0){
      throw 'No hay carta en el deck'; // throw es la parte mas complicada
  }


   const carta = deck.shift();
  //  console.log( carta);

  return carta;
}

for ( let i; i >=57; i++){
  pedirCarta();
}

//  El valor de la cartas
const valorCarta = ( carta) =>{

    const valor = carta.substring( 0, carta.length -1);
    // let puntos = 0;
    // 2 = 2 10 =10

  // isNanN = is not a number
    return (isNaN(valor) ) ?
            (valor === 'A') ? 11 : 10
            : valor *1;

}

//  Turno de la Computadora
const turnoComputadora = ( puntosMinimos) =>{

    do {
      const carta = pedirCarta();

      puntosJugadores = puntosJugadores + valorCarta(carta);
      points[0].innerText = puntosJugadores;
      console.log(points)

      const imgCartas = document.createElement(`img`);
      imgCartas.src = `assets/cartas/${carta}.png`;
      imgCartas.classList.add(`carta`);
      divCartasJugador.append(imgCartas);

    }while(puntosMinimos);

}


// Eventos Pedir botones

btnPedir.addEventListener (`click`, () =>{

  const carta = pedirCarta();

  puntosJugadores = puntosJugadores + valorCarta( carta);
  points[0].innerText = puntosJugadores;
  console.log( points)

  const imgCartas = document.createElement(`img`);
  imgCartas.src = `assets/cartas/${carta}.png`;
  imgCartas.classList.add( `carta`);
  divCartasJugador.append( imgCartas);

  if ( puntosJugadores >21){
    console.warn(`Haz perdido amigo`);
    btnPedir.disabled = true;

  }else if ( puntosJugadores === 21){
    console.warn('21 Ganaste')
    btnPedir.disabled = true;
  }

});





