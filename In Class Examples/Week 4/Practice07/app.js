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
temperatures.forEach(function(tF, index, arr) {
    tC = (tF-32)*5/9;
    arr[index] = tC;
})
console.log(temperatures);

// Question 9
console.log("Question 9");
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268};
cities.forEach(function(city) {
    console.log(populations[city]);
})

// Question 10
console.log("Question 10");
let s = '';
for (i = 1; i <=5; i++) {
    s = `*${s}`
    console.log(s);
}