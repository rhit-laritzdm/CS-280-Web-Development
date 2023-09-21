main = function() {
    console.log("Ready");
    console.log(window.innerWidth)
    screen();
}

function screen() {
    width = window.innerWidth;
    document.querySelector('#size').innerHTML
     = `Width : ${width} px`
}

main();