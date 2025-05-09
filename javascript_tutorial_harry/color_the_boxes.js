let a= document.getElementsByClassName("box")
console.log(a, typeof a)
let b= Array.from(a)
b.forEach(element => {

    let te =Math.random()
    if(te>0.9){
        element.style.backgroundColor = "red"
    }
    if(te>0.8&&te<0.9){
        element.style.backgroundColor = "green"
    }
    if(te>0.6&&te<0.8){
        element.style.backgroundColor = "yellow"
    }
    if(te>0.4&&te<0.6){
        element.style.backgroundColor = "aqua"
    }
    if(te>0.2&&te<0.4){
        element.style.backgroundColor = "gray"
    }
});