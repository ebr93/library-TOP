
// Library and Book Object
class Library {
    constructor() { 
        this.library = [];
    }

    get getLibrary() {
        return this.library;
    }

    /**
     * @param {any} book
     */
    set newBook(book) {
        if (!(book instanceof Book)) return;
        this.library.push(book);
    }

    clear() { 
        this.library = [];
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get getTitle() { return this.title; }
    get getAuthor() { return this.author; }
    get getPages() { return this.pages; }
    get getRead() { return this.read; }


    readToggle(valueString) {
        if (valueString == "Read") {
            this.read = true;
        } else {
            this.read = false;
        }
    }
}

// Form objects
let addBookBtn = document.querySelector('.add_btn');
let clearBooksBtn = document.querySelector('#clear');
let libraryContainer = document.querySelector('.library_container');

let book_title = document.querySelector('#book_title');
let book_author = document.querySelector('#book_author');
let book_pages = document.querySelector('#book_pages');
let read_book = document.querySelector('#read_book');

// Step 2 of 3
let printBook = (book) => {      
    const bookContent = document.createElement('div');
    const bookButton = document.createElement('button');
    bookContent.setAttribute('id', `${book.getTitle}`);
    bookContent.classList.add('book');
    if (book.read === true) {
        bookContent.innerText = `"${book.title}"\n ${book.author}\n ${book.pages} Pages\n`;
        bookButton.innerText = 'Read';
        bookButton.setAttribute('type', 'button');
        bookButton.classList.add('readChange');
        bookContent.appendChild(bookButton);
    } else {
        bookContent.innerText = `"${book.title}"\n ${book.author}\n ${book.pages} Pages\n`;
        bookButton.innerText = 'Not Read';
        bookButton.setAttribute('type', 'button');
        bookButton.classList.add('readChange');
        bookContent.appendChild(bookButton);
    }
    libraryContainer.appendChild(bookContent);
};

// Step 3 of 3
let clearForm = () => {
    book_title.value = '';
    book_author.value = '';
    book_pages.value = '';
    read_book.checked = false;
};

// Step 1 of 3
// Step 2 and 3 come before because they need to be present before function 1 is called. 
let inputToLibrary = () => {

    if (book_title.value === '' || book_author.value === '' || isNaN(book_pages.value) === true || book_pages.value === '') {
        return;
    }

    let book = new Book(book_title.value, book_author.value, book_pages.value, read_book.checked);
    addBookToLibrary(book);
    printBook(book);
    clearForm();
};

const personalLibrary = new Library();

// functions to modify library UI and instance personalLibrary
const addBookToLibrary = (book) => {
    personalLibrary.newBook = book;
};

const clearAllBooks = () => {
    resetLibrary();
    personalLibrary.clear();
};

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

// Examples
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
let jojolion = new Book('Jojolion Volume 1', 'Hiroiko Araki', 100, true);
addBookToLibrary(theHobbit);
addBookToLibrary(jojolion);
printBook(theHobbit);
printBook(jojolion);

// functions with Event Listeners for all buttons 
function buttonClicker() {
    let btnToggle = document.querySelectorAll(".readChange");
    document.addEventListener('click', (event) => {
        const { target } = event;
        // this will modify the text on the book and update information within the (target) book object
        if (target.classList == 'readChange') {
            if (target.textContent == "Read") {
                target.innerText = "Not Read"
            } else if (target.textContent == 'Not Read') {
                target.innerText = "Read"
            }

            for (let i = 0; i < personalLibrary.getLibrary.length; i++) {
                if (personalLibrary.getLibrary[i].getTitle == target.parentElement.id) {
                    personalLibrary.getLibrary[i].readToggle(target.textContent);
                    console.log(target.textContent);
                }
            }
            return;
        // adds book to library
        } else if (target.classList == 'add_btn') {
            inputToLibrary();
        // clears all books
        } else if (target.id == 'clear') {
            clearAllBooks();
        }
    }
)}

buttonClicker();