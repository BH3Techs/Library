function Book(title, author, pages, read){
    this.title =title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `The ${this.title} By  ${this.author} with  ${this.pages}, ${this.read}`;
}

let finalAnswer = new Book("Kutonhodzwa KwaChauruka","Athur Marara", "348", "not yet read");

console.log(finalAnswer.info());
