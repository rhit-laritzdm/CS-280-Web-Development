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