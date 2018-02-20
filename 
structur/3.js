function tablet( index, num , hash , gap ) {

       for ( let i = 0; i <= index; i++ ){
           let out_put = '',
               hash_ = i % 2  === 0 ? hash : gap,
               gap_ = i % 2 === 0 ? gap: hash;
           
                    for ( let j = 0; j < num; j++ ){
                        out_put += j % 2 === 0 ? hash_ : gap_;
                    }
          console.log( out_put )
       }
}

tablet( 8 , 40 , '#' , ' ' );