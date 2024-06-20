//selecting the object

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let main  = document.querySelector("main");
let newGame = document.querySelector(".new-gameBttn");
let winner = document.querySelector(".winner");
let msg = document.querySelector(".msg");
let turn0 = true;

//2D array og winning positions
const winPatterns = [
    [0,1,2],
    [ 0,3,6],
    [0,4,8],
    [1,4,7]
    ,[2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
//--------------------------------------------------------------------------------------------
// REQUIRED FUNCTIONS:

// 1. function for dispaly who is the winner
const showWinner = (w) => {
    msg.innerText = `Congatulations , Winner is ${w}`;
    winner.classList.remove("hide");
    main.classList.add("hide");
}

// 2. function for checking who is the winner
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        //winner checking conditions
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                //  alert("WINNER WINNER CHICKEN DINNER !! \n Congatulations "+pos1);
                // main.innerHTML = ' <div  class="winner"><h3 class="msg">Winner Declared !</h3><button  class="new-game">New Game</button></div>'   //we can use another attribute in css called display none then using node.style we can remove the attribute
            }
        }
    }
}

// 3. function for disabling and enabling the boxes
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
// 4. function for reset button

const ResetFunc = () => {
    turn0=true;
    enabableBoxes();
    winner.classList.add("hide");
    
}

// 5. functions to hide boxes
const removeBox=()=>{
    main.classList.remove("hide");
    winner.classList.add("hide");
}
//----------------------------------------------------------------------------------

//for each box in boxes we are adding the event on click
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turn0){ //player0
            box.innerText = "O";
            turn0=false;
        }
        else{ //playerX
            box.innerText = "X";
            turn0=true;           
        }
        box.disabled=true;
        checkWinner();
    });
});

//ENENTS - on click
reset.addEventListener("click", ResetFunc);
newGame.addEventListener("click", ResetFunc);
newGame.addEventListener("click", removeBox);

  

  
   

   
    