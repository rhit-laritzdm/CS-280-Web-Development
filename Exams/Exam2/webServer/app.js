const express = require("express");
const app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());

const fs = require("fs");
const serverSideStorage = "../data/db.json";

// Reads data from file
function readData() {
    const buffer = fs.readFileSync(serverSideStorage, function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data read successfully!");
        }});
    return JSON.parse(buffer.toString());
}

// Writes data to file
function writeData(data) {
    fs.writeFileSync(serverSideStorage, JSON.stringify(data), function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data saved successfully!");
        }
    })
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// TODO: Create your backend API here:
/**
 * Get Months	- Gets the array of months in order
 *   method:                    GET
 *   path:                      /api/getmonths
 *   expected request body:     none
 *   side effects:              none
 *   example response:          ["January","February","March","April","May","June","July","August","September","October","November","December"]
 */
app.get('/api/getmonths', async (req, res) => {
    res.json(readData());
});

/**
 * Move - Sets the index for one of the months
 *   method:                    PUT
 *   path:                      /api/move/:fromindex/:toindex
 *   expected request body:     none
 *   side effects:              adjusts the order of the array
 *   example response:          {"months": ["January","February","March","April","May","June","July","August","September","October","November","December"],
 *                               "moved_month": "January", 
 *                               "from_index": 0,
 *                               "to_index": 1}
*/
app.put('/api/move/:fromindex/:toindex', async (req, res) => {
    // Retrieves data and extracts array of months
    const { fromindex, toindex } = req.params;
    let data = readData();
    const months = data.months;

    // Swap positions of two months in array
    const moved_month = months[fromindex];
    months[fromindex] = months[toindex];
    months[toindex] = moved_month;

    // Save to server and return response
    data = { months: months };
    const objectToReturn = { months: months, moved_month: moved_month, from_index: fromindex, to_index: toindex};
    writeData(data);
    res.json(objectToReturn);
});

/**
 *  Set months- Set the entire list of months using a POST body that is a JSON array.
 *    method:                    POST
 *    path:                      /api/setmonths
 *    expected request body:     JSON object, for example {"months": ["January","February","March","April","May","June","July","August","September","October","November","December"]}
 *    side effects:              saves the new array into db.json 
 *    response: ["January","February","March","April","May","June","July","August","September","October","November","December"]
 */
app.post('/api/setmonths', async (req, res) => {
    const {months} = req.body;
    const data = { months: months};
    await writeData(data);
    // writeData(data);
    res.json(data);
});