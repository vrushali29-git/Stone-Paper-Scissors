let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg")
const choices =document.querySelectorAll(".choice");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame= () =>{
    console.log("game was draw")
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        console.log("you win!!");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText = `You Win!!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        console.log("You Lose");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText= `You Lost!!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice=" ,userChoice);
    //generate computerchoice
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice===compChoice) {
        //Draw Game
        drawGame();
        msg.innerText="It was a draw! Play Again!!"
        msg.style.backgroundColor="blue";
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin =compChoice==="paper"? false : true;
        }
        else if (userChoice==="paper") {
            //rock,scissors
            userWin = compChoice==="scissors"? false : true;
        }
        else {
            //rock,paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
};
choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});