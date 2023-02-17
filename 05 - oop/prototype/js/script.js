// const arr = [2, 3, 4, 5, 6];
// const str = 'this is a string'

// console.log( Object.getPrototypeOf(arr) );
// console.log( Object.getPrototypeOf(str) );

function Book(title, author, numberOfPages){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.currentPage = 0;
}

Book.prototype.turnPage = function(){
    this.currentPage++;
    if(this.currentPage > this.numberOfPages){
        this.currentPage = 0;
    }
}

const hp = new Book('Harry Potter och fången från azkaban', 'JK Rowling', 357 );

console.log(Object.getPrototypeOf(hp));
console.log(hp);
console.log(hp.title);
console.log(hp.currentPage);
hp.turnPage();
hp.turnPage();
hp.turnPage();
hp.turnPage();
console.log(hp.currentPage);

const bok2 = new Book('the alchemist', 'Paulo Coelho', 218);
console.log(bok2);