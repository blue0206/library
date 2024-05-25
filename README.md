# Library

Site Link: https://blue0206.github.io/library/    

At this point I have started learning more advanced JavaScript. I learnt about
Objects, Object Constructors, and Prototypical Inheritance. This project follows
these topics in the curriculum, being the first project of advanced JavaScript
curriculum.

I applied a lot of new stuff with this project, I saw myself being comfortable
with commits.

The project is about creating a library page for user where they can enter their
book details and add them to their library. This project doesn't offer a storage
feature yet, but it will in future.

#### Modal Dialog

This was my first time reading about them and using them. Prior to this project,
I had applied something similar in the "Sign-Up Form" project. Back then, I had
to create the modal-like box to be displayed from scratch and it was a real pain.
So when I read about modals and dialog, I was really relieved because I didn't
had to go through all that again. These two elements make it SO EASY!

In this project I displayed the form to add book using the dialog element.
I wrapped the form inside dialog, which appears whenever "New Book" button is
clicked. The click event triggers the `showModal()` function which causes the
dialog to appear.

Everything was easy till here. The real problem started when I had to read in
form inputs and close the modal dialog. Whenever I clicked the submit button,
it would result in the inputs being recorded but then getting instantly deleted!
I was baffled because I thought this was because the button was of `type="submit"`.
I fixed this using `.preventDefault()` but that gave rise to another issue: the form
inputs were not reset upon reopening the dialog!
A lot of fixes came in my head like clearing the input manually upon exit, not using
form element at all, etc. but I didn't wanna apply them as they didn't seem like the
best possible solution; instead, they seemed very naive approach to me.

Ultimately, I realised why I faced those issues:
1. The button of `type="submit"` would cause the page to reload whenever it was clicked
   which led to the insertion and then deletion of the book.
2. Using `.preventDefault()` did fix the above issue but it gave rise to the issue of
   form elements not being cleared upon closing dialog. The reason for this was that
   the submit button was now being treated as a normal button. And normal buttons inside
   form element in dialog are treated differently! They automatically save the form input
   data upon closing them with such button with `.close()`!

**Solution:** So I needed of an approach where I didn't have to manually clear elements and
also didn't have to face the default behavior of reload upon clicking submit button and
losing all data. THEREFORE, I came up with the solution of using **button of `type="reset"`**!
Such an easy solution. Not that I didn't think of it before but the problem was in my head to 
use ONLY submit button for 'submitting`.
Therefore, this project helped me get rid of this line of thought.

The reset button cleared the form for me and didn't even reload the page! So it was a perfect
fix requiring no specific algorithm or anything! Just a change in the `type` attrubite did
the trick!

#### Object Constructor and Prototypes

This was my first project using Objects and it went pretty well. I didn't face many issues
and there weren't many places where I had to rack up my brain over something. I created
an object with variables and I defined its function on the object prototype as method.

I tried to keep it so that I'd only do things related to object inside the functions and do 
all the DOM manipulation at one place, and it went really well. In the project, literally all
the DOM manipulation is done at `addToDisplay()` function and all the function related to 
objects and the methods handle ONLY the object properties (`removeBook()` function and
`Book.prototype.toggleRead()` method).
This way I can make sure that when I use functions in console, they do their job and not throw
error just because there are no DOM elements.

#### Switching from Object Constructor approach to ES6 Classes approach

After moving forward with my curriculum and learning about classes, I have come back to this
project in order to refactor it and use ES6 Classes instead of Object Constructors and
Prototypes.

Even if Classes are considered "syntactic-sugar", I found them comparatively easier to work
with. I applied my knowledge of Classes in this project and it worked well!    
I also accomplished the goal of having as little Global code as possible (something that I
failed ti accomplish last time) by creating three different classes for each purpose.

1. `Library` Class stored the array as well as the method to remove a book from the array.
2. `Book` Class has a constructor which creates the book instance and the `toggleRead()`
   method. It has been shifted from being an object constructor to a class.
3. `DisplayControl` Class handles everything related to the DOM and I moved all the DOM
   related functions inside this class.

It worked out pretty well. However, I could have shortened the addToDisplay() method (which
used to be a function) but I decided not to as in the end it is doing the job of creating
the DOM elements. The application of event listeners to `READ` and `REMOVE` buttons were
also left as is because creating a whole different method for the same would have been
a redundant and cumbersome process.

#### Conclusion

This project was a good experience. I cemented my knowledge about Objects, Object COnstructors,
Prototypes, and Prototypical Inheritance.    
It was fun using ES6 Classes and I also cemented my knowledge about their basic usage. It surely
was a valueable experience.    
As I learn more advanced stuff, I'll keep updating this and previous projects. I will probably next 
update this project when I learn how to store user data. Until then, see ya!