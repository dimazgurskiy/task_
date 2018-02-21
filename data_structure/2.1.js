function reverseArrayInPlace( array ){
    let arr = [ ];
        for( let i = array.length - 1; i >= 0; i--){
         arr.push( array[ i ] );
        }
        console.log( arr)

};
reverseArrayInPlace( [1, 2, 3, 4, 5] )