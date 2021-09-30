


export const saludar =(nombre)=>{
  console.log('Creando etiqueta h1');

  const h1 = document.createElement('h1');
  h1.innerText = `Hola, ${nombre}`

  document.body.append(h1);
}

export const despedida = (adios) =>{
  console.log( 'Me despido de ti h1');

  const h2 = document.createElement('h2');
  h2.innerText = `Adios a todos ${adios}`

  document.body.append(h2);
}