let myLibrary = [];
let id = 2;

const addBookModal = document.getElementById('addBookModal');
const addBookBtn = document.getElementById('addBook');
const allBooks = document.getElementById('allBooks');
const bookDiv = document.createElement('div');
const addBooksBtn = document.getElementById('bookBtn');
const bookFieldsForm = document.getElementById('bookFields');

class Book{
    constructor(id,title, author, pages, read){
        this.id = id;
        this.title =title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
}
myLibrary.push(new Book("Microeconomics","RobeRt S. Pindyck & Daniel l. Rubinfeld", "787", "Read"));
myLibrary.push(new Book("Kutonhodzwa KwaChauruka","Athur Marara", "348", "not yet read"));

Book.prototype.info = function(){
    return `The ${this.title} By  ${this.author} with  ${this.pages}, ${this.read}`;
}

function addBookToLibrary(title, author, pages, read) {
    id+=1;
   myLibrary.push(new Book(id,title, author, pages, read));
    displayBooks();
   event.preventDefault();
};

function removeBookFunct(id){
    event.preventDefault();
    let index = myLibrary.findIndex(book => book.id == id)
    myLibrary.splice(index,1);
    location.reload();
    
    console.log(myLibrary);
};
function updateReadStatus(id){
    
}

//display all books
function displayBooks(){
    
    // console.log(myLibrary.length==3);
    if(myLibrary.length==3){
        for(i=0; i<myLibrary.length; i++){
            BookCard(myLibrary[i]);
        }
    }else{
        BookCard(myLibrary[myLibrary.length-1]);
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

    // console.log(title);
    addBookToLibrary(title,author,pages,read);
};

// displayBooks();
addBookBtn.onclick = openAddBookModal;

bookFieldsForm.onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const pages = document.getElementById('bookPages').value;
    let read = document.getElementById('bookRead').checked;

    console.log(read);
    if(read){
        read = "Read";
    }else{
        read = "Not Yet Read";
    }
    addBookToLibrary(title,author,pages,read);
    addBookModal.classList.replace('active-book-modal','add-book-modal');    
};

function BookCard(book){
    const bookCard = document.createElement('div');
    const titleP = document.createElement('p');
    const authorP = document.createElement('p');
    const pagesP = document.createElement('p');
    const readP = document.createElement('p');
    const buttonsDiv = document.createElement('div');

    const removeBook = document.createElement('button');
    removeBook.classList.add('remove-book');
    removeBook.setAttribute('id',book.id);
    // removeBook.setAttribute('data-id',);
    removeBook.textContent = "Remove Book";

    const updateReadStatus = document.createElement('button');
    updateReadStatus.classList.add('update-read-status');
    updateReadStatus.setAttribute('id','updateReadStatus');
    updateReadStatus.textContent = "Update Status";

    buttonsDiv.appendChild(removeBook);
    buttonsDiv.appendChild(updateReadStatus);

    bookCard.classList.add('book-card');

    titleP.textContent = "Title : "+book.title;
    authorP.textContent = "Author : "+book.author;
    pagesP.textContent = "Number of pages : "+book.pages;
    readP.textContent = "Read Status : "+book.read;

    bookCard.appendChild(titleP);
    bookCard.appendChild(authorP);
    bookCard.appendChild(pagesP);
    bookCard.appendChild(readP);
    bookCard.appendChild(buttonsDiv);

    allBooks.appendChild(bookCard);

    const removeBookBtn = document.querySelectorAll('button.remove-book');

    removeBookBtn.forEach((removeBtn) =>{
        removeBtn.addEventListener('click',() =>{
            removeBookFunct(removeBtn.id);
        });
    });

}




