console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

const firstName = "Conscience";
let lastName = `Osakue`;
var age = 30;

//Reassigning the variables a const can not be reassign.
lastName = "Djopa"
age = "27"

/*Note JavaScript still runs even without the ";"
 because it fills it out for you unlike C#.*/
let language = "JavaScript"
let createdYear = 1995
let isCaseSensitive = true
console.log(`Is it ${ isCaseSensitive}, that ${language} was release in ${createdYear}?`);


let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
console.log(`Patrick's cloth size is "${selectedSize}" and the price is ${price} it is ${isOnSale} that it's on sales.`);

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;

console.log(`The title of the book is "${title}" and the author is called ${author}, the book has ${pageCount} pages and it's ${hasRead} that Conscience has read it the book.`);