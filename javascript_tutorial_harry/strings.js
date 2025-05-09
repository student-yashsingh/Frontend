//   JS IS A FORGIVING LANGUAGE

console.log("STRINGS is Back")
let a=" Rajput"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a.length)

let my_name="yash";
let friend="chaitanya"
console.log("my name is "+ my_name +"and his friend name is "+ friend) //->STRING CONCATENATION
console.log(`my name is ${my_name} and his friend name is ${friend} `) //-> TEMPLATE LITERALS
// we can insert variables directly in template literal. this is called string interpolation.[``->backtic]
s="Roh\"it"
console.log(s)
let b ="parth"
let c=56
console.log(b.toUpperCase())

let fav_frt="pineapple"
console.log(b.slice(1,4))
console.log(b.replace("apple","seb"))
// first occurence will be replaced 
console.log(my_name.concat(a))
console.log(my_name.concat( a," ka raaj"))
console.log(a.trim()) //-> this will removes the whitespaces.
b.charAt(0);
console.log(b.charAt(0))
console.log(b.indexOf(3))// if somewhat is not founded in the string then this function will provide you -1.
// b.startsWith("y")
// b.endsWith("f")

// strings are immutable