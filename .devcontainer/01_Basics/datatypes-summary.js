//primitive data type:- ( type how we store the data in memory)(Call By Value)

// 7 types: String, Number, Boolean, null(means empty), undefined, Symbol, BigInt

// Reference type(Non-Primitive) (Call by reference)

// array, Ojects, Functions

// Stack(Primitive) Memory && Heap(Non-primitive) Memory



let myName = 'Adarsh'

let anotherName= myName//'Singh'
anotherName = 'Singh'

console.log(myName)
console.log(anotherName)


let user = {
    email: 'gmail.com',
    upi: 'user@ybl'
}

let user2 = user

user2.email = 'adarsh@gmail.com'

console.log(user)
console.log(user2)