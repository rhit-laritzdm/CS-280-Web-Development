const clientImage = document.getElementById("clientImage");
const clientName = document.getElementById("clientName");
const clientTestimonial = document.getElementById("clientTestimonial");
const anotherTestimonialButton = document.getElementById("anotherTestimonialButton");

updateClient();

document.addEventListener('DOMContentLoaded', (event) => {
    anotherTestimonialButton.addEventListener("click", function() {
        updateClient();
    });
});

// Provided funciton to create random number for API ids
function getRandomInt() {
    return Math.floor(Math.random() * 10);
    // return a random number between 1 and 8 - we only have 8 API messages
}

// Remove previous HTML content from the card text. The content should be ""
function clearText() {
    clientImage.src = "";
    clientName.innerHTML = "";
    clientTestimonial.innerHTML = "";
}

// replace period by exclamation signs, add a new line, return processed text
function processText(text) {
    const regex = /!!! /g;
    return text.replaceAll('.', '!!!').replaceAll(regex, '$&\n');
}

// split text by a new line, create an array of sentences, return array
function textToArray(text) {
    const textArray = text.split("\n");
    console.log(textArray);
    return textArray;
}

// create for loop over text array. Append span tag and update code
function appendText(textArray) {
    let text = "";
    for (let i = 0; i < textArray.length; i++) {
        text += '<span style="display:block">' + textArray[i] + '</span>';
    };
    return text;
}

function updateClient() {
    let id = getRandomInt() // https://developer.mozilla.org/en-US/docs/Web/API/fetch

    fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users?id=${id}`)
            .then(response => response.json())
            .then(data => {
                data = data[0];
                clearText();
                clientImage.src = data.avatar;
                clientName.innerHTML = data.name;
                clientTestimonial.innerHTML = data.message;
                text = processText(data.message);
                text = textToArray(text);
                clientTestimonial.innerHTML = appendText(text);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                clientTestimonial.innerHTML = "Error fetching data. Please try again.";
                clientName.innerHTML = "Error fetching data. Please try again.";
            });
};