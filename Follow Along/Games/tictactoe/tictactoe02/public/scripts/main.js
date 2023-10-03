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

    winnerBoxes.forEach((box) => {
        box.classList.add("win");
    });

    turn.innerHTML = winnerBoxes[0].innerHTML + " is a winner";
    turn.style.fontSize = "40px";
};

// Function to check and get the winner
function getWinner() {
    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a,b,c] = combination;
        const boxA = boxes[a], boxB = boxes[b], boxC = boxes[c];
        console.log(a,b,c);
        console.log(boxA,boxB,boxC);
        if (boxA.innerHTML !== "" && boxA.innerHTML === boxB.innerHTML &&
                boxA.innerHTML === boxC.innerHTML) {

            selectWinnerBoxes([boxA, boxB, boxC]);
            return boxA.innerHTML;
        }
    }
    return null; // No winner yet
};

// Function to handle box clicks
function handleBoxClick() {
    if (getWinner()) {
        // If there's already a winner, do nothing
        return;
    }
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {

        const currentPlayer = X_or_O % 2 === 0 ? "X" : "O";

        this.innerHTML = currentPlayer;
        console.log(currentPlayer);

        turn.innerHTML = (currentPlayer === "X" ? "O" : "X") + " Turn Now";
        X_or_O += 1;

        const winner = getWinner();
        if (winner) {
            X_or_O = 0; // Reset turn count
            return;
        }
    }
};

// Function to reset the game
function replay() {
    boxes.forEach((box) => {
        box.classList.remove("win");
        box.innerHTML = "";
    })

    X_or_O = 0; // Reset turn count
    turn.innerHTML = "Play"; // Reset turn text
    turn.style.fontSize = "25px"; // Reset turn text size
};

main();