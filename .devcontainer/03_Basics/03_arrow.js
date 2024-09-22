const user = {
    userName: 'Adarsh',
    price: 999,
    welcomeMessage: function(){
        // console.log(`${this.userName} welcome to website`) // this is refers to current context
        console.log(this)
    }
}

//user.welcomeMessage()
// user.userName = 'sam'
// user.welcomeMessage()
// console.log(this) // current context 

// function chai(){
//     let userName = 'Adarsh'
//     console.log(this) // always be global context
//     //console.log(this.userName) // undefined, because this works only in object not in function directly

// }
// chai()

// const chai = () =>{
//     console.log(this) // {}
// }
//chai()

//const addTwo = (num1, num2) => {return num1 + num2}

//const addTwo = (num1, num2) => num1 + num2  // implicit return

const addTwo = (num1, num2) => ({userName: 'Adarsh'})

console.log(addTwo(2,4))