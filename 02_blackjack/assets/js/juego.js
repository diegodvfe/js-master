
 let deck          = [];
 const tipos      = ['C', 'D', 'H', 'S' ];
 const especiales = [ 'A', 'J', 'Q', 'K'];

 let puntosJugadores     = 0;
 let puntosCoumputadora  = 0;

//   Referencias de HTML
const btnPedir = document.querySelector(`#btnPedir`);
const btnDetener = document.querySelector( `#btnDetener`);
const btnNuevo = document.querySelector(`#btnNuevo`);

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector( `#compu-cartas`);

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
      console.log( deck );
      return deck;

 }

 crearDeck();

//  Esta funcion es para pedir carta

const pedirCarta = () =>{

  if ( deck.length === 0){
      throw 'No hay carta en el deck'; // throw es la parte mas complicada
  }
   const carta = deck.pop();
  //  console.log( carta);

  return carta;
}

// for ( let i; i >=57; i++){
//   pedirCarta();
// }

//  Pedir cartas
const valorCarta = ( carta) =>{

    const valor = carta.substring( 0, carta.length -1);
    // let puntos = 0; // 2 = 2 10 =10

  // isNanN = is not a number
    return (isNaN(valor) ) ?
            (valor === 'A') ? 11 : 10
            : valor *1;

}



//  Turno de la Computadora

const turnoComputadora = ( puntosMinimos) =>{
    do {
      const carta = pedirCarta();

      puntosCoumputadora = puntosCoumputadora +valorCarta(carta);
      points[1].innerHTML = puntosCoumputadora;
      console.log(points);

      const imgCarta = document.createElement(`img`);
      imgCarta.src = `assets/cartas/${carta}.png`
      imgCarta.classList.add(`carta`)
      divCartasComputadora.append(imgCarta);

      if ( puntosMinimos >21){
        break;
      }
  } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {
          if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
          } else if (puntosMinimos > 21) {
            alert('Computadora gana')
          } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
          } else {
            alert('Computadora Gana')
          }
        }, 100);









turnoComputadora();


// Eventos Pedir botones

btnPedir.addEventListener (`click`, () =>{

  const carta = pedirCarta();

  puntosJugadores = puntosJugadores + valorCarta( carta);
  points[0].innerText = puntosJugadores;
  console.log( points)

  const imgCartas = document.createElement(`img`);
  imgCartas.src   = `assets/cartas/${carta}.png`;
  imgCartas.classList.add( `carta`);
  divCartasJugador.append( imgCartas);

  if ( puntosJugadores >21){
    console.warn(`Haz perdido amigo`);
    btnPedir.disabled   = true;
    btnDetener.disabled = true
    turnoComputadora(puntosJugadores);
  }else if ( puntosJugadores === 21){
    console.warn('21 Ganaste')
    btnPedir.disabled   = true;
    btnDetener.disabled = true
    turnoComputadora(puntosJugadores)
  }

});


btnDetener.addEventListener(`click`, ()=>{
  btnDetener.disabled = true;
  btnPedir.disabled   = true;

  turnoComputadora( puntosJugadores);
});

  btnNuevo.addEventListener('click', () => {

      console.clear();
      deck = [];
      deck = crearDeck();

      puntosJugador = 0;
      puntosComputadora = 0;

      puntosHTML[0].innerText = 0;
      puntosHTML[1].innerText = 0;

      divCartasComputadora.innerHTML = '';
      divCartasJugador.innerHTML = '';

      btnPedir.disabled = false;
      btnDetener.disabled = false;

  });


