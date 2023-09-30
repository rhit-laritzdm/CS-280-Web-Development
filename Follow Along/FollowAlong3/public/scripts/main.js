const owl1 = "Hedwig";
const owl2 = "Pidwidgeon";
let currentOwl = owl1;

main = function() {
    console.log("Ready");
    document.getElementById("#owlSelector").onclick = (event) => {
        console.log("Select Owl Button");
        switchOwl();
    };
}

switchOwl = function() {
    if (currentOwl==owl1) {
        document.getElementById('#owlName').innerHTML = owl2;
        document.getElementById('#owlPicture').innerHTML = `images/${owl2}.png`;
    } else {
        document.getElementById('#owlName').innerHTML = owl1;
        document.getElementById('#owlPicture').innerHTML = `images/${owl1}.png`;
    }
}

main();