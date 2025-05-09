console.log(
"hey there is a tutorial of loops"
)

// types of loops in JS are:
/* for loop,for in loop,for of loop,while loop,do-while loop*/

// basic for loop
let a=1;
for (let i = 0; i < 10; i++) {
    console.log(a+i)
    
}

// for-in loop
let obj={
    name: "yash",
    role: "Programmmer",
    Company: "yash_digitals"
}

for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element) 
}

// for-of loop 
for (const c of yash) {
    console.log(c)
}

// while loop

let i=0;
while(i<6){
    console.log(i)
    i++
}

// do-while loop
let j=0;
do{
    console.log(j)
    j++
}
while(j<10);