 function fizz_buzz( index ) {
     let fizz = 'Fizz';
     let buzz = 'Buzz';
        for ( let i = 0; i <= index; i++ ){
            if ( i % 3 === 0 ) {
                i % 5 === 0 ? console.log( fizz + buzz ) : console.log( fizz );
                continue
            }
            if ( i % 5 === 0 ) {
                console.log( buzz );
                continue
            }
            console.log( i );
        }
 }

 fizz_buzz( 100 );