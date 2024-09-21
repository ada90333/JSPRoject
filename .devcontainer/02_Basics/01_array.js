//array

const array = [ 0, 1,2, 3, true, 'Adarsh']

console.log(typeof(array[4]))

// array.push(6)
//  array.pop()

//array.unshift(9) // adds at the start of the array
//array.shift() // removes the first element of the array

// console.log(array.includes(9))
// console.log(array.indexOf(2))

// const newArray = array.join() joins the array and converts them to string

// console.log(newArray)
// slice and splice

console.log('A', array)

const array1 = array.slice(1,3) // does not modify the original array
console.log(array1)
console.log('B', array)

const array2 = array.splice(1,3) // modifies the original array as well

console.log('C', array)
console.log(array2)