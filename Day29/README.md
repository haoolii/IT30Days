# TypeScript - Gof 23 Design Pattern (29)：Abstract Factory Pattern
### 前言
時間過很快的來到了第29天，也是最後一個Pattern，預計明天最後一天是Flux使用的Pattern。

### Abstract Factory Pattern
---
#### 說明
這是一產生物件的Pattern，用於製作一系列的物件。跟Factroy Method不同之處在於這是Abstract Factory產生一系列的完整模式。在正確解釋範例中，Factroy Pattern是使用繼承，而Abstract Factory是使用組合，這也是很大的差異，但我在撰寫時，可能有點將Factory Pattern帶入組合，造成會有點混淆。正確範例補充在參考資料。

#### 範例
這個範例也是tutorialspoint的範例。
![https://ithelp.ithome.com.tw/upload/images/20181029/20109783Q7S1HDNkSE.jpg](https://ithelp.ithome.com.tw/upload/images/20181029/20109783Q7S1HDNkSE.jpg)

該class即為該檔名，且不標出引入檔案。因篇幅過大。

這邊就是形狀們！
```
export interface Shape{
    draw():void;
}

export class Rectangle implements Shape{
    public draw():void{
        console.log("Inside Rectangle::draw() method.");
    }
}

export class Square implements Shape{
    public draw():void{
        console.log("Inside Square::draw() method.");
    }
}
```

這邊是顏色們！
```
export interface Color{
    fill():void;
}

export class Red implements Color{
    fill():void{
        console.log("Inside Red::fill() method.");
    }
}

export class Green implements Color{
    fill():void{
        console.log("Inside Green::fill() method.");
    }
}
```

定義一個抽象工廠的行為，那我們現在有兩種工廠，顏色、形狀的工廠。
```
export abstract class AbstractFactory{
    abstract getColor(type:string):Color;
    abstract getShape(type:string):Shape;
}

export class ShapeFactory extends AbstractFactory{
    public getShape(type:string):Shape{
         if(type == 'Square'){                
             return new Square();
         }else if(type == 'Rectangle'){
            return new Rectangle();
         }         
    }
    public getColor(type:String):Color{
        return null;
    }
    public test():string{
        return 'test1';
    }
}


export class ColorFactory extends AbstractFactory{
    public getShape(type:string):Shape{        
        return null;
    }
    public getColor(type:String):Color{
        if(type == null){
            return null;
         }		
         if(type == 'Red'){
             return new Red();
         }else if(type == 'Green'){
            return new Green();
         }         
        return null;
    }
}
```

我們還可以操作我們要得到哪一個工廠，可以擴充工廠。
```
export class FactoryProducer{
    static getFactory(type:string):AbstractFactory{
        if(type == 'Shape'){
            return new ShapeFactory();
        }else if(type == 'Color'){
            return new ColorFactory();
        }        
    }    
}
```

Demo!
```
let shapeFactory:AbstractFactory = FactoryProducer.getFactory('Shape');
shapeFactory.getShape('Square').draw();

let colorFactory:AbstractFactory = FactoryProducer.getFactory('Color');
colorFactory.getColor('Red').fill();
```

### 結論
這個跟工廠模式真的會搞再一起，但我覺得其實大概了解且會透過物件封裝產生物件的方式，就已經算是工廠！不過有興趣還是可以深入了解。

### 參考
[Differences between Abstract Factory Pattern and Factory Method
](https://stackoverflow.com/questions/5739611/differences-between-abstract-factory-pattern-and-factory-method)
[Design Pattern - Abstract Factory Pattern](https://www.tutorialspoint.com/design_pattern/abstract_factory_pattern.htm)