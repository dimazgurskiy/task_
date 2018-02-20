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

//  fizz_buzz( 100 );

 function fizz_buzz_one( num ){
    for ( let i = 0; i <= num; i++ ){
        let one = i % 3 === 0 ? 'Fizz' : '';
        let two = i % 5 === 0 ? 'Buzz' : '';
        one || two  ? console.log( one + two ) : console.log(i);
    }
 }
 fizz_buzz_one( 150 )