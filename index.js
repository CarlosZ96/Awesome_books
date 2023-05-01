const TittleInput = document.querySelector('.title_input');
const AuthorInput = document.querySelector('.author_input');
const BtnAdd = document.querySelector('.btn_add');
const BooksUl = document.querySelector('.books_list');

function DeleteBook() {
  const DeleteBtn = document.createElement('button');
  DeleteBtn.textContent = 'Remove';
  DeleteBtn.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    BooksUl.removeChild(item);
  });
  return DeleteBtn;
}

BtnAdd.addEventListener('click', (e) => {
  e.preventDefault();

  const tittleo = TittleInput.value;
  const authoro = AuthorInput.value;

  const book = document.createElement('li');
  const tittle = document.createElement('p');
  const author = document.createElement('p');
  const line = document.createElement('hr');

  tittle.textContent = tittleo;
  author.textContent = authoro;

  BooksUl.append(book);
  book.append(tittle);
  book.append(author);
  book.append(DeleteBook());
  book.append(line);

  TittleInput.value = '';
  AuthorInput.value = '';
});

// Capture the form and form elements
const author = document.getElementById('author_input');
const title = document.getElementById('title_input');

// Get data from the javascript object
function getFormData() {
  const userData = localStorage.getItem('userData');
  if (userData !== null) {
    const userDataObj = JSON.parse(userData);
    author.value = userDataObj.name;
    title.value = userDataObj.text;
  }
}
// Set data in the javascript object
function setFormData() {
  // Create a JavaScript object with the captured values
  const contactInfo = {
    name: author.value,
    text: title.value,
  };
  // Save the object in the localStorage
  localStorage.setItem('userData', JSON.stringify(contactInfo));
}

// Load stored object values from localstorage
window.onload = () => { getFormData(); };

// Listeners when an input value in the form changes
author.addEventListener('change', () => setFormData());
title.addEventListener('change', () => setFormData());