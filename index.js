const titleInput = document.querySelector('.title_input');
const authorInput = document.querySelector('.author_input');
const btnAdd = document.querySelector('.btn_add');
const booksUl = document.querySelector('.books_list');

function deleteBook() {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    booksUl.removeChild(item);
  });
  return deleteBtn;
}

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  const book = document.createElement('li');
  const titleP = document.createElement('p');
  const authorP = document.createElement('p');
  const line = document.createElement('hr');

  titleP.textContent = title;
  authorP.textContent = author;

  booksUl.append(book);
  book.append(titleP);
  book.append(authorP);
  book.append(deleteBook());
  book.append(line);

  titleInput.value = '';
  authorInput.value = '';

  // Save data to localStorage
  const booksList = JSON.parse(localStorage.getItem('booksList')) || [];
  booksList.push({ title, author });
  localStorage.setItem('booksList', JSON.stringify(booksList));
});

// Load data from localStorage
window.addEventListener('load', () => {
  const booksList = JSON.parse(localStorage.getItem('booksList')) || [];
  for (let i = 0; i < booksList.length; i++) {
    const book = document.createElement('li');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const line = document.createElement('hr');

    titleP.textContent = booksList[i].title;
    authorP.textContent = booksList[i].author;

    booksUl.append(book);
    book.append(titleP);
    book.append(authorP);
    book.append(deleteBook());
    book.append(line);
  }
});

// Update localStorage when form values change
authorInput.addEventListener('change', updateLocalStorage);
titleInput.addEventListener('change', updateLocalStorage);

function updateLocalStorage() {
  const booksList = JSON.parse(localStorage.getItem('booksList')) || [];
  const author = authorInput.value;
  const title = titleInput.value;
  const bookIndex = booksList.findIndex(b => b.title === title);
  if (bookIndex !== -1) {
    booksList[bookIndex].author = author;
  } else {
    booksList.push({ title, author });
  }
  localStorage.setItem('booksList', JSON.stringify(booksList));
}
