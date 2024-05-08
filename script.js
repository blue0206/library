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

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addToDisplay(book);
}


//Attaching event listener to submit button to add new book
//to library.
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
    addBook();
    dialog.close();
})


//Function for adding book to display.
function addToDisplay(bookObject)
{
    const display = document.querySelector('.books');
    
    //Boilerplate for a single book.
    const book = document.createElement('div');
    book.setAttribute('class', 'book');

    const title = document.createElement('div');
    title.textContent = bookObject.title;
    title.setAttribute('class', 'title');
    book.appendChild(title);

    const author = document.createElement('div');
    author.textContent = bookObject.author;
    author.setAttribute('class', 'author');
    book.appendChild(author);

    const pages = document.createElement('div');
    pages.textContent = bookObject.pages;
    pages.setAttribute('class', 'pages');
    book.appendChild(pages);

    const read = document.createElement('button');
    if (bookObject.read == true)
    {
        read.textContent = "READ";
        read.style.backgroundColor = "green";
    }
    else
    {
        read.textContent = "NOT READ";
        read.style.backgroundColor = "red";
    }
    read.setAttribute('class', 'read');
    toggleRead(read);
    book.appendChild(read);

    const remove = document.createElement('button');
    remove.textContent = "REMOVE";
    remove.setAttribute('class', 'remove');
    removeBook(remove, book);
    book.appendChild(remove);

    //Append book to display.
    display.appendChild(book);
}


//Function to change 'read' status.
function toggleRead(read)
{
    read.addEventListener('click', () => {
        if (read.textContent == "READ") 
        {
          read.textContent = "NOT READ";
          read.style.backgroundColor = "red";
        } 
        else 
        {
          read.textContent = "READ";
          read.style.backgroundColor = "green";
        }
    });
}


//Function to remove book from library.
function removeBook(removeBtn, book)
{
    removeBtn.addEventListener('click', () => {
        document.querySelector('.books').removeChild(book);
    });
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