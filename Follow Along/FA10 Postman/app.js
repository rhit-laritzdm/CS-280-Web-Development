const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
    console.log("Server Listening on PORT:",port);
});
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});