
function doArray( arg1, arg2, arg3 ){
    let array = [ ];
        if ( arg3 > 0 ) {
            for( let i = arg1; i <= arg2; i+=arg3 ){
                array.push( i )
            }
        } else {
            for( let i = arg2; i >= arg1; i += arg3 ){
                array.push( i )
            } 
        }

            return array
}

function sum( arg1, arg2, arg3 ) {
    if ( !arg3 ){ arg3 = 1; };
    if ( arg3 === 0 ) { console.log( 'No 0' ); return };
        let array = doArray( arg1, arg2, arg3 );
        let sum = 0;
            for( let i = 0; i < array.length; i++ ){
                sum += array[ i ];
            }
            console.log( sum );
}
sum( 1, 10 )