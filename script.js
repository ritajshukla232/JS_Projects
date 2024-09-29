let allBox = document.querySelectorAll(".box")
let Resetbtn = document.querySelector("#reset")
let msgcontainer = document.querySelector(".msg-container")
let newgamebtn = document.querySelector("#newgame")
let msg = document.querySelector("#msg")



let turn0 = true;
//  let turnX= false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

allBox.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked")
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
            // turnX = true;
        } else {
            box.innerText = "X";
            turn0 = true;
            // turnX =false;

        }
        box.disabled = true;
        checkWinner();
    })
});
const enableboxes = ()=> {
    for( let bo of allBox){
    bo.disabled = false;
    bo.innerText = "";
 } 
} ;
const resetgame= () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide")
 }


const disableboxs = ()=> {
    for( let bo of allBox){
    bo.disabled = true;
 } 
} ;


const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableboxs()

}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2] );
        let val1 = allBox[pattern[0]].innerText;
        let val2 = allBox[pattern[1]].innerText;
        let val3 = allBox[pattern[2]].innerText
        if (val1 != "", val2 != "", val3 != "") 
        {
            if (val1 == val2 && val2 == val3)
          {
                console.log("winner", val1)
            showWinner(val1);
          }
        }
       

    }
};
 

 newgamebtn.addEventListener("click", resetgame);
 Resetbtn.addEventListener("click",  resetgame);