'use strict';

const KEY = 'books';
const PAGE_SIZE = 4;

var gBooks;
var gNames = ['Tanach', 'Chumash', 'Sidur', 'Ahavat-Israel','Mesilat-Yesharim', 'Tal-Chaim'];
var gPrice = [];
_createPrices()
var gUrls = ['img/tanach.jpg',
            'img/chumash.jpg',
            'img/sydur.jpg',
            'img/ahavat-israel.jpg',
            'img/mesilat-yesharim.jpg',
            'img/tal-chaim.jpg'
            ]
var gPageIdx = 0;
var gSortBy = 'name';

_createBooks();

function getBooks() {
    var books = gBooks; 
    var startIdx = gPageIdx * PAGE_SIZE;
    books = books.slice(startIdx, startIdx + PAGE_SIZE);
    return books;
}

// var cars = gCars.filter(function (car) {
//     return car.vendor.includes(gFilterBy.vendor) &&
//         car.maxSpeed <= gFilterBy.maxSpeed
// })

// var startIdx = gPageIdx * PAGE_SIZE;
// cars.slice(startIdx, startIdx + PAGE_SIZE)

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return bookId = book.id
    })
    gBooks.splice(bookIdx, 1);
    _saveBooksToStorage();
}

function addBook(bookName, bookPrice, bookImg) {
    var book = _createBook(bookName, bookPrice, bookImg);
    gBooks.unshift(book);
    _saveBooksToStorage();
}

function updateBook(bookId, bookPrice) {
    var book = getBookById(bookId);
    book.price = bookPrice;
    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function(book) {
        return book.id === bookId
    })
    return book;
}

function setRate(value, bookId) {
    var book = getBookById(bookId);
    if (value > 10) value = 10;
    if (value < 0) value = 0;
    book.rate = value;
    _saveBooksToStorage();
    updateModalRate(value);
}

function setSort(sortBy) {
    gSortBy = sortBy;
    if (gSortBy === 'name') {
        gBooks.sort(function (book1, book2) {
            var nameA = book1.name.toLowerCase();
            var nameB = book2.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
    } else {
        gBooks.sort(function (book1, book2) {
            return book1.price - book2.price
        });
    }
}

function nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) gPageIdx--;
}

function backPage() {
    gPageIdx--;
    if (gPageIdx = 0) gPageIdx--;
}

function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []
        for (var i = 0; i < 6; i++) {
            books.push(_createBook(gNames[i], gPrice[i], gUrls[i]))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _createBook(bookName, price, imgUrl) {
    return {
        id: makeId(),
        name: bookName,
        price: price,
        imgUrl: imgUrl,
        desc: makeLorem(),
        rate: '0'
    }
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}

function _createPrices() {
    for (var i = 0; i < 6; i++) {
        gPrice.push(getRandomIntInclusive(50, 100) + 0.99);
    }
}