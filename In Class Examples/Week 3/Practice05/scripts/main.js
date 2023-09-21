window.onresize = screen;
window.onload = screen;
main = function() {
    console.log("Ready");
    window.alert(5 + 6);
    console.log(5 + 6); // single line comment
    /*
    multi line comment
    */
   let v = 5; //mutable, block scope, can't be redeclared, must be declared
   // let v = 5; // Not allowed
   const h = 2; //immutable, block scope, can't be redeclared, must be assigned value when declared
   // it is a constant reference, not necessarily a constant value
   let huh; // value currently undefined
   huh = "Volvo";
   let $2_ = 2;
   {
    let x = 3;   // Allowed
    }
    carName = "Volvo"; //hoisting examble (use before declared)
    var carName;
    // =, +=, -=, *=, /=, %= (modulus), and **= (power) are all assignment operators
    // == (equal to), === (equal value and equal type), !=, !==, >, <, >=, <=, ? (ternary operator - run 1st if true, second if false)
    let text1 = "A";
    let text2 = "B";
    let result = text1 < text2; // true (compares alphabetically)
    x ||= y // x = x || (x=y)
    let p;       // Now x is undefined
    p = 5;       // Now x is a Number
    p = "John";  // Now x is a String
    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    typeof "John"         // Returns "string"
}

function myFunction1() {
    document.getElementById("demo5").innerHTML = "Paragraph changed.";
}

main();