"use strict";
// Class is a template for creating object
// In typescript you are allow to create only one constructor
// Classes con contains properties and methods
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assignCustomer = function (customerName) {
        console.log(this.name + " is assisting " + customerName);
    };
    return UniversityLibrarian;
}());
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new reference item");
    }
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published at ").concat(this.year, "."));
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    return ReferenceItem;
}());
var ref = new ReferenceItem("Introduction to javascript", "2022");
ref.printItem();
ref.publisher = "Mahdi Hassani";
console.log(ref.publisher);
