let counter = 0;
let favoriteColor = 'Blue';

main = function() {
    console.log("Ready");
    listenForCounters();
    listenForColors();
}

updateView = function() {
    document.querySelector('#counterText').innerHTML = `${counter}`
    console.log(`Favorite Color: ${favoriteColor}`);
    document.querySelector('#favoriteColorBox').style.backgroundColor = favoriteColor;
    document.querySelector('#favoriteColorBox').innerHTML = favoriteColor;
}

listenForCounters = function() {
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };
}

listenForColors = function() {
    document.querySelector("#blueButton").onclick = (event) => {
        favoriteColor = "Blue";
        updateView();
    };
    document.querySelector("#greenButton").onclick = (event) => {
        favoriteColor = "Green";
        updateView();
    };
    document.querySelector("#redButton").onclick = (event) => {
        favoriteColor = "Red";
        updateView();
    };
    document.querySelector("#purpleButton").onclick = (event) => {
        favoriteColor = "Purple";
        updateView();
    };
}


main();