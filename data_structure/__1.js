
function doArray( arg1, arg2, arg3 ){
    let array = [ ];
    let data = 0;
        if ( arg3 > 0 ) {
            for( let i = arg1; i <= arg2; i+=arg3 ){
                array.push( i )
            }
        } else {
            for( let i = arg2; i >= arg1; i += arg3 ){
                array.push( i )
            } 
        }
            array.map( ( currentValue) => { 
                data  += currentValue 
            })
        return data
}

function sum( arg1, arg2, arg3 ) {
    if ( !arg3 ){ arg3 = 1; };
    let array = doArray( arg1, arg2, arg3 );
        console.log( array );
}
sum( 1, 10 )