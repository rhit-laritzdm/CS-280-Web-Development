document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById("fetchDataButton");
    const dataIndexInput = document.getElementById("dataIndexInput");
    const dataTableHead = document.querySelector("#dataTable thead tr");
    const dataTableBody = document.querySelector("#dataTable tbody tr");

    fetchDataButton.addEventListener("click", function() {
        const dataIndex = dataIndexInput.value;
        if (dataIndex) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${dataIndex}`)
                .then(response => response.json())
                .then(data => {
                    // Clear previous headers and data
                    dataTableHead.innerHTML = '';
                    dataTableBody.innerHTML = '';

                    // Populate the table
                    for (const key in data) {
                        dataTableHead.insertAdjacentHTML('beforeend', `<th>${key}</th>`);
                        dataTableBody.insertAdjacentHTML('beforeend', `<td>${data[key]}</td>`);
                    }
                    
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
                    $('modal-backdrop').remove();
                });
        };
    });
});

