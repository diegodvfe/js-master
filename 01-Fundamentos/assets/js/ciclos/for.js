

const heroes = [ 'Batmaan', 'superman', 'majure'];

console.warn('tradicional');

for ( let i =0 ; i < heroes.length; i++){
  console.log( heroes[i])
}

console.warn('For in');
for ( let i in heroes){
  console.log(heroes[i])
}


console.log( 'For of')
for ( let i of heroes){
  console.log( heroes)
}

