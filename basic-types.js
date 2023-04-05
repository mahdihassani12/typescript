"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAllBooks() {
    var books = [
        { title: " First book ", author: "Mahdi Hassani", available: true },
        { title: " Second book ", author: "Alireza Hassani", available: false },
        { title: " Third book ", author: "Zainab Hassani", available: true },
    ];
    return books;
}
function LogFirstBook(books) {
    var numOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available === true) {
            firstAvailable = currentBook;
            break;
        }
    }
    console.log(" Number of the books ", numOfBooks);
    console.log(" First available books ", firstAvailable);
}
var books = GetAllBooks();
LogFirstBook(books);
