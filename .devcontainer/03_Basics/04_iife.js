// Immediately Invoked Function Expressions

(function chai(){
    // named IIFE
    console.log('DB connected')
}
)(); // Interview question
//chai()


//(/*Global scope pollution avoid, we use IIFW*/)()

((name) => {
    console.log('DB Connected Two ' + name)
}
)('Adarsh')

