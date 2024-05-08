//Array to store books.
const myLibrary = [];

//Book object constructor function
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// Show modal dialog for adding books upon clicking the
// 'New Book' button
const newBook = document.querySelector('button.new-book');
const dialog = document.querySelector('dialog');
newBook.addEventListener('click', () => {
    dialog.showModal();
});

//Function for closing the dialog upon clicking the 'Cancel' button.
const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.addEventListener('click', () => {
    dialog.close();
});