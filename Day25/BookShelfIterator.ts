import {Iterator} from './Iterator';
import {BookShelf} from './BookShelf';
import {Book} from './Book';

export class BookShelfIterator implements Iterator{
    private bookshelf:BookShelf;
    private index:number;
    constructor(bshelf:BookShelf){
        this.bookshelf = bshelf;
        this.index = 0;
    }

    public hasNext():boolean{
        if (this.index < this.bookshelf.getLength()) {
            return true;
        } else {
            return false;
        }
    }
    public next():Object{
        let book:Book = this.bookshelf.getBook(this.index);
        this.index++;
        return book;
    }
    
}