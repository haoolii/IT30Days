import {Book} from './Book';
import {BookShelf} from './BookShelf';
import {Iterator} from './Iterator';

let bookshelf:BookShelf = new BookShelf();
bookshelf.appendBook(new Book('A Book'));
bookshelf.appendBook(new Book('B Book'));
bookshelf.appendBook(new Book('C Book'));
let it:Iterator = bookshelf.iterator();

while(it.hasNext()){    
    console.log((<Book>it.next()).getName());
}
