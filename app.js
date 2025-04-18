let userScore =0;
let compScore = 0;

let choices =document.querySelectorAll(".choice");

let msg =document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
let genCompChoice =() =>{
    const options = ["rock" , "paper","scisser"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    
};

const drawGame =() =>{
    // console.log("Game is Draw");

    msg.innerText = "Game is Draw. Play Again!";
    msg.style.backgroundColor ="black";
   
}

let showWinner= (userWin , userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        // console.log("You Win!");
        msg.innerText = `you Win!   Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";

    }else{
        compScore++;
        compScorePara.innerText =compScore;
        // console.log("You Lose");
        msg.innerText  = `You Lose ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor ="red";
    }
};




const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);

    const compChoice  = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin =true;
        if (userChoice === "rock"){
            userWin =compChoice === "paper" ? false:true;

        }else if(userChoice ==="paper"){
            userWin =compChoice === "scisser" ? false:true;


        }else{
            userWin =compChoice === "rock" ? false :true;
        }
        showWinner(userWin ,userChoice,compChoice);

    }
};

choices.forEach((choice ) =>{
    
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id")
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);

    });
});