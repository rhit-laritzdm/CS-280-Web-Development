document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataTableHead = document.querySelector("#dataTable thead tr");
    const dataTableBody = document.querySelector("#dataTable tbody tr");

    fetchDataButton.addEventListener("click", function() {
        fetch(`https://api.chucknorris.io/jokes/random`)
            .then(response => response.json())
            .then(data => {
                // Clear previous headers and data
                dataTableHead.innerHTML = '';
                dataTableBody.innerHTML = '';

                // Populate the table
                // for (const key in data) {
                //     dataTableHead.insertAdjacentHTML('beforeend', `<th>${key}</th>`);
                //     dataTableBody.insertAdjacentHTML('beforeend', `<td>${data[key]}</td>`);
                // }
                dataTableHead.insertAdjacentHTML('beforeend', `<th>Source</th>`);
                dataTableBody.insertAdjacentHTML('beforeend', `<td>${data["url"]}</td>`);
                dataTableHead.insertAdjacentHTML('beforeend', `<th>Joke</th>`);
                dataTableBody.insertAdjacentHTML('beforeend', `<td>${data["value"]}</td>`);
                    
                // Close the modal
                $("#dataIndexModal").modal('hide');
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                dataTableBody.innerHTML = `<td colspan="2">Error fetching data. Please try again.</td>`;
            })
            .finally(() => {
                // Ensure modal and its backdrop are dismissed
                $("#dataIndexModal").modal('hide');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
    });
});