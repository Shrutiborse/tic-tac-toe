let box=document.querySelectorAll(".cell");
let reset=document.getElementById("reset");
let currentPlayer="X";
let gameActive=true;
const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
checkWin=()=>{
    console.log("Checking win condition...");
    let roundWon=false;
    for(let i=0;i<=7;i++){
        const winCondition=winningConditions[i];
        const a=box[winCondition[0]].innerText;
        const b=box[winCondition[1]].innerText;
        const c=box[winCondition[2]].innerText;
        if(a===""||b===""||c===""){
            continue;
        }   
        if(a===b&&b===c){
            roundWon=true;
            break;
        }
    }
    if(roundWon){
        alert(`Player ${currentPlayer} wins!`);
        gameActive=false;
        return;
    }
    console.log("No win yet, checking for draw...");
    let roundDraw=![...box].some(cell=>cell.innerText==="");
    if(roundDraw){
        alert("It's a draw!");
        gameActive=false;
        return;
    }
    currentPlayer=currentPlayer==="X"?"O":"X";
}
box.forEach(element => {
    element.addEventListener("click", () => {
        if (gameActive && element.textContent === "") {
            console.log(`Player ${currentPlayer} clicked cell ${element.dataset.index}`);
            element.textContent = currentPlayer;
            checkWin();
        }
    });

    reset.addEventListener("click", () => {
        console.log("Resetting game...");
        box.forEach(cell => cell.textContent = "");
        currentPlayer = "X";
        gameActive = true;
    });
});