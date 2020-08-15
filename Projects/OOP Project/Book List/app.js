'use strict'



function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Section

function UI() { };
UI.prototype.addTaskToList = function (book) {
    const lsit = document.querySelector('#book-list');
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class = "delete">DEL<a/></td>
    `;
    lsit.append(row);
};

UI.prototype.clearInput = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
};

UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.append(message);
    const parentNode = document.querySelector('.container');
    const before = document.querySelector('.second');
    parentNode.insertBefore(div, before);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
};

UI.prototype.removeBookList = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Local Storage
class StoreLS {
    static getBookinLS() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books', books));
        }
        return books;
    };
    static addBookToLS(book) {
        const books = StoreLS.getBookinLS();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };
    static displayBookLS() {
        const books = StoreLS.getBookinLS();

        books.forEach(function (book) {
            const ui = new UI();
            ui.addTaskToList(book);
        });
    };
    static removeBookFromLS(isbn) {
        const books = StoreLS.getBookinLS();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

}

document.addEventListener("DOMContentLoaded", StoreLS.displayBookLS);

const addTaskBtn = document.querySelector('#add-task');

addTaskBtn.addEventListener('click', addTask);
function addTask() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert("Please fill in all the fields !", 'error')
    } else {
        ui.addTaskToList(book);

        StoreLS.addBookToLS(book);

        ui.showAlert('Book Added Sucessfully.', 'sucess');
        ui.clearInput();
    }
};

const removeBook = document.querySelector('#book-list');
removeBook.addEventListener('click', removeTask);
function removeTask(e) {
    const ui = new UI();
    if (e.target.className === 'delete') {
        if (confirm('Are you sure ?')) {
            ui.removeBookList(e.target);
            StoreLS.removeBookFromLS(e.target.parentElement.previousElementSibling.textContent)
            ui.showAlert("Book Removed Sucessfully.", 'sucess');
        }
    }
    e.preventDefault();
}