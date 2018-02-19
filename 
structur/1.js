function output_screen( index ) {
    let hash = '';
        for ( let i = 0; i < index; i++ ){
            console.log( hash +='#' );
        }
}
// output_screen( 7 );
let hash_ = '#';
function recursion(  ){
    console.log( hash_);
    hash_ += '#';
    hash_.length <= 7 ? recursion( ): console.log('hello Dima') ;
}
// recursion(  );

['#','#','#','#','#','#','#'].map( (i,a,arr)=> {
    console.log(arr.slice(0,a+1).join(''))
} );
let str = '';
['#','#','#','#','#','#','#'].forEach( (v,i,arr) =>{
    str += v;
    console.log(str);
});
