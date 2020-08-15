'use strict'

class Books {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">DEL</a></td>
        `;
        list.append(row);
    }
    static clearInput() {
        title = document.querySelector('#title').value = '';
        author = document.querySelector('#author').value = '';
        isbn = document.querySelector('#isbn').value = '';
    }
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.append(message);
        const parent = document.querySelector('.container');
        const child = document.querySelector('.child');
        parent.insertBefore(div, child);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);
    }
    static removeBook(target) {
        if (target.className === 'delete') {
            if (confirm("Are you sure ?")) {
                target.parentElement.parentElement.remove();
                UI.showAlert('Book Removed Successfully', 'success');
            }
        }
    }
}
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    };
    static displayBook() {
        const books = Store.getBooks();
        books.forEach(function (book) {
            UI.addBookToList(book);
        });
    };
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book,index){
           if(book.isbn === isbn){
               books.splice(index,1);
           }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBook);
const addButton = document.querySelector('#add-book');
addButton.addEventListener('click', function () {
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all the fields !!', 'error');
    } else {
        const book = new Books(title, author, isbn);
        UI.addBookToList(book);
        Store.addBook(book);
        UI.showAlert('Book Added Successfully', 'success');
        UI.clearInput();
    }
});

const removeBook = document.querySelector('#book-list');
removeBook.addEventListener('click', function (e) {
    UI.removeBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});