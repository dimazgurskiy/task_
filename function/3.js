function countChar(array, value) {
    let counter = 0;
        for( let i = 0, len = array.length; i < len; i++ ){
            array[ i ].toLowerCase() == value ? counter++ : true ;
        }
            console.log(counter)
};
countChar( 'sdfsdsdfsAAGAKLAVKFJKJCvVV', 'v' );
