// Question 1
console.log("Question 1");

for (let i = 2; i <=10; i+=2) {
    console.log(i);
}

// Question 2
console.log("Question 2");
for (let i = 5; i >=1; i--) {
    console.log(i);
}
// Question 3
console.log("Question 3");
const numbers = [1,2,3,4,5]
let sum = 0;
for (const n of numbers) {
    sum += n;
}
console.log(`The sum is ${sum}`);
// Question 4
console.log("Question 4");
const student = {name: 'John', age: 20, grade: 'A'};
for (const key in student) {
    console.log(key);
}
// Question 5
console.log("Question 5");
const book = {title: 'Harry Potter', auther: 'J\.K\. Rowling', year: 1997};
for (const key in book) {
    console.log(book[key]);
}
// Question 6
console.log("Question 6");
const colors = ['red', 'green', 'blue', 'yellow']
for (const color of colors) {
    console.log(color);
}

// Question 7
// See Question 3

// Question 8
console.log("Question 8");
const temperatures = [32, 68,75,82,56];
temperatures.forEach(function(tF) {
    tC = (tF-32)*5/9;
})
console.log(temperatures);

// Other practice
function list(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
list(1,2,3,4)

function mean(...values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total/values.length;
}
console.log(mean(1,2,3,4));
function hello(name='World') {
    console.log(`Hello ${name}`);
}
hello();
hello('Daniel');
