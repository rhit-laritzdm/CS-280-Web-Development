document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataDisplay = document.getElementById("dataDisplay");
});

fetchDataButton.addEventListener("click", function() {
    const dataIndex = dataIndexInput.value;
    if (dataIndex) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${dataIndex}`)
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
                $('modal-backdrop').remove();
            });
    };
});
















document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dataContainer').innerHTML = `
                <p><strong>Title:</strong> ${data.title}</p>
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Completed:</strong> ${data.completed}</p>
            `;
        })
        .catch(error => {
            console.error("There was an error fetching data:", error);
        });
});