console.log("yash")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor="green"
document.getElementById("yash").style.backgroundColor="yellow"
document.querySelector(".box").style.backgroundColor="orange" // -> this will apply properties to that one which comes first under the class name.
console.log(document.querySelectorAll(".box")) 
// now for changing the color or applying any other properties ,using querySelectorAll we have to use forEach loop 
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="yellow"
// })
console.log(document.getElementsByTagName("div"))

let r=document.getElementsByTagName("div")
console.log(r[3].matches("#yash"))
r[3].closest("html")
console.log(document.querySelector(".container").contains(r[1]))
console.log(document.querySelector("body").contains(document.querySelector(".container"))) 