function reverseArray( array ){
    let arr = [ ];
        for( let i = array.length - 1; i >= 0; i--){
         arr.push( array[ i ] );
        }
        console.log( arr)

};
reverseArray( ["A", "B", "C"] )