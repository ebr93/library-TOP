
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

// Examples
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
let jojolion = new Book('Jojolion Volume 1', 'Hiroiko Araki', 100, true);

// Form objects and functions
let addBookBtn = document.querySelector('.add_btn');
let clearBooksBtn = document.querySelector('#clear');
let libraryContainer = document.querySelector('.library_container');

let book_title = document.querySelector('#book_title');
let book_author = document.querySelector('#book_author');
let book_pages = document.querySelector('#book_pages');
let read_book = document.querySelector('#read_book');

// Step 2 of 3
let printBook = function(book) {      
    let bookClass = document.querySelector('.book'); 
    const bookContent = document.createElement('div');
    const bookButton = document.createElement('button');
    bookContent.classList.add('book');
    if (book.read === true) {
        bookContent.innerText = `"${book.title}"\n ${book.author}\n ${book.pages} Pages\n`;
        bookButton.innerText = 'Read';
        bookButton.classList.add('readChange');
        bookContent.appendChild(bookButton);
    } else {
        bookContent.innerText = `"${book.title}"\n ${book.author}\n ${book.pages} Pages\n`;
        bookButton.innerText = 'Not Read';
        bookButton.classList.add('readChange');
        bookContent.appendChild(bookButton);
    }
    libraryContainer.appendChild(bookContent);
}

// Step 3 of 3
let clearForm = () => {
    book_title.value = '';
    book_author.value = '';
    book_pages.value = '';
    read_book.checked = false;
}

// Step 1 of 3
// Step 2 and 3 come before because they need to be present before function 1 is called. 
let inputToLibrary = () => {

    if (book_title.value === '' || book_author.value === '' || isNaN(book_pages.value) === true || book_pages.value === '') {
        return;
    }

    let book = new Book(book_title.value, book_author.value, book_pages.value, read_book.checked);
    // resetLibrary();
    addBookToLibrary(book);
    // library.forEach(book => printBook(book));
    printBook(book);
    clearForm();
    btnToggle = document.getElementsByClassName("readChange");
    Array.from(btnToggle).forEach((btn) =>
        btn.addEventListener('click', () => {
            if (btn.textContent == "Read") {
                btn.innerText = "Not Read"
            } else if (btn.textContent == "Not Read") {
                btn.innerText = "Read"
            }
        })
    )
}

addBookToLibrary(theHobbit);
addBookToLibrary(jojolion);
printBook(theHobbit);
printBook(jojolion);

function clearAllBooks() {
    resetLibrary();
    library = [];
}

function resetLibrary() {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }
}

/* this works to just delete 1 instance, in this case the first one
function clearBook() {
    let books = document.querySelector('.book');
    books.parentNode.removeChild(books);
    //this.parentNode.removeChild(this);
}
*/

addBookBtn.addEventListener('click', inputToLibrary);
clearBooksBtn.addEventListener('click', clearAllBooks);

// Reading button toggle
let btnToggle = document.getElementsByClassName("readChange");
Array.from(btnToggle).forEach((btn) =>
    btn.addEventListener('click', () => {
        if (btn.textContent == "Read") {
            btn.innerText = "Not Read"
        } else if (btn.textContent == "Not Read") {
            btn.innerText = "Read"
        }
    })
)