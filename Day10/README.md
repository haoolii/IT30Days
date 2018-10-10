## TypeScript - Gof 23 Design Pattern (10)：Prototype Pattern
### 前言
中華民國生日快樂！台中的國慶日好像沒有很多國旗。今天來個Prototype Pattern吧！

### Prototype Pattern
---
#### 說明
Prototype Pattern出現的原因，是因為有時候我們在建構一物件時，非常耗資源，可能要搜尋資料庫拿建構資料，花很多算力建構運算一些渲染方式?，等等...總之就是在我們建構物件時會花很多資源，最後得到這心血結晶。就像教育的意義一樣？前人種樹後人乘涼，先讓先知們去探索，我只要在學校學就好，可惜現在...

#### 範例
一開始我們先來準備一物件名叫Prototype
```javascript
//Prototype.ts
export class Prototype{

    constructor(){

    }
    public saySomething():void{ //沒意義的方法呵呵
        console.log('hello!');
    }

    public clone():Prototype{  //關鍵clone方法
        let cloned = Object.create(Prototype.prototype || null);
        //Prototype為所有Object都有的方法，詳細Javascript如何存還有原型鏈的概念，都可以去參考文章看看哦!
        return cloned;
    }
}
```
會許有人會覺得，既然Create那麼辛苦，怎麼不直接宣告一物件把該Prototype直接 let a = b就好？
因為Javascript好像沒有提供查看記憶體直接的方法，但當let a = b時，a是只是指向b的記憶體位置，所以一但b改變了，a顯示資料也會改變，這也就是By Reference。

相對的如果let a = b兩記憶體是獨立的稱作為By Value。
>在 JavaScript 中 primitive type（Boolean, String, Number, null, undefined）都屬於 By Value。

```javascript
//Demo.ts
let prototype1: Prototype = new Prototype();
prototype1.saySomething();
let prototype2: Prototype = prototype1.clone(); //並不是透過new Create物件
prototype2.saySomething();

//兩個獨立Create 記憶體位置不同
prototype1 == prototype2 ? console.log('Yes it\'s same!') : console.log('No it\'s different!');
```
由以上範例可以證明，Prototype為指向不同物件，也就是達到我們要求的完整複製了一Prototype物件，不用重新建構一物件耗費資源，這也就是Prototype Pattern所期待的。
### 參考資料
[[筆記] 談談JavaScript中by reference和by value的重要觀念](https://pjchender.blogspot.com/2016/03/javascriptby-referenceby-value.html)
[[筆記] 了解JavaScript中原型(prototype)、原型鍊（prototype chain）和繼承(inheritance)的概念](https://pjchender.blogspot.com/2016/06/javascriptprototypeprototype.html)
[PROTOTYPE PATTERN](https://mertarauh.com/tutorials/typescript-design-patterns/prototype-pattern/)