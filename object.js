let count = 0;

let myObject = {
  [Symbol.iterator]() {
    return {
      next(){
        if( count++ < 5 ){
          return { value: count, done:false }
        }
        else{
          return {done: true}
        }
      }
    }
  }
};

console.log( "Primero recorremos el objecto con un 'for of' bucle" )
for( let value of myObject ){
  console.log( value )
}

console.log( "Ahora lo vamos a recorrer llamando nosotros el método next a mano 5 veces" )
count = 0;
let myObjectIterator = myObject[Symbol.iterator]();
let primeraLlamada = myObjectIterator.next();
console.log( "Value: %d // done: %s", primeraLlamada.value, primeraLlamada.done )

let segundaLlamada = myObjectIterator.next();
console.log( "Value: %d // done: %s", segundaLlamada.value, segundaLlamada.done )

let terceraLlamada = myObjectIterator.next();
console.log( "Value: %d // done: %s", terceraLlamada.value, terceraLlamada.done )

let cuartaLlamada = myObjectIterator.next();
console.log( "Value: %d // done: %s", cuartaLlamada.value, cuartaLlamada.done )

let quintaLlamada = myObjectIterator.next();
console.log( "Value: %d // done: %s", quintaLlamada.value, quintaLlamada.done )

let sextaLlamada = myObjectIterator.next();
console.log( "Value: %d // done: %s", sextaLlamada.value, sextaLlamada.done )
