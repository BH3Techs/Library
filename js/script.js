let myLibrary = [];
myLibrary.push(new Book("Microeconomics","RobeRt S. Pindyck & Daniel l. Rubinfeld", "787", "Read"));
myLibrary.push(new Book("Kutonhodzwa KwaChauruka","Athur Marara", "348", "not yet read"));
let defaultBook ='';

const addBookModal = document.getElementById('addBookModal');
const addBookBtn = document.getElementById('addBook');
const allBooks = document.getElementById('allBooks');
const bookDiv = document.createElement('div');
const addBooksBtn = document.getElementById('bookBtn');
const bookFieldsForm = document.getElementById('bookFields');

function Book(title, author, pages, read){
    this.title =title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `The ${this.title} By  ${this.author} with  ${this.pages}, ${this.read}`;
}

defaultBook = new Book("Kutonhodzwa KwaChauruka","Athur Marara", "348", "not yet read");

function addBookToLibrary(title, author, pages, read) {
   myLibrary.push(new Book(title, author, pages, read));
   displayBooks();
   event.preventDefault();
};

//display all books
function displayBooks(){

    // for(i=0; i<myLibrary.length; i++){
    //     console.log(myLibrary[i]);
    //     bookDiv.textContent = myLibrary[i].title;
    //     allBooks.appendChild(bookDiv);
    // }

    for(i=0; i<myLibrary.length; i++){
        BookCard(myLibrary[i])
    }
};

//show add books modal
const openAddBookModal = () =>{
    addBookModal.classList.replace('add-book-modal','active-book-modal');
};
const getBooksFromInput = () => {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pages = document.getElementById('bookPages').value;
    const read = document.getElementById('bookRead').value;

    console.log(title);
    addBookToLibrary(title,author,pages,read);
};

displayBooks();
addBookBtn.onclick = openAddBookModal;

bookFieldsForm.onsubmit = (e) => {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pages = document.getElementById('bookPages').value;
    const read = document.getElementById('bookRead').value;
    
    addBookToLibrary(title,author,pages,read);
};

function BookCard(book){
    const bookCard = document.createElement('div');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const readP = document.createElement('p');

    bookCard.classList.add('bookCard');

    titleP.textContent = "Title : "+book.title;
    authorP.textContent = "Author : "+book.author;
    pagesP.textContent = "Number of pages : "+book.pages;
    readP.textContent = "Read Status : "+book.read;

    bookCard.appendChild(titleP);
    bookCard.appendChild(authorP);
    bookCard.appendChild(pagesP);
    bookCard.appendChild(readP);

    allBooks.appendChild(bookCard);
}