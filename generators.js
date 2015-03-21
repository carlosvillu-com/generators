let generatorArray = function* ( array ){
  for( let i=0; i< array.length; i++ ){
    yield array[i]
  }
};

let iterator = generatorArray( [1, 2 ,3, 4] )
for( let item of iterator ){
  console.log( `Este es el item: ${item}` )
}
