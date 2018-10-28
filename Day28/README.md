# TypeScript - Gof 23 Design Pattern (28)：Visitor Pattern
### 前言
Pattern數量已經接近尾聲了，今天就是Visitor Pattern了！

### Visitor Pattern
---
#### 說明
Visitor Pattern，正常來說是透過Overload來達到不同物件有不同回應，那我之前在使用上，是有不同類型的物品但會有不同的優惠，才使用到Visitor Pattern。在Typescript原始狀態是沒有Overload這功能的，似乎因為js原本就沒有class型別，所以就...但我認為在一OO語言上必須要有，所以..可以去NPM補一下，就可以有辦法解。但因為這只是一個體驗，所以我並沒有裝，是有用if判斷模擬overload狀況。

#### 範例
首先先定義一下，每一個組件都必須有accept且可將自己包進去要求visit。
```
//ComputerPart.ts
import {ComputerPartVisitor} from './ComputerPartVisitor';

export interface ComputerPart{
    accept(computerPartVisitor:ComputerPartVisitor):void;
}
```

鍵盤、滑鼠、螢幕
```
//Keyboard.ts
import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';

export class Keyboard implements ComputerPart{

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        computerPartVisitor.visit(this);
    }
}
//Mouse.ts
import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';

export class Mouse implements ComputerPart{

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        computerPartVisitor.visit(this);
    }
}
//Monitor.ts
import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';

export class Monitor implements ComputerPart{

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        computerPartVisitor.visit(this);
    }
}
```

Computer是一Composite的感覺，裡面可以塞一堆組件。
```
//Computer.ts
import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';
import {Keyboard} from './Keyboard';
import {Monitor} from './Monitor';
import {Mouse} from './Mouse';

export class Computer implements ComputerPart{
    private parts:ComputerPart[];

    constructor(){
        this.parts = [new Keyboard(),new Monitor(),new Mouse()];
    }

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        this.parts.forEach( (part) => {
            part.accept(computerPartVisitor);
          });
          computerPartVisitor.visit(this);
    }
}
```

針對四種不同的物件，理想以Overload解決。
```
//ComputerPartVisitor.ts
import {Keyboard} from './Keyboard';
import {Mouse} from './Mouse';
import {Monitor} from './Monitor';
import {Computer} from './Computer';

export interface ComputerPartVisitor{
    visit(computer:Keyboard):void;
    visit(mouse:Mouse):void;
    visit(keyboard:Keyboard):void;
    visit(monitor:Monitor):void;
}
```

這邊的就是為了因應Typescript寫的了，並不是標準解。
```
//ComputerPartDisplayVisitor.ts
import {ComputerPartVisitor} from './ComputerPartVisitor';
import {Computer} from './Computer';
import {Mouse} from './Mouse';
import {Keyboard} from './Keyboard';
import {Monitor} from './Monitor';
import {ComputerPart} from './ComputerPart';

export class ComputerPartDisplayVisitor implements ComputerPartVisitor{
    
     visit(part:ComputerPart):void {
        let partType = part.constructor.toString().match(/\w+/g)[1]
        //判斷物件名稱
        switch(partType) { 
            case 'Computer': { 
               this.visit1(<Computer>part);
               break; 
            } 
            case 'Mouse': { 
                this.visit2(<Mouse>part);
               break; 
            } 
            case 'Keyboard': { 
                this.visit3(<Keyboard>part);
                break; 
             } 
            case 'Monitor': { 
                this.visit4(<Monitor>part);
                break; 
             } 
            default: { 
               console.log('something error');
               break; 
            } 
         } 
     }
    private visit1(computer:Computer):void {
        console.log('Displaying Computer');
     }
    private visit2(mouse:Mouse):void {
        console.log('Displaying Mouse');
    }
    private visit3(keyboard:Keyboard):void {
        console.log('Displaying Keyboard');
    }
    private visit4(monitor:Monitor):void {
        console.log('Displaying Monitor');
    }
}
```

Demo！
```
//Demo.ts
import {ComputerPart} from './ComputerPart';
import {Computer} from './Computer';
import {ComputerPartDisplayVisitor} from './ComputerPartDisplayVisitor';

let computer:ComputerPart = new Computer();
computer.accept(new ComputerPartDisplayVisitor());
```

### 結論
因為寫到發現Typescript竟然沒有Overload，就...哎...但繞開的話其實意義不是那麼大了？使用其它套件或是自己寫的套件達成，好像也會讓程式碼變的稍加複雜，期待到時候有解決方法了！

### 參考
https://www.tutorialspoint.com/design_pattern/visitor_pattern.htm
