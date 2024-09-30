let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let youscorepara = document.querySelector("#you-score");
let compscorepara = document.querySelector("#comp-score")



choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        // console.log(`choice was clicked`, userchoice)
        playGame(userchoice);
    });
});

const genCompChoice = () => {
    let options = [ "Rock", "Paper", "scissors"]
   let rndmIndx = Math.floor(Math.random()*3);
   return options[rndmIndx];
   };

   const Dramgame = () =>{
    // console.log(" Game draw");
     msg.innerText = "Game Draw. Play again"
     msg.style.backgroundColor = "yellow";
     msg.style.color = "black";

   }

const ShowWinner = (userwin) =>{
    if(userwin){
        userscore++;
        youscorepara.innerText = userscore;
        // console.log("you win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else{
        // console.log("you lose");
        compscore++;
        compscorepara.innerText = compscore;
         msg.innerText = "You Lose."
         msg.style.backgroundColor = "red";
        
    }
}


const playGame = (userchoice) => 
{
    // console.log("user choice =", userchoice);
    const CompChoice = genCompChoice();
    // console.log("Comp choice =", CompChoice);

    if( userchoice === CompChoice){
        console.log(Dramgame());
        }else{
              let userwin = true;
                   if( userchoice === "Rock"){
                      userwin = CompChoice === "Paper" ? false : true;
                } else if(userchoice ==="Paper"){
                     userwin = CompChoice ==="Scissor" ? false :true;
                     }else{
                        userwin = CompChoice ==="Rock" ? false : true;
                     }
              ShowWinner(userwin);
            }
}
