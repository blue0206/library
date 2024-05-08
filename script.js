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

//Function to add book based on user input
function addBook()
{
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('[name="read"]:checked').value == "yes" ? true : false;

    myLibrary.push(new Book(title, author, pages, read));
}

//Attaching event listener to submit button to add new book
//to library.
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
    addBook();
    dialog.close();
})

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