let MyClass = class MyClass {
  constructor( secuencie = [] ){
    this._secuencie = secuencie;
    this._index = 0;
  }

  push( number ){
    this._secuencie.push( number );
  }

  [Symbol.iterator]() {
    let self = this;
    return {
      next() {
        if( self._index < self._secuencie.length ){
          return { value: self._secuencie[self._index++], done: false };
        } else {
          return { done: true }
        }
      }
    }
  }
}

let myInstance = new MyClass( [1,2,3,4] );
myInstance.push( 5 );
myInstance.push( 6 );

for( let value of myInstance ){
  console.log( value );
}
