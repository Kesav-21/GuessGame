let hscore=0;
let score=20;

const userInput=document.getElementById("guessing");
const messageBox=document.getElementById("message");
const checkButton =document.getElementById("check");
const main=document.getElementById("main");
const hscoreElement=document.getElementById("hscore");
const scoreElement=document.getElementById("score");
const againButton=document.getElementById("again");
hscoreElement.textContent=hscore;
scoreElement.textContent=score;

const luckynumber=Math.floor(Math.random()*20);
console.log(luckynumber);

function checkNumber(){
    const userGuess=Number(userInput.value);
    if (userGuess===luckynumber){
        messageBox.textContent="You are right";
        main.style.backgroundColor="green";
        hscoreElement.textContent=score;
    } else{
        main.style.backgroundColor="red";
        score=score-1;
        scoreElement.textContent=score;
        if (score<=0){
            messageBox.textContent="You Lose the game";
            checkButton.disabled=true;
        }else{
            scoreElement.textContent=score;
        if (userGuess>luckynumber){
            messageBox.textContent="Guess is too high";
        }else{
            messageBox.textContent="Guess is too low";
        }
    }
}
}
checkButton.addEventListener("click",checkNumber);
againButton.addEventListener("click",()=>{
    location.reload();
})