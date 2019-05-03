
// create a random number between 1 -6

var randomNumber1= Math.floor(Math.random() * 6) +1;

// dice 1.png -dice 6.png  Concatenation 
var randomDiceImage= "dice" + randomNumber1 + ".png";

// tap into scr element of html- images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage;

//select the img tag - first img tag
var image1=document.querySelectorAll("img")[0];

//change src to randomImageSource
//change dice on player 1
image1.setAttribute("src",randomImageSource);

//change dice on palyer 2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomNumber2+ ".png";


document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);



// Who wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";

}
else if (randomNumber2 >randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw";
    
}






// var randomNumber1 = Math.floor(Math.random()*6+1); //dice1 (1-6)
// var randomImg1 = "images/dice" + randomNumber1 + ".png"; // img1
 
// var randomNumber2 = Math.floor(Math.random()*6+1);  //dice2 (1-6)
// var randomImg2 = "images/dice" + randomNumber2 + ".png"; // img2
 
// document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
// document.querySelectorAll("img")[1].setAttribute("src",randomImg2);
 
 
// if(randomNumber1 < randomNumber2){
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// } else if(randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
// } else {
//   document.querySelector("h1").innerHTML = "👊 Draw! 👊";
// }