const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
// BUG: this.classList.add('active') throws an error
//this.classList.add('active');
    event.currentTarget.classList.add('active');
});

// Initial Error Explained: BUG: this.classList.add('active') throws an error
// In an arrow function, 'this' doesn't refer to the element the event is attached to.
// Instead, it inherits 'this' from the surrounding lexical scope, so using 'this' here throws an error.

// Solution Explained:  event.currentTarget.classList.add('active');
// Using 'event.currentTarget' it gives the element the listener is attached to. So basically what 'this' would be in a regular function.
// event.currentTarget always points to the element that received the event.

