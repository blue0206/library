class Library
{
    constructor()
    {
        this.libArr = [];
    };

    addToLibrary(book)
    {
        this.libArr.push(book);
    };

    //Function to remove book from library.
    removeBook(bookID)
    {
        for (let i=0; i < this.libArr.length; i++)
        {
            if (bookID == this.libArr[i].uniqueID)
            {
                this.libArr[i] = this.libArr[this.libArr.length-1];
                this.libArr.pop();
                break;
            }
        }
    };
};


class Book
{
    constructor(title, author, pages, read, uniqueID)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.uniqueID = uniqueID;
    };

    //Function to change 'read' status.
    toggleRead() {
        this.read = this.read == "READ" ? "NOT READ" : "READ";
    };
};


class DisplayControl
{
    constructor()
    {
        this.uniqueID = 0;      //Serves as unique identification for each successively created object.
    };

    //Function to add book based on user input
    addBook()
    {
        let title = document.querySelector('#book-title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let read = document.querySelector('[name="read"]:checked').value == "yes" ? "READ" : "NOT READ";

        let book = new Book(title, author, pages, read, this.uniqueID++);
        myLibrary.addToLibrary(book);
        this.addToDisplay(book);
    };

    //Function for adding book to display.
    addToDisplay(bookObject)
    {
        const display = document.querySelector('.books');
        
        //Boilerplate for a single book - book > title+author+pages+read+remove
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
        read.textContent = bookObject.read;
        read.style.backgroundColor = bookObject.read == "READ" ? "green" : "red";
        read.setAttribute('class', 'read');
        //Attach event listener for toggling read status.
        read.addEventListener('click', () => {
            bookObject.toggleRead();
            read.textContent = bookObject.read;
            read.style.backgroundColor = bookObject.read == "READ" ? "green" : "red";
        });
        book.appendChild(read);

        const remove = document.createElement('button');
        remove.textContent = "REMOVE";
        remove.setAttribute('class', 'remove');
        //Attach event listener for removing book.
        remove.addEventListener('click', () => {
            myLibrary.removeBook(bookObject.uniqueID);
            display.removeChild(book);
        });
        book.appendChild(remove);

        //Append book to display.
        display.appendChild(book);
    };

    eventListeners()
    {
        //Attaching event listener to submit button to add new book to library.
        const title = document.querySelector("#book-title");
        const author = document.querySelector("#author");
        const pages = document.querySelector("#pages");
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.addEventListener('click', (event) => {
            if (title.checkValidity() && author.checkValidity() && pages.checkValidity())
            {
                this.addBook();
                event.preventDefault();
                resetFields();
                dialog.close();
            }
        });

        // Show modal dialog for adding books upon clicking the 'New Book' button
        const newBook = document.querySelector('button.new-book');
        const dialog = document.querySelector('dialog');
        newBook.addEventListener('click', () => {
            dialog.showModal();
        });

        //Function for closing the dialog upon clicking the 'Cancel' button.
        const cancelBtn = document.querySelector('.cancel-btn');
        cancelBtn.addEventListener('click', () => {
            dialog.close();
            resetFields();
        });

        function resetFields()
        {
            title.value = "";
            author.value = "";
            pages.value = "";
            document.querySelector("#read-no").checked = true;
        }
    };
};


const myLibrary = new Library();

const display = new DisplayControl();
display.eventListeners();