console.log("hello world");
let yash = document.body.childNodes[2];
console.log(yash.firstChild);

// let ty=document.body.childNodes[1]
// ty.firstElementChild  -> this will ignores text.
// document.body.firstelementchild.children -> this will return all the elements of the first child element.
// document.body.firstelementchild.childnodes -> this will return all the text nodes,comment nodes,elements of the first child element.

// rest concepts u can revise from the notes

document.getElementsByTagName("th")[1].innerHTML = "Contact Number";

document.getElementById("table").textContent;

// get attribute just specify the content of the attribute you are using and can take only one attribute simultaneously,while set attribute is used to set(or replace the old attribute with the new one.")

document.querySelector("table").setAttribute("table","tbl");
