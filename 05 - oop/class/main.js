import { Book } from "./modules/Book.js";

const hp = new Book('Harry Potter och fången från Azkaban', 'JK Rowling', 500);
console.log(hp);
hp.turnPage();
hp.turnPage();
hp.turnPage();
console.log(hp.currentPage)