// Object using contructor

const user = new Object()
user.id = '123'
user.name = 'Adarsh'
user.isLoggedin = false
//console.log(user)

const anoUser = {
    email: 'sum@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'Adarsh',
            lastName: 'Singh'
        }
    }
}

const obj1 = { 1: 'a', 2:'b'}
const obj2 = { 3: 'c', 4: 'd'}

//const obj3 = Object.assign( {}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj1)
// console.log(obj3)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('isLogged'))