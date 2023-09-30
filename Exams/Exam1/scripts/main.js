const owl1 = "Hedwig";
const owl2 = "Pidwidgeon";
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
        document.getElementById('#owlPicture').src = `images/${owl2}.png`;
        currentOwl = owl2;
    } else {
        document.getElementById('#owlName').innerHTML = owl1;
        document.getElementById('#owlPicture').src = `images/${owl1}.png`;
        currentOwl = owl1;
    }
}

main();