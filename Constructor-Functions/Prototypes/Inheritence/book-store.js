/**
 * Traversy Media
 * JavaScript OOP Crash Course
 */

// Constructor
function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary prototype
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge prototype
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revise = true;
}

// Instaliate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1.getSummary());
console.log(book1);
console.log(book2.getSummary());
console.log(book2);

console.log(book1.getAge());
console.log(book2.getAge());

book2.revise('2018');

console.log(book2.getAge());

/**
 * Inheritence of Book Object Constructor
 */

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Meg One', 'John Doe', '2018', 'Jun');

console.log(mag1,getSummary());
console.log(mag1,getAge());