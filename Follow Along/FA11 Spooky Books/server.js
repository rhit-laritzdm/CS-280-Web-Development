const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());
app.use(express.static('public'));

const booksFilePath = './data/books.json';

async function readBooks() {
    try {
        const data = await fs.readFile(booksFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading books:', error);
        return [];
    }
}

async function writeBooks(books) {
    try {
        await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing books:', error);
    }
}

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/books', async (req, res) => {
    const books = await readBooks();
    res.json(books);
});