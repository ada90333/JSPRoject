//Object.create() --> constructor method

// object literal
const jsUser = {
    name: 'Adarsh',
    'fullName': 'Adarsh Singh',
    age : 23,
    location: 'Delhi',
    email: 'adarsh@gmail.com',
    isLoggedIn: false
}
// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser['fullName'])


// Object.freeze(jsUser)
// jsUser.age = 56

jsUser.greeting = function(){
    console.log('Hello JS User')
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())