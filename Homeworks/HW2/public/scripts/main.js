document.addEventListener('DOMContentLoaded', (event) => {
    const clientImage = document.getElementById("clientImage");
    const clientName = document.getElementById("clientName");
    const clientTestimonial = document.getElementById("clientTestimonial");
    const anotherTestimonialButton = document.getElementById("anotherTestimonialButton");

    anotherTestimonialButton.addEventListener("click", function() {
        fetch("https://64486933e7eb3378ca2e0f51.mockapi.io/api/users")
            .then(response => response.json())
            .then(data => {
                dataDisplay.innerHTML = `<strong>Title:</strong> ${data.title} <br> <strong>Completed:</strong> ${data.completed}`;
                $("#dataIndexModal").modal('hide');
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                dataDisplay.innerHTML = "Error fetching data. Please try again.";
            })
            .finally(() => {
                // Ensure modal and its backdrop are dismissed
                $("#dataIndexModal").modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
    });
});

// Provided funciton to create random number for API ids
function getRandomInt() {
    // return a random number between 1 and 8 - we only have 8 API messages
}

//TODO: Remove previous HTML content from the card text. The content should be ""
function clearText() {
    // Your code
}

// TODO: replace period by exclamation signs, add a new line, return processed text
function processText(text) {
    // Your Code
}

// TODO: split text by a new line, create an array of sentences, return array
function textToArray(text) {
    // Your Code
}

// TODO: create for loop over text array. Append span tag and update code
function appendText(textArray) {
    // Your Code
}

function updateClient() {
    let id = getRandomInt() // https://developer.mozilla.org/en-US/docs/Web/API/fetch

    clearText();
    // Part 1. First just replace card title, card text and card image with new content

    // Part 2. Text processing steps - processText, textToArray, appendText

    // text = processText(text);

    // text = textToArray(text);

    // appendText(text);

}