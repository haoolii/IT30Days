# TypeScript - Gof 23 Design Pattern (21)：Memento Pattern
### 前言
今天好無力，假日通病。

### Memento Pattern
---
#### 說明
Memento Pattern是用來存取步驟的一個Pattern，那那他有三個部分，Memeto物件是用來封裝狀態的物件，Originator是用來控制現在狀態並協助封裝成Memento的一物件，CareTaker就是一儲存一系列Memento的物件，讓我們可以尋找以前的紀錄。搞得那麼複雜就是可以做到封裝狀態，讓使用者並不知道內部結構。

#### 範例
先來做一個Memento，創建時透過建構子可榜上一狀態。
```
//Memento.ts
export class Memento{
    private state:string;

    constructor(state:string){
        this.state = state;
    }
    getState():string{
        return this.state;
    }
}
```
Originator可以操控現在狀況，以及生產Memento的方法，可以將現在狀態輸出成Memento物件。
```
//Originator.ts
import {Memento} from './Memento';

export class Originator{
    private state:string;

    setState(state:string):void{
        this.state = state;
    }
    getState():string{
        return this.state;
    }
    saveStateToMemento():Memento{
        return new Memento(this.state);
    }
    getStateFromMemento(memento:Memento):void{
        this.state = memento.getState();
    }
}
```
CareTaker內有一陣列用來存所有的Memento，為什麼不直接存state?就是因為封裝起來隱藏細節，且可能要存的不只是一state，所以有這樣的用意。

```
//CareTaker.ts
import {Memento} from './Memento';

export class CareTaker{
    private list:Memento[] =[];
    
    add(state:Memento):void{
        this.list.push(state);
    }

    get(index:number):Memento{
        return this.list[index];
    }
}
```

最後就是Demo
```
//Demo.ts
import {CareTaker} from './CareTaker';
import {Originator} from './Originator';

let originator:Originator = new Originator();
let careTaker:CareTaker = new CareTaker();

originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #3");
careTaker.add(originator.saveStateToMemento());

originator.setState("State #4");
console.log("Current State: " + originator.getState());

originator.getStateFromMemento(careTaker.get(0));
console.log("First saved State: " + originator.getState());
```

### 結論
這一Pattern我比較少考慮到，可能不太常用，但這封裝觀念我覺得對自已是一很棒的範例，所以..還是多看看囉。

### 參考
https://www.tutorialspoint.com/design_pattern/memento_pattern.htm