"use strict";
// Create with the abstract keyword
// Base classes that may not be instantiated
// Abstract methods are not implemented
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var Journal = /** @class */ (function (_super) {
    __extends(Journal, _super);
    function Journal(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    Journal.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: ".concat(this.edition, " and year ").concat(this.year));
    };
    return Journal;
}(ReferenceItem));
var ref = new Journal("Title", 2022, 10);
ref.printItem();
