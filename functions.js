
// library Functions and Book Object

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /*
    this.info = function() { 
        return this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read;
    }
    */
}

function addBookToLibrary(book) {
    library.push(book);
}


let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Read');
let jojolion = new Book('Jojolion Volume 1', 'Hiroiko Araki', 100, 'Read');

// Form objects and functions

let add_btn = document.querySelector('.add_btn');
let library_container = document.querySelector('.library_container');
let bookClass = document.querySelector('.book');

let book_title = document.querySelector('#book_title');
let book_author = document.querySelector('#book_author');
let book_pages = document.querySelector('#book_pages');
let read_book = document.querySelector('#read_book');

/*
let newBook = function(book_title, book_author, book_pages, read_book) {
    let newBook = new Book(book_title.value, book_author.value, book_pages.value, read_book.checked);
    return newBook;
};

let printLibrary = (library) => {
    library.forEach(book => {
        const bookContent = document.createElement(div);
        bookContent.addClassList('book');
        book.innerText = `${book.title}\n ${book.author}\n ${book.pages}\n ${book.read}`;
        library_container.appendChild(bookContent);
    });
}
*/

let printBook = function(book) {       
    const bookContent = document.createElement('div');
    bookContent.classList.add('book');
    bookContent.innerText = `"${book.title}"\n ${book.author}\n ${book.pages} Pages\n ${book.read}`;
    library_container.appendChild(bookContent);
}

let clearForm = () => {
    book_title.value = '';
    book_author.value = '';
    book_pages.value = '';
    read_book.checked = false;
}

let inputToLibrary = function() {

    if (book_title.value === '' || book_author.value === '' || isNaN(book_pages.value) === true || book_pages.value === '') {
        return;
    }

    let book = new Book(book_title.value, book_author.value, book_pages.value, read_book.checked);
    addBookToLibrary(book);
    printBook(book);
    clearForm();
}

addBookToLibrary(jojolion);
addBookToLibrary(theHobbit);
printBook(theHobbit);
printBook(jojolion);

add_btn.addEventListener('click', inputToLibrary);

