
let a = 3000 // global scope
 if(true) {  // block scope
    let a = 10 
    const b = 20
    // console.log('Inner: ' + a)
 }
//   console.log(a)
// line by line execution
function one(){ // nested functions :-
    const userName = 'Adarsh'

    function two(){
        const website = 'youtube.com'
        console.log(userName)
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const userName = 'Adarsh'
    if(userName === 'Adarsh'){
        const website = ' Youtube'
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)



//------------------New Concept-------------------------------

console.log(addOne(5))  // no error
function addOne(value){ // funciton declaration
    return value + 1
}
// console.log(addOne(5))

//addTwo(5) // it is error
const addTwo = function(num){ // function expression
return num + 2
}
