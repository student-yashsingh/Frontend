//    js is a dynamically typed language
//    only letters,underscore(_)and $ is allowed(not even space),digits can be allowed but not in the front of any variable name.reserverd words as variables names are not allowed.
 
// console.log("hlo guys, my name is yash singh..."); 
// console.log("And, it's my second js code line.");
// let full_name="yash singh";
// console.log(full_name)
// let age=18;
// console.log(age)
// let salary="100000.01 Rs";
// console.log(salary)
// let x=null;
// isfollow=false;
// console.log(x);
// console.log(isfollow);

// "fullName"->camel case and it is valid.
// "full_name"->snake case and it is not valid.
// "full-name"->kabab case and it is not valid.
// "FullName"->pascal case and it is also not valid.


// always use keywords(let,const,var) to declare your variable name.
// before 2015, we use var keyword for declaring variable but not preferable now
// let keyword can be update such that if i assign let a =4; then i can update a by simply type a =9;
// if we use const keyword in the front of any variable name then we can't change the value of that variable again and again or update it.
// alert("hello world")
// const age1 = 56;
// console.log(age1);
// var a =prompt("enter your number")
// console.log("your number is "+a)
// var isTrue = confirm("Are u sure and you want to leave the page and blast your computer ")
// if(isTrue){
//     console.log("computer is blasting")
// }
// else{
//     console.log("computer is not blasting")
// }

// let and const have block scope while var has global scope.

// {
//     let a =5;
//     console.log(a);
// }
// {
//     let a =120;
//     console.log(a);
// }

document.title="first js file"
document.body.style.background="toys.jpg"

// primitive data types in js are : string,boolean,undefined,null,Bigint,symbol

typeof age;  

// null is a special kind of primitive data type.

let x1 = BigInt("1234");
let y =Symbol("hello!!!");
console.log(x1)

// objects(arrays,functions,structures....) are basically the collection of values and comes under non-primitive data types.

const student= {
    fullName: "yash singh",
    age:20,
    cgpa:8.4,
    isPass:true
};

console.log(student["fullName"]);
console.log(student.fullName);

student["age"]=student["age"]+3;

console.log(student.age);
let o ={        //->an object can be created as follows
    "name":"Harry",
    "job code":580 
}
console.log(o)
o.salary="100crores"
console.log(o)
// typeof is an operator not a function.


