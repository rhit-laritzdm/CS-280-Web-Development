document.addEventListener('DOMContentLoaded', async () => {
    try {
    const response = await fetch('http://localhost:3030/books');
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = await response.json();
    const booksContainer = document.getElementById('books');
    books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    booksContainer.appendChild(bookDiv);
    });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
    });
    