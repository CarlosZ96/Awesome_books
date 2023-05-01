const tittle_input = document.querySelector('.title_input');
const author_input = document.querySelector('.author_input');
const btn_add = document.querySelector('.btn_add');
const books_ul = document.querySelector('.books_list');

btn_add.addEventListener('click', (e) => {
  e.preventDefault();

  const tittleo = tittle_input.value;
  const authoro = author_input.value;

  const book = document.createElement('li');
  const tittle = document.createElement('p');
  const author = document.createElement('p');
  const line = document.createElement('hr');

  tittle.textContent= tittleo;
  author.textContent= authoro;

  books_ul.append(book);
  book.append(tittle);
  book.append(author);
  book.append(delete_book());
  book.append(line);

  tittle_input.value='';
  author_input.value='';
});

function delete_book() {
  const delete_btn = document.createElement('button');
  delete_btn.textContent = 'Remove'; 
  delete_btn.addEventListener('click', (e) => {
  const item = e.target.parentElement;
  books_ul.removeChild(item);
  });
  return delete_btn;
}