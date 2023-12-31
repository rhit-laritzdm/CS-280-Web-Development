const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const msg = getNotes();

// console.log(msg)
// const greenMsg = chalk.green.bold(msg);
// console.log(greenMsg);
// console.log(process.argv);
// const command = process.argv[2];
// if (command==='add') {
//     console.log('adding note');
//     console.log(process.argv);
//     console.log(yargs.argv);
//     // output { _: [], '$0': 'app.js' }
// } else if (command==='remove') {
//     console.log('removing note');
// };

// customization of commands
// yargs.command({
//     command: 'add',
//     describe: 'Adding note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler: function(argv) {
//         console.log('Adding a new note');
//         console.log(`Title: $Title: ${argv.title}`);
//         console.log(`Body: ${argv.title}`);
//     }
// });
// yargs.command({
//     command: 'remove',
//     describe: 'Removing a new note',
//     handler: function() {
//         console.log('Removing a new note')
//     }
// });
// yargs.command({
//     command: 'list',
//     describe: 'Listing all notes',
//     handler: function() {
//         console.log('Listing all notes')
//     }
// });
// yargs.command({
//     command: 'read',
//     describe: 'Reading your note',
//     handler: function() {
//         console.log('Reading a note')
//     }
// });

// Uncomment to see command output
// console.log(yargs.argv);

// Practice 2: Storing Data as JSON
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'    
// };
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// output: {"title":"Ego is the enemy","author":"Ryan Holiday"}
// console.log(bookJSON.title);
// output: undefined
// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed.title);
// output: Ego is the enemy

// const fs = require('fs');
// fs.writeFileSync('1-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json'); 
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
// output: {"title":"Ego is the enemy","author":"Ryan Holiday"} // JSON
// const data = JSON.parse(dataBuffer);
// console.log(data);
// output: { title: 'Ego is the enemy', author: 'Ryan Holiday' } // JS object
// console.log(dataBuffer);

// const fs = require('fs')
// const dataBuffer = fs.readFileSync('data.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.name, data.city)
// data.name = "Daniel";
// data.city = "Cincinnati";
// const updateDataJSON = JSON.stringify(data)
// fs.writeFileSync('data.json', updateDataJSON)

// Practice 3: Adding notes











