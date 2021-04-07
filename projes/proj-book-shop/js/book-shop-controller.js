'use strict';

function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = getBooks();
    var strHTML = `<table class="books-table"><thead><tr><th>id</th>
    <th class="pressable" onclick="onSetSort('name')">Title</th>
    <th class="pressable" onclick="onSetSort('price')">Price</th>
    <th>Image</th><th colspan="3">Actions</th></tr></thead><tbody>`;
    var strHtmls = books.map(function(book) {
        return `<tr>
                    <td>${book.id}</td>
                    <td>${book.name}</td>
                    <td>${book.price}</td>
                    <td><img src="${book.imgUrl}"></img></td>
                    <td class="btn-read" onclick=onReadBook('${book.id}')>read</td>
                    <td class="btn-update" onclick=onUpdateBook('${book.id}')>update</td>
                    <td class="btn-delete" onclick=onRemoveBook('${book.id}')>delete</td>
                </tr>
        `
    })
    strHTML += strHtmls.join('');
    strHTML += `</tbody></table>`;
    document.querySelector('.books-container').innerHTML = strHTML;
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}

function showAddBookModal() {
    document.querySelector('.add-book-modal').style.display = 'block';
}

function onAddBook() {
    var bookName = document.querySelector('input[name="book-name"]').value;
    var bookPrice = +document.querySelector('input[name="book-price"]').value;
    var bookImg = document.querySelector('input[name="book-img-url"]').value;
    addBook(bookName, bookPrice, bookImg);
    renderBooks();
    document.querySelector('.add-book-modal').style.display = 'none';
}

function onUpdateBook(bookId) {
    var bookPrice = +prompt('Inster updated book\'s price:');
    updateBook(bookId, bookPrice);
    renderBooks();
}

function onReadBook(bookId) {
    var book = getBookById(bookId);
    var elModal = document.querySelector('.modal');
    elModal.querySelector('h3').innerText = book.name;
    elModal.querySelector('h4').innerText = book.price;
    elModal.querySelector('img').src = book.imgUrl;
    elModal.querySelector('p').innerText = book.desc;
    elModal.querySelector('input').value = `${book.rate}`;
    elModal.querySelector('input').id = `${bookId}`;
    elModal.querySelector('.low-value-rate').id = `${bookId}`;     
    elModal.querySelector('.high-value-rate').id = `${bookId}`;     
    elModal.hidden = false;
}

function onSetRate(value, bookId) {
    setRate(value, bookId);
    renderBooks();
}

function onBtnChangeCurrValue(valueChange, bookId) {
    var value = +document.querySelector('.modal input').value;
    value += valueChange;
    onSetRate(value, bookId);
}

function updateModalRate(value) {
    document.querySelector('.modal input').value = value;
}

function onCloseModal() {
    var elModal = document.querySelector('.modal');
    elModal.hidden = true;
    elModal.querySelector('input').value = '';
}

function onSetSort(sortBy) {
    setSort(sortBy);
    renderBooks();
}

function onNextPage() {
    nextPage();
    renderBooks();
}

function onBackPage() {
    backPage();
    renderBooks();
}