let arr=[1,2,4,5,7]
// let arr1=[3,4,67,89,45,"ar","Ar","\0"]
// let arr2=["mango",67,"yash"]

console.log(arr, typeof arr)
console.log(arr.length)

// //  ARRAYS ARE MUTABLE

console.log(arr[0])
// arr[4]=45;

console.log(arr.toString())
console.log(arr.join("1"))
console.log(arr)
console.log(arr.pop())
console.log(arr.push("yash"))//->after push it will return u the updated length of an array.
// console.log(arr.unshift("hlo"))//->this will add the element in the front of an array.
// console.log(arr.shift())//->this will removes an element from the beginning.
// delete arr[3]// -> element will be deleted but its space in the array will not get deleted and hence also length will be also not changed.
// console.log(arr.concat(arr2))
// // this will returns a new array ,does not change the existing array.
// console.log(arr)
// console.log(arr1.sort())
let y=[1,23,4,23,5]
y.splice(0,1) //->it removes the elements within the given index.
// y.splice(0,1,34,67)//->this will add two numbers 34 and 67 at the end.
// y.slice(2)
console.log(y)
// console.log(y.slice(2))
// y.reverse()
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

mt =[12,90,20,34]
mt.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

// let newArr= mt.map((e)=>{
//     return e**2
// })

// console.log(newArr)
// // map()-> it is used create a new array by performing some operations on each array element.

// const grtrthan3= (e)=>{
//     if(e>3){
//         return true
//     }
//     return false
// }

// console.log(arr.filter(grtrthan3))

let arr2 =[1,2,3,4,5,6]

const red =(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))

console.log(Array.from("yash rajput"))