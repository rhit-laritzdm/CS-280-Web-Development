//Question 1
console.log('Question 1');
function multiply(x,y) {
    return x*y;
}
// Test the function
console.log(multiply(2,3));

//Question 2
console.log('Question 2');
function isEven(num) {
    return num%2 == 0;
};
// Test the function
console.log(isEven(6));
console.log(isEven(5));
console.log(isEven(37));
console.log(isEven(32));

//Question 3
console.log('Question 3');
const difference = function subtract(a,b) {
    return a-b;
};
// Test the function
console.log(difference(6,2));
console.log(difference(34,67));
console.log(difference(3.4,6.7));

//Question 4
console.log('Question 4');
const greeting = function(name) {
    console.log(`Hello ${name}`);
}
// Test the function
greeting('Daniel');

//Question 5
console.log('Question 5');
function calculate(x, y) {
    const squareSum = function() {
        return (x+y)**2;
    }
    return squareSum();
}
// Test the function
console.log(calculate(2,4));

//Question 6
console.log('Question 6');
function average(num1, num2, num3) {
    const sum3nums = function() {
        return (num1+num2+num3)/3;
    }
    return sum3nums();
};
// Test the function
console.log(average(8,8,14));
console.log(average(2,4,6));

//Question 7
console.log('Question 7');
const multiply2 = (a,b) => a*b;
// Test the function
console.log(multiply2(3,6));

//Question 8
console.log('Question 8');
const greet2 = (name) => `Hello, ${name}`;
// Test the function
console.log(greet2('you'));

//Question 9
console.log('Question 9');
const square = (x) => x**2;
// Test the function
console.log(square(3));

//Question 10
console.log('Question 10');
const isEven2 = (num) => num%2 === 0;
// Test the function
console.log(isEven2(42));
console.log(isEven2(37));

//Question 11
console.log('Question 11');
const findMax = (numbers) => Math.max(...numbers);
// Test the function
console.log(findMax([3,7,1,3,73,472,-235,94]));

//Question 12
console.log('Question 12');
const addTwoNumbers = (a,b) => a+b;
// Test the function
console.log(addTwoNumbers(47,13));