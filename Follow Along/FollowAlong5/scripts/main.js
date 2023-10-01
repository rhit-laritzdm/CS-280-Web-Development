const turn = document.getElementById("turn");
const boxes = document.querySelectorAll("#main div");
let X_or_O = 0;

function main() {
    boxes.forEach((box) => {
        box.addEventListener("click", handleBoxClick);
    });
    document.getElementById("replay").addEventListener("click", replay);
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";
};

// Function to select and display the winner
function selectWinnerBoxes(winnerBoxes) {

};

// Function to check and get the winner
function getWinner() {

};

// Function to handle box clicks
function handleBoxClick() {
    

};

// Function to reset the game
function replay() {

};

main();