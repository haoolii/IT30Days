# TypeScript - Gof 23 Design Pattern (25)：Iterator Pattern
### 前言
今天是無趣的Iterator，也不能說無趣，只是我還沒體會到他的幫助，見識太少就會有這困擾啊。

### Iterator Pattern
---
#### 說明
這就是我們常見的Iterator，用來尋訪資料結構用的，但其實也只是我們在寫結構時，必須遵照Iterator規範，具備hasnext，以及next方法，讓該Iterator可以被尋訪，那用意在哪呢？為何需要這個？我們不需知道資料結構，也代表我們不會暴露資料細節給外部知道，你只要知道hasnext，next就可以尋訪，沒錯！就是這樣。

#### 範例
今天採用網路範例把書放在書架上，且可以尋訪書架上的書。

這是一容器的規範，就是容器須遵守這個規範，每個容器必須給我一個尋訪你的方法。
```
//Aggregate.ts
import {Iterator} from './Iterator';
export interface Aggregate{
    iterator():Iterator;
}
```

再來就是Iteraotr的規範，必須有這兩方法。
```
//Iterator.ts
export interface Iterator{
    hasNext():boolean;
    next():Object;   
}
```

再來就是書
```
//Book.ts
export class Book{
    private name:string;
    constructor(n:string){
        this.name = n;
    }
    public getName():string{
        return this.name;
    }
}
```

書架
```
//BookShelf.ts
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
    public getBook(index:number):Book{ //取得哪本書
        return this.books[index];
    }
    public appendBook(book:Book):void{ //增加書
        this.books.push(book);
        this.count++;
    }
    public getLength():number{ //取得書架目前多少書
        return this.count;
    }
     public iterator():Iterator{ //取得尋訪方法 會將自己放入Iterator內產出一遍歷方法
         return new BookShelfIterator(this);
     }

}
```

尋訪方法！
```
//BookShelfIterator.ts
import {Iterator} from './Iterator';
import {BookShelf} from './BookShelf';
import {Book} from './Book';

export class BookShelfIterator implements Iterator{
    private bookshelf:BookShelf;
    private index:number;
    constructor(bshelf:BookShelf){ //把書架放進來
        this.bookshelf = bshelf;
        this.index = 0; //目前位置在0
    }

    public hasNext():boolean{ //是否有下一個就是由現在位置並確定書架是不是有那麼多書 如果現在位置9 且書也只有9本，代表已經沒有下一個了
        if (this.index < this.bookshelf.getLength()) {
            return true;
        } else {
            return false;
        }
    }
    //取得下一本書，且會透過該書架
    public next():Object{
        let book:Book = this.bookshelf.getBook(this.index);
        this.index++;
        return book;
    }
    
}
```

開始跑吧！
```
//Demo.ts
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
```

### 結論
我們已經將尋訪bookshelf的方法都封裝在BookShelfIterator，且透過BookShelf回傳，我並不會知道實際遍歷方法，但卻可以尋訪該物件內的物件，我其實我一開始在java也不了解為何要特別使用Iterator物件，怎麼不直接尋訪就好，其實就是為了封裝隱藏我們尋訪物件的細節！

### 參考
http://twmht.github.io/blog/posts/design-pattern/iterator.html

