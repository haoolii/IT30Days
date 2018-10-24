# TypeScript - Gof 23 Design Pattern (24)：Builder Pattern
### 前言
今天寫Trello操作的時候，突然想到API的操作，揪竟哪種設計模式比較好呢？我想來想去..還是先來寫Builder Pattern好了！

### Builder Pattern
---
#### 說明
 Builder Pattern字面上就是用來建立東西的，那與未來工廠模式會有差異先說明，有點像是我需要一些工具，於是工廠就會做給我，一個板手、一個螺絲起子、一個錘子，沒錯！我都知道那些是什麼東西，這也就是工廠模式。但在BUilder意思不太相同，他不是一系列的東西，他是一組成物，需要不同物件且複雜組成，像是我要吃一盤牛排，那你會知道你吃了哪一頭牛嗎？或是使用了什麼料理方式？沒錯！就是不知道，你不知道這出爐的牛排需要多少東西製成，你並不認識製作牛排的所有物件，也就是你並不認得產出物內的物件，你只知道對牛排使用吃的這個功能，你的概念就只有Steak:Food，牛排是食物的一種，可以吃。但並不知道牛排是由各種物件組成。

#### 範例
來吧 先來定義一下我們的牛排內容物必須要有嚐起來的味道的方法。
```
//Component.ts
export interface Component{
    getTaste():string;
}
```
再來新增油 必須依照Component 有嚐起來的方法
```
//Oil.ts
import {Component} from './Component';

export class Oil implements Component{
    getTaste():string{
        return '油油的~';
    }
}
```
還有鹽巴
```
//Salt.ts
import {Component} from './Component';

export class Salt implements Component{
    getTaste():string{
        return '有點鹹鹹的~';
    }
}
```
再來是食物的類別，也就是我們牛排會是什麼一種食物，但是是由Component組成，這也是我們未來的牛排，但可能他不只是牛排，可以是豬排，等等...
```
//Food.ts
import {Component} from './Component';

export class Food{
    Componentlist:Component[] =[]; //這個食物會有的內容物都在這array內
    addComponent(c:Component):void{  //增加的方法
        this.Componentlist.push(c);
    }
    getDetail():void{ //取得他的細節
        this.Componentlist.forEach( (c, index) => {
                console.log(c.getTaste()); //會找出每一種食材的味道
          });        
    }
}
```
再來就是我們產生牛排的牛排Builder
```
//Builder.ts
import {Food} from './Food';
import {Salt} from './Salt';
import {Oil} from './Oil';
export class Builder{
    prepareSteak():Food{
        let steak:Food = new Food();
        steak.addComponent(new Salt()); //塞鹽巴
        steak.addComponent(new Oil());  //塞油
        return steak;
    }
}
```
最後就是Demo
```
//Demo.ts
import {Builder} from './Builder';
import {Food} from './Food';

let foodbuilder:Builder = new Builder(); //來吧 我的食物產生器
let steak:Food = foodbuilder.prepareSteak(); //給我牛排吧 食物產生器
steak.getDetail(); //讓我來嚐嚐看
``` 

### 結論
這Pattern如果仔細想，可以將時常複雜建構的物件拆開來，我覺得前半部算是工廠的一部分，但整體來說是Builder，但是有區分的。

### 參考
純腦袋