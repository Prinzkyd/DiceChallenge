var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "images/" + "dice"+randomnumber1 + ".png"


var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "images/" + "dice"+randomnumber2 + ".png"



if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML ="🚩Player 2 wins"; 
    document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
    document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

}

else if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML ="🚩Player 1 wins"; 
    document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
    document.querySelectorAll("img")[0].setAttribute("src",randomImage1);


}

else if (randomnumber1 == randomnumber2) {
    document.querySelector("h1").innerHTML ="Draw";
    document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
    document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

}