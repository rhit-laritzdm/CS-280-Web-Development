// Containers from html
const fromIndexInput = document.getElementById('fromIndexInput');
const toIndexInput = document.getElementById('toIndexInput');
const moveButton = document.getElementById('moveButton');
const resetButton = document.getElementById('resetButton');
const monthList = document.getElementById('monthList');

// Event Listeners
document.addEventListener('DOMContentLoaded', getMonths());
moveButton.addEventListener('click', move());
resetButton.addEventListener('click', setMonths());

// Functions
async function getMonths() {
    try {
        const response = await fetch('http://localhost:3000/api/getmonths');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const monthsJSON = await response.json(); // Converts buffer to json
        console.log(monthsJSON);
        const months = monthsJSON.months; // extracts list from json
        console.log(months);
        monthList.innerHTML = "";
        months.forEach(month => {
            const monthLi = document.createElement('li');
            monthLi.className = 'month';
            monthLi.innerHTML = month;
            monthList.appendChild(monthLi);
        });
    } catch (error) {
        console.error('Error fetching months:', error);
    }
}

async function move() {
    console.log('move() called');
    try {
        const fromIndex = fromIndexInput.innerHTML;
        const toIndex = toIndexInput.innerHTML;
        console.log(fromIndex);
        const s = `http://localhost:3000/api/move/${fromIndex}/${toIndex}`;
        console.log(s);
        // const response = await fetch(`http://localhost:3000/api/move/${fromIndex}/${toIndex}`);
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // console.log(response);
        // const monthsJSON = await response.json(); // Converts buffer to json
        // console.log(monthsJSON);
        // const months = monthsJSON.months; // extracts list from json
        // console.log(months);
        // monthList.innerHTML = "";
        // months.forEach(month => {
        //     const monthLi = document.createElement('li');
        //     monthLi.className = 'month';
        //     monthLi.innerHTML = month;
        //     monthList.appendChild(monthLi);
        // });
    } catch (error) {
        // console.error('Error fetching months:', error);
    }
}

async function setMonths() {
    console.log('setMonths() called');
    // try {
    //     const response = await fetch('http://localhost:3000/api/setmonths');
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     console.log(response);
    //     const monthsJSON = await response.json(); // Converts buffer to json
    //     console.log(monthsJSON);
    //     const months = monthsJSON.months; // extracts list from json
    //     console.log(months);
    //     monthList.innerHTML = "";
    //     months.forEach(month => {
    //         const monthLi = document.createElement('li');
    //         monthLi.className = 'month';
    //         monthLi.innerHTML = month;
    //         monthList.appendChild(monthLi);
    //     });
    // } catch (error) {
    //     console.error('Error fetching months:', error);
    // }
}





// document.getElementById('fetchData').addEventListener('click', function() {
//     fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('dataContainer').innerHTML = `
//                 <p><strong>Title:</strong> ${data.title}</p>
//                 <p><strong>ID:</strong> ${data.id}</p>
//                 <p><strong>Completed:</strong> ${data.completed}</p>
//             `;
//         })
//         .catch(error => {
//             console.error("There was an error fetching data:", error);
//         });
// });