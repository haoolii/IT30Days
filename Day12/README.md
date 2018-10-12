# TypeScript - Gof 23 Design Pattern (12)：Factory Pattern
### 前言
昨天有講到Factory，那今天就來個Factory Pattern吧！

### Factory Pattern
---
#### 說明
那昨天會用到Factory用來產生就是因為可以透過統一產生物件的流程，可以做過濾是否有建立過，達到減肥的功效。
Factory Pattern用途也就是讓產生物件的過程統一且封裝，如果是複雜的物件，透過Factroy Pattern就讓程式乾乾淨淨，且如果當物件建構子或是建立方式改變時，不必每一個Class掃過一遍，只要修改Factory即可。

#### 範例
先來個介面，定義形狀需要有draw方法。
```
//Shape.ts
export interface Shape{
    draw():void;
}
```

再來個型狀
```
//Shape.ts
import {Shape} from './Shape';

export class Square implements Shape{
    draw():void{
        console.log('draw a Square');
    }
}
//Square.ts
import {Shape} from './Shape';

export class Square implements Shape{
    draw():void{
        console.log('draw a Square');
    }
}
```

最重要的來到我們的Factory!
```
//Factory.ts
import {Shape} from './Shape';
import {Circle} from './Circle';
import {Square} from './Square';

export class Factory{
    constructor(){

    }
    getCircle():Shape{
        return new Circle(); //從這邊建立物件
    }

    getSquare():Shape{
        return new Square(); //從這邊建立物件
    }
}
```
最後就是使用方法
```
//Factory.ts
import {Factory} from './Factory';

 let ShapeFactory = new Factory();
 let circle = ShapeFactory.getCircle();//給我一個圓形吧工廠
 circle.draw();
 let square = ShapeFactory.getSquare();//給我一個方形吧工廠
 square.draw();
```

#### 結論
概念簡單但應用實用度很廣的一設計模式，還有另外一抽象工廠，也是在創建物件時需要的，還有其他很相似的創建類型設計模式，之後就會遇到了呢！對了，程式碼都放在我的Github了呢！
Github https://github.com/unnhao/IT30Days

### 參考
[Design Pattern - Factory Pattern](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm)
