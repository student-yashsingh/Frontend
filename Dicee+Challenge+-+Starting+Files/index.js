var randomNumber1 = Math.random();
randomNumber1= 6*randomNumber1;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2= 6*randomNumber2;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);

let randomDiceImage1 = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src","images/" + randomDiceImage1);

let randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src","images/" + randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}