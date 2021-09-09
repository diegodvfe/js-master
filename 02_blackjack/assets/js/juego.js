/**
 *2C = Two of Clubs
 *2D = Two of Diaminds
 *2H = Two of Hearts
 *2S = Two of Spades
 */

 let deck = [];
 const tipos = ['C', 'D', 'H', 'S' ];
 const especiales = [ 'A', 'J', 'Q', 'K'];

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

      console.log( deck);
      deck = _.shuffle(deck);
      console.log( deck );
      return deck;

 }

 crearDeck();