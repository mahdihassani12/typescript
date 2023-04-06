"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAllBooks() {
    var books = [
        {
            id: 1,
            title: " First book ",
            author: "Mahdi Hassani",
            available: true,
            category: Category.Children,
        },
        {
            id: 2,
            title: " Second book ",
            author: "Alireza Hassani",
            available: false,
            category: Category.Fiction,
        },
        {
            id: 3,
            title: " Third book ",
            author: "Zainab Hassani",
            available: true,
            category: Category.Peotry,
        },
        {
            id: 4,
            title: " Fourth book ",
            author: "Abbass Hassani",
            available: false,
            category: Category.Fiction,
        },
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
var Category;
(function (Category) {
    Category[Category["Peotry"] = 0] = "Peotry";
    Category[Category["Histry"] = 1] = "Histry";
    Category[Category["Story"] = 2] = "Story";
    Category[Category["Science"] = 3] = "Science";
    Category[Category["Fiction"] = 4] = "Fiction";
    Category[Category["Children"] = 5] = "Children";
})(Category || (Category = {}));
function GetBookTitlesWithCategory(CategoryFilter) {
    if (CategoryFilter === void 0) { CategoryFilter = Category.Fiction; }
    console.log(" Getting books in category: ", Category[CategoryFilter]);
    var books = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var currentBook = books_2[_i];
        if (currentBook.category === CategoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var books = GetAllBooks();
    return books.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log(" Customer name ", name);
    if (age) {
        console.log(" Customer age ", age);
    }
    if (city) {
        console.log(" Customer city ", city);
    }
}
function CheckOutBooks() {
    var booksId = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        booksId[_i] = arguments[_i];
    }
    for (var i = 0; i < booksId.length; i++) {
        console.log(booksId[i]);
    }
}
// *******************************************************
CheckOutBooks(1);
// CreateCustomer("Mahdi", 25, "Herat");
// let MyID: string = CreateCustomerID("Mahdi", 10);
// console.log(MyID);
// const FictionBooks = GetBookTitlesWithCategory(Category.Fiction);
// FictionBooks.forEach((val, idx, arr) => console.log(++idx + " - " + val));
