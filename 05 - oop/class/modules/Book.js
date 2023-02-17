class Book{
    constructor(title, author, numberOfPages){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.currentPage = 0;
    }

    turnPage(){
        this.currentPage++;
        if(this.currentPage > this.numberOfPages){
            this.currentPage = 0;
        }
    }
}

export {Book};