const Form = document.getElementById('booksform');
const Bookscontainer = document.querySelector('.books');
const bookname = Form['title'];
const writer = Form['name'];
const object = {};

let title = '';
let name = '';

const books = [];

function Book(title, name, node = null) {
  this.title = title;
  this.name = name;
  this.node = node;
}

const addBook = (book) => {
  let node = createBooksElements(book);
  book.node = node;
  books.push(book);
};

bookname.addEventListener('input', () => {
  title = bookname.value;
});

writer.addEventListener('input', () => {
  name = writer.value;
});

const createBooksElements = ({title , name})=> {
  const Booksdiv = document.createElement ('div');
  const Bookinfo = document.createElement('p');
  const BookTitle = document.createElement('p');
  const BookWritter = document.createElement('p');
  const remove = document.createElement('button');
  remove.innerHTML = 'Remove';
  remove.addEventListener('click', () => {
    books.forEach(book => {
      if (book.title === title && book.name === name) {
        let i = books.indexOf(book);

        Bookscontainer.removeChild(books[i].node);
        books.splice(i,1)
        stringfyForm()
            }
        })
    })
    const line = document.createElement('hr')

    //BookTitle.innerText = " Title: " + title;
    Bookinfo.innerText = title + " by " + name;
  //BookWritter.innerText = " Writer: " + name;

  

  Booksdiv.append( Bookinfo);
  Bookscontainer.appendChild(Booksdiv);
  Booksdiv.appendChild(remove);
  Booksdiv.appendChild(line);

  return Booksdiv;
}

books.forEach(createBooksElements);

Form.onsubmit = (e) => {
  e.preventDefault();
  addBook(new Book(title, name));
    stringfyForm()
};

const storeFrom = document.querySelector('form');

const stringfyForm = () => {
  const data = JSON.stringify(books);
  localStorage.setItem('books', data);
};

window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));
  if (userInput !== null) {
    bookname.value = userInput.TitleID;
    writer.value = userInput.writterid;
  }
});
// Add to localStorage
  storeFrom.addEventListener('input', () => {
  object.TitleID = bookname.value;
  object.writterid = writer.value;
  localStorage.setItem('data', JSON.stringify(object));
});
