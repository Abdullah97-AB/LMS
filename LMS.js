document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('bookForm');
    const booksList = document.getElementById('booksList');
    let books = [];

    function renderBooks() {
        booksList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.bookId}: ${book.title} by ${book.author} (${book.year})`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                books = books.filter(b => b.bookId !== book.bookId);
                renderBooks();
            };
            li.appendChild(deleteButton);
            booksList.appendChild(li);
        });
    }

    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const bookId = document.getElementById('bookId').value;
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        const book = { bookId, title, author, year };
        books.push(book);
        renderBooks();
        
        bookForm.reset();
    });
});
