function sayMyName(){ // definition of the function
    // scope of the function
console.log('H')
console.log('I')
}

//sayMyName()

// function addNumber(number1, number2) { // number1, number2 are parameters
//     console.log(number1 + number2)
// }

function addNumber(number1, number2) { // number1, number2 are parameters
    //let result = number1 + number2
    return  number1 + number2
}

const result = addNumber(3,7)  // 3, 7 are arguments

// console.log('Result: ' + result)

function loginUserMessage( userName) {
    if(userName === 'undefined') {return 'Please enter a username'}
    else  { return ` ${ userName} just logged in`}
}

const message = loginUserMessage()
// console.log(message)

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400, 500))

const user = {
    userName: 'Adarsh',
    price: 2000
}

function handleObject(anyObject){
    console.log(`${anyObject.userName} is available and price is ${anyObject.price}`)
}

// handleObject(user)

const myArray = [200,300,400,500]

function retrunSecondValue(getArray){
    return getArray[1]
}
console.log(retrunSecondValue(myArray))