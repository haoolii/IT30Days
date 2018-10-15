# TypeScript - Gof 23 Design Pattern (15)：Composite Pattern
### 前言
今天是藍色星期一，真的是累到爆炸，再奮鬥一星期！

### Composite Pattern
---
#### 說明
那這個Pattern就是一儲存物件的樹狀結構，那可能不太適合用於實際現行專案，畢竟已經有很多優化好的儲存方式，怎麼還回自己土炮呢，但還是有些可以應用的。範例直接舉畫圖的例子，可以畫兩種圖案，那都會儲存在一叫ShapeDiagram的物件裡，但他們都是實作Compsite，所以他們都擁有三種方法，那兩種形狀無法儲存無間，所以都會執行例外，也因他們都是Compsite，所以是可以以樹狀結構，ShapeDiagram裡面也有ShapeDiagram的方式儲存。

#### 範例
先來制定介面，有三種方法，增加、移除、畫畫。
```
//Composite.ts
export interface Composite{
    add(c:Composite):void;
    remove(c:Composite):void;
    draw():void;
}
```

再來就是圓、方形，但因為圓形、方形並無法儲存物件，也算是葉節點，所以當他新增以及移除時，會丟出例外。
```
//Circle.ts
import {Composite} from './Composite';
export class Circle implements Composite{
    add(c):void{
        throw new Error('I can not do it');
    }
    remove(c):void{
        throw new Error('I can not do it');
    }
    draw():void{
        console.log('Draw a Circle');
    }
}
//Square.ts
import {Composite} from './Composite';
export class Square implements Composite{
    add(c):void{
        throw new Error('I can not do it');
    }
    remove(c):void{
        throw new Error('I can not do it');
    }
    draw():void{
        console.log('Draw a Square');
    }
}
```

那再來就是我們的ShapeDiagram，是可以儲存更多Composite物件的，所以有一陣列用來儲存，也可以存放ShapeDiagram，那當我們執行Draw時，會直接對物件呼叫Draw，那因為都是Composite，所以也一定具備該方法，且子物件不是Circle或Square，那就是ShapeDiagram，也會延續的執行下去，Draw出所有的圖案。
```
//ShapeDiagram.ts
import {Composite} from './Composite';
export class ShapeDiagram implements Composite{
    private list:Composite[] =[];
    add(c:Composite):void{
        this.list.push(c);
    }
    remove(c:Composite):void{
        this.list.forEach( (item, index) => {
            if(item === c) this.list.splice(index,1);
          });
    }
    draw():void{
        this.list.forEach( (item, index) => {
            item.draw();
          });
    }
}
```

那最後就是測試，其實很普通平凡。
```
//Demo.ts
import {Composite} from './Composite';

import {Circle} from './Circle';
import {Square} from './Square';
import {ShapeDiagram} from './ShapeDiagram';

let diagram:Composite = new ShapeDiagram();
let circle1:Composite = new Circle();
diagram.add(circle1);
let square1:Composite = new Square();
diagram.add(square1);
let circle2:Composite = new Circle();
diagram.add(circle2);
diagram.draw();
diagram.remove(square1);
square1.add(square1);
diagram.draw();
```

### 結論
實際用途不顯著，所以就...看看了解一下，可能哪天突然就通了。

### 參考
[Design Patterns - Composite Pattern
](https://www.tutorialspoint.com/design_pattern/composite_pattern.htm)
