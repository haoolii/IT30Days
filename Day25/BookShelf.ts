import {Book} from './Book';
import {Iterator} from './Iterator';

import {Aggregate} from './Aggregate';
import {BookShelfIterator} from './BookShelfIterator';
export class BookShelf implements Aggregate{
    private books:Book[] =[];
    private count:number;
    constructor(){
        this.count = 0;
    }
    public getBook(index:number):Book{
        return this.books[index];
    }
    public appendBook(book:Book):void{
        this.books.push(book);
        this.count++;
    }
    public getLength():number{
        return this.count;
    }
     public iterator():Iterator{
         return new BookShelfIterator(this);
     }

}