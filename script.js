let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let cChoice=Math.floor(Math.random()*3);
    if(cChoice===0){
        cChoice="rock";
    }
    else if(cChoice===1){
        cChoice="paper"
    }
    else if(cChoice===2){
        cChoice="scissors"
    }
    return cChoice;
}

function getHumanChoice(){
    let hChoice=String(prompt("choose rock, paper, scissors"))
    if(hChoice!=="rock" && hChoice!=="paper" && hChoice!=="scissors"){
        alert("choose one of the three")
        getHumanChoice();
    }
    return hChoice;
}



function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(humanSelection, computerSelection)

    
    let playRound=(humanChoice, computerChoice)=>{
        if(humanChoice!==computerChoice){
            if(humanChoice==="rock" && computerChoice=="scissors"){
                humanScore++;
                return console.log("human win")
            }
            else if(humanChoice==="paper" && computerChoice=="rock"){
                humanScore++;
                return console.log("human win")
            }
            else if(humanChoice==="scissors" && computerChoice=="paper"){
                humanScore++;
                return console.log("human win")
            }
            else{
                computerScore++;
                return console.log("computer win")
            }
        }
        else if(humanChoice  === computerChoice){
            return console.log("draw");
        }
    } 
    playRound(humanSelection, computerSelection)
}


function Game(){
    for(let i=1; i<=5; i++){
        playGame();
    }
    if(humanScore>computerScore){
        console.log("humans won")
        alert("humans won")
    }
    else if(humanScore<computerScore){
        console.log("computers won")
        alert("computers won")
    }
    else if(humanScore===computerScore){
        console.log("draw")
        alert("draw")
    }  
}

Game();





