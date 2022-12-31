let myLibrary = [];
myLibrary.push(new Book("Kutonhodzwa KwaChauruka","Athur Marara", "348", "not yet read"));
let defaultBook ='';

const addBookModal = document.getElementById('addBookModal');
const addBookBtn = document.getElementById('addBook');
const allBooks = document.getElementById('allBooks');
const bookDiv = document.createElement('div');

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
};

//display all books
function displayBooks(){
    for(i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
        bookDiv.textContent = myLibrary[i].title;
        allBooks.appendChild(bookDiv);

    }

};


//show add books modal
const openAddBookModal = () =>{
    addBookModal.classList.replace('add-book-modal','active-book-modal');
};

addBookBtn.onclick = openAddBookModal;
displayBooks();




  
