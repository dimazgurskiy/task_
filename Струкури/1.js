function output_screen( index ) {
    let hash = '';
        for ( let i = 0; i < index; i++ ){
            console.log( hash +='#' );
        }
}
output_screen( 7 )