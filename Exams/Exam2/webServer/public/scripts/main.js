// Elements from html
const fromIndexInput = document.getElementById('fromIndexInput');
const toIndexInput = document.getElementById('toIndexInput');
const moveButton = document.getElementById('moveButton');
const resetButton = document.getElementById('resetButton');
const monthList = document.getElementById('monthList');

// Event Listeners for page loading and buttons
document.addEventListener('DOMContentLoaded', getMonths);
moveButton.addEventListener('click', move);
resetButton.addEventListener('click', setMonths);

// Functions
async function getMonths() {
    console.log('getMonths() called');
    try {
        const url = 'http://localhost:3000/api/getmonths';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const monthsJSON = await response.json(); // Converts buffer to json
        console.log(monthsJSON);
        const months = monthsJSON.months; // extracts list from json
        updateMonthsList(months);
    } catch (error) {
        console.error('Error fetching months:', error);
    }
}

async function move() {
    console.log('move() called');
    try {
        const fromIndex = fromIndexInput.value;
        const toIndex = toIndexInput.value;
        console.log(`Moving ${fromIndex} to ${toIndex}`);
        const url = `http://localhost:3000/api/move/${fromIndex}/${toIndex}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            }
        }); 
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const monthsJSON = await response.json(); // Converts buffer to json
        console.log(monthsJSON);
        const months = monthsJSON.months; // extracts list from json
        updateMonthsList(months);
    } catch (error) {
        console.error('Error fetching months:', error);
    }
}

async function setMonths() {
    console.log('setMonths() called');
    try {
        const url = 'http://localhost:3000/api/setmonths';
        const stringifiedMonths = JSON.stringify({"months": ["January","February","March","April","May","June","July","August","September","October","November","December"]});
        console.log(stringifiedMonths);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: stringifiedMonths
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        const monthsJSON = await response.json(); // Converts buffer to json
        console.log(monthsJSON);
        const months = monthsJSON.months; // extracts list from json
        updateMonthsList(months);
    } catch (error) {
        console.error('Error fetching months:', error);
    }
}

// Function to update html months list from a list of months
function updateMonthsList(months) {
    console.log(months);
    monthList.innerHTML = "";
    months.forEach(month => {
        const monthLi = document.createElement('li');
        monthLi.className = 'month';
        monthLi.innerHTML = month;
        monthList.appendChild(monthLi);
    });
}