let array = [1, 2, 3, 4]
let string = "Hola mundo!"
let set = new Set( ['set1', 'set2', 'set3'] )
let map = new Map();
map.set( 'key one', 'value one' )
map.set( 'key two', 'value two' )
map.set( 'key three', 'value three' )


// Iterando un array
for( let value of array ){
  console.log( `Array value ${value}` );
}

// Iterando strings
for( let character of string ){
  console.log( `Character ${character}` )
}

// Iterando un Set
for( let item of set ){
  console.log( `Item in set ${item}` )
}

// Iteramos por los valores de un map
for( let value of map.values()  ){
  console.log( `Value: ${value}` )
}

// Iteramos por las claves de un map
for( let key of map.keys()  ){
  console.log( `Key: ${key}` )
}

// Iteramos por las claves y los valores de un map
for( let [key, value] of map.entries()  ){
  console.log( `Key: ${key} => Value: ${value}` )
}
