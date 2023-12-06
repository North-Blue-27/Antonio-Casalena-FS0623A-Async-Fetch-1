// Ottenere i libri dall'API creando le carte
function fetchBooks() {
    fetch('https://striveschool-api.herokuapp.com/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella richiesta API');
        }
        return response.json();
      })
      .then(books => displayBooks(books))
      .catch(error => {
        console.error('Errore nel recupero dei libri:', error);
      });
  }

  // Mostrare i libri sulla pagina
  function displayBooks(books) {
    const booksContainer = document.getElementById('booksContainer');

    books.forEach(book => {
      const card = document.createElement('div');
      card.classList.add('col-md-3', 'mb-4');

      const cardContent = `
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="Copertina del libro">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: ${book.price}</p>
            <button class="btn btn-success">Compra ora</button>
            <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
          </div>
        </div>
      `;

      card.innerHTML = cardContent;
      booksContainer.appendChild(card);
    });
  }

  // Rimozione della carta se il puslavte vieve premuto
  function removeCard(button) {
    const card = button.closest('.col-md-3');
    card.remove();
  }

  // Ottenere i libri all'avvio
  fetchBooks();