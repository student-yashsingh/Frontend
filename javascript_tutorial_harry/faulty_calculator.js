//     FAULTY CALCULATOR(10%TIMES)
// it performs operations 10% of the times.
// console.log("enter the first number: ")
// console.log("enter the second number: ");

/*   ->this multiline commented code is for inputting two numbers in node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user to enter the first number
rl.question('Enter the first number: ', (num1) => {
  // Prompt user to enter the second number
  rl.question('Enter the second number: ', (num2) => {
    // Convert input strings to numbers
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    
    // Print the numbers
    console.log(`First number: ${number1}`);
    console.log(`Second number: ${number2}`);
    
    // Perform any operations with the numbers here
    // For example, you can add them:
    const sum = number1 + number2;
    console.log(`Sum of the numbers: ${sum}`);
    
    rl.close();
  });
});*/

console.log("enter the operation u want to perform(FAULTY)->(+,*,-,/")
// +  ----> -,* ------>+, - ----->/, / -----> **

let a= prompt("enter the first number: ")
let b = prompt("enter the second number: ")
a= parseInt(a)
b=parseInt(b)
console.log("your first number is " , a)
console.log("your second number is ",b)
let c =prompt("enter the operation u want(+,*,-,/) ")
console.log("u entered ",a,c,b,);
let ran= Math.random()<0.1
if(c=='+'||ran==false){
    console.log("addition of",a,"and",b,"is",a+b);
}
else if(c=='+'||ran==true){
    console.log("addition of",a,"and",b,"is",a-b)
}
else if(c=='-'||ran==true){
    console.log("subtraction of",a,"and",b,"is",a-b)
}
else if(c=='-'||ran==false){
    console.log("subtraction of",a,"and",b,"is",a-b)
}
else if(c=='*'||ran==true){
    console.log("multiplication of",a,"and",b,"is",a*b)
}
else if(c=='*'||ran==false){
    console.log("multiplication of",a,"and",b,"is",a+b)
}
else if(c=='/'||ran==true){
    console.log("division of",a,"and",b,"is",a/b)
}
else if(c=='*'||ran==false){
    console.log("division of",a,"and",b,"is",a**b)
}
else{
    console.log("u entered somewhat wrong!!!")
}