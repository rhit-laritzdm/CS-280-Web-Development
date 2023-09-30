const owl1 = "Hedwig";
const owl1src = "/images/hedwig.png";
const owl2 = "Pigwidgeon";
const owl2src = "/images/pigwidgeon.png";
let currentOwl = owl1;
console.log("Script Loaded");
main = function() {
    console.log("Ready");
    document.querySelector("#owlSelector").onclick = (event) => {
        console.log("Select Owl Button");
        switchOwl();
    };
}

switchOwl = function() {
    if (currentOwl==owl1) {
        document.getElementById('#owlName').innerHTML = owl2;
        document.getElementById('#owlPicture').src = owl2src;
        currentOwl = owl2;
    } else {
        document.getElementById('#owlName').innerHTML = owl1;
        document.getElementById('#owlPicture').src = owl1src;
        currentOwl = owl1;
    }
}

main();