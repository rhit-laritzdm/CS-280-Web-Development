const express = require("express");
const app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());

let data = {};
// let data = [];  // or an empty array depending on the instructions for your specific exam

const fs = require("fs");
const serverSideStorage = "../data/db.json";

fs.readFile(serverSideStorage, function (err, buf) {
    if (err) {
        console.log("error: ", err);
    } else {
        data = JSON.parse(buf.toString());
    }
    console.log("Data read from file.");
});

function saveToServer(data) {
    fs.writeFile(serverSideStorage, JSON.stringify(data), function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data saved successfully!");
        }
    })
}


// TODO: Create your backend API here:


app.listen(3000);