# TypeScript - Gof 23 Design Pattern (11)：Flyweight Pattern
### 前言
今天來一個Flyweight減肥Pattern吧！

### Flyweight Pattern
---
#### 說明
Flyweight Pattern就是用在減少記憶體耗損，當畫面上或是程式內，有大量相同物件時，可以透過Flyweight Pattern，讓所有物件其實都是指向同一記憶體位置，達到省資源的效果，那怎麼做到呢？就是透過a=b，像是Prototype Pattern的相反。

#### 範例
```
//Shape.ts 這只是一介面
export interface Shape{
    draw():void;
}

//Circle.ts 圓形並實作shape介面
import {Shape} from './Shape';

export class Circle implements Shape{
    color:string;
    constructor(color){
        this.color = color;
    }
    public draw():void{
        console.log('draw a '+this.color+' circle!');
    }
}
```
以上是一圓形且實作shape介面，代表可以容易的擴充其他圖形。

```
//ShapeFactory.ts
import {Shape} from './Shape';
import {Circle} from './Circle';

export class ShapeFactory{
    //宣告在記憶體上的key-value 
    private static fliesMap: { [s: string]: Shape } = <Any>{};
    //取得圖型
    public static getCircle(key:string):Shape{
        //取看看該顏色有沒有在key-value中
        let circle:Shape =this.fliesMap[key];
        //如果沒有就建立，且存在key-value中
        if(circle == null){
            circle = new Circle(key);
            this.fliesMap[key] = circle;
            console.log('create a '+key+' circle');
        }
        //如果已經有該顏色了 就可直接return
        console.log('Get a '+key+' circle');
        return circle;
    }
}
```
以上範例看得出來，我們可以透過getCircle取得圓型，如果該顏色前面已經有取過了，那他就會被留在key-value陣列中，我可以直接取他出來用，且是針對他記憶體位置，所以就算我拿了一百個，也都是同一個圓形，可以省下很多資源，感覺有點像Singleton?可能有點相似，但通常Singleton會直接用在Factory上，就是只有一個工廠擁有這一Key-value的陣列。
```
//Demo.ts
import {Shape} from './Shape';
import {Circle} from './Circle';
import {ShapeFactory} from './ShapeFactory';

let Greencircle:Shape = ShapeFactory.getCircle('Green');
let Greencircle2:Shape = ShapeFactory.getCircle('Green');
let Yellowcircle:Shape = ShapeFactory.getCircle('Yellow');
let Redcircle:Shape = ShapeFactory.getCircle('red');
let Yellowcircle2:Shape = ShapeFactory.getCircle('Yellow');
```
以上Demo就可以知道，每當第一個顏色被呼叫時，都會Create一次。但當已經有Create過了，第二次呼叫時就會直接回傳。

### 參考資料
[MDN Map資料](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
[Flyweight Pattern tutorialspoint](https://www.tutorialspoint.com/design_pattern/flyweight_pattern.htm)