//  WAP to calculate factorial of a number using for loop and reduce function.

//   1.  for loop


// let b =1;
// let a=prompt("enter the number u want to have factorial of it ")
// a=parseInt(a)
// console.log("your entered number is: ",a)
// for (let i = 1; i <= a; i++) {
//     b*=i;
// }

// console.log(b)
let fact_arr=[1,2,3,4,5]
const factorial = (a,b)=>{
    return a*b;

}

console.log(fact_arr.reduce(factorial));