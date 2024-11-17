document.addEventListener('DOMContentLoaded', function() {
    const bookContainer = document.getElementById('book-container');

 
    const booksData = {
        "books": [
            {"title": "Cien años de soledad", "author": "Gabriel García Márquez", "year": 1967},
            {"title": "1984", "author": "George Orwell", "year": 1949},
            {"title": "Matar a un ruiseñor", "author": "Harper Lee", "year": 1960},
            {"title": "El Visitante", "author": "Stephen King", "year": 2011},
            {"title": "Drácula", "author": "Bram Stoker", "year": 1897},
            {"title": "¿Por quién redoblan las campanas?", "author": "Ernest Hemingway", "year": 1940},
   
        ]
    };


    booksData.books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
            <p>Año: ${book.year}</p>
        `;
        bookContainer.appendChild(bookCard);
    });
});
