"use strict";
// In typescript, an enum is a way to define a set of named constant like days of the week...
// Tuples are special type of an array in which you define each item type
Object.defineProperty(exports, "__esModule", { value: true });
function GetAllBooks() {
    var books = [
        {
            title: " First book ",
            author: "Mahdi Hassani",
            available: true,
            category: Category.Children,
        },
        {
            title: " Second book ",
            author: "Alireza Hassani",
            available: false,
            category: Category.Fiction,
        },
        {
            title: " Third book ",
            author: "Zainab Hassani",
            available: true,
            category: Category.Peotry,
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
    console.log(" Getting books in category: ", CategoryFilter);
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
var PeotryBook = GetBookTitlesWithCategory(Category.Peotry);
LogBookTitles(PeotryBook);
