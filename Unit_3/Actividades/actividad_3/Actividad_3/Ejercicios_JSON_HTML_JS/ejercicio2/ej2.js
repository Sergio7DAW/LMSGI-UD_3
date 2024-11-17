
document.addEventListener('DOMContentLoaded', function() {
   
    fetch('ej2.json')
    .then(response => response.json()) 
    .then(data => {
      
        const container = document.getElementById('book-container');
      
        data.books.forEach(book => {
          
            const div = document.createElement('div');
            div.classList.add('book-card');
            div.textContent = `Nombre: ${book.title}, Edad: ${book.price}`;
          
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));
});
