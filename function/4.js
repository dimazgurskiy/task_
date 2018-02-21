function loup( data ) {
if (arguments[0].length === 3) {
   arg1();
} else if (arguments[0].length === 2){
    arg2();
} else {
    arg3();
}
}

loup(  [[1,4,5 ] ] )

function arg1() {
    console.log('hello')
}

function arg2() {
    console.log('man')
}

function arg3() {
    console.log('lei')
}