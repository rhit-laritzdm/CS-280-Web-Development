class TicTacToeGame {
    constructor() {
        this.turn = document.getElementById("turn");
        this.boxes = document.querySelectorAll("#main div");
        this.X_or_O = 0;
        this.winningCombinations = [
            [0,1,2], [3,4,5], [6,7,8], // Rows
            [0,3,6], [1,4,7], [2,5,8], // Columns
            [0,4,8], [2,4,6]           // Diagonals
        ];
    }

    selectWinnerBoxes(winnerBoxes) {
        winnerBoxes.forEach((box) => {
            box.classList.add("win");
        });
    
        this.turn.innerHTML = winnerBoxes[0].innerHTML + " is a winner";
        this.turn.style.fontSize = "40px";
    }

    getWinner() {
        for (const combination of this.winningCombinations) {
            const [a,b,c] = combination;
            const boxA = this.boxes[a], boxB = this.boxes[b], boxC = this.boxes[c];
            console.log(a,b,c);
            console.log(boxA,boxB,boxC);
            if (boxA.innerHTML !== "" && boxA.innerHTML === boxB.innerHTML &&
                    boxA.innerHTML === boxC.innerHTML) {
    
                this.selectWinnerBoxes([boxA, boxB, boxC]);
                return boxA.innerHTML;
            }
        }
        return null; // No winner yet
    }

    handleBoxClick(box) {
        if (this.getWinner()) {
            // If there's already a winner, do nothing
            return;
        }
        if (box.innerHTML !== "X" && box.innerHTML !== "O") {
    
            const currentPlayer = this.X_or_O % 2 === 0 ? "X" : "O";
            box.innerHTML = currentPlayer;
            this.turn.innerHTML = (currentPlayer === "X" ? "O" : "X") + " Turn Now";
            this.X_or_O += 1;
    
            const winner = this.getWinner();
            if (winner) {
                this.X_or_O = 0; // Reset turn count
                return;
            }
        }
    }

    replay() {
        this.boxes.forEach((box) => {
            box.classList.remove("win");
            box.innerHTML = "";
        });

        this.turn.innerHTML = "Play"; // Reset turn text
        this.turn.style.fontSize = "25px"; // Reset turn text size
        this.X_or_O = 0; // Reset turn count
    }

    init() {
        this.boxes.forEach((box) => {
            box.addEventListener("click", () => this.handleBoxClick(box));
        });
        document.getElementById("replay").addEventListener("click", () => this.replay());
    }

}

const game = new TicTacToeGame();
game.init();