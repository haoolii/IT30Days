# TypeScript - Gof 23 Design Pattern (14)：Observer Pattern
### 前言
今天是慵懶的星期日，除了趕進度外應該來去曬曬太陽。

### Observer Pattern
---
#### 說明
昨天寫State Pattern時突然想到聊天平台的架構，為了達到RealTime而使用Socketio，而Socketio就是透過每秒一直確定是否有更新達到RealTime，那今天Observer Pattern有異曲同工之妙？ 但差別在於主動提供是否更新的資訊，但在伺服器端可能會造成伺服器附和很大吧？所以才採用客戶端自己去請求是否更新，也可能是瀏覽器限制等等..

####範例
首先是Subject，類似伺服器端的概念，有著一串的使用者，可以通知使用者要更新囉！
```
//subject.ts

import {Person} from './Person';
import {Observer} from './Observer';

export class Subject{
    private list:Observer[] =[]; //有一array存使用者
    private state:string; //狀態暫時用string存
    
    constructor(){
        
    }
    attach(p:Observer):void{ //使用者可註冊進伺服器
        this.list.push(p); //推入陣列中
    }
    setState(m){ //變更目前狀態資訊 
        this.state = m; 
        this.notifyAll(); //變更會一並通知所有人
    }

    getState():string{
        return this.state; //取得現在狀態資訊
    }

    notifyAll(){ //通知所有人
        this.list.forEach(function (p) {
            p.Update(); //foreach每一使用者告知他狀態有被更新，請來取最新狀態。
        }); 
    }
}
```
為何不直接把最新狀態丟過去使用者呢？原因就是也許使用者已經掛了，或是並不需要更新，以致如果我們直接推送，會浪費很多資源，且一定很慢，每個都要傳送.. 所以用我發佈更新，看大家是不是還活著，要更新的自己來拿。

建一介面，來規範Observer
```
//Observer.ts
import {Subject} from './Subject';

export interface Observer{
    subject:Subject;
    Update():void;
}
```

```
//Person.ts
import {Observer} from './Observer';
import {Subject} from './Subject';
//Person實作Observer
export class Person implements Observer{
    name:string;  //名字
    subject:Subject;    //Subject
    constructor(n,sub){ //建構時綁入名字與subject
        this.name = n;
        this.subject = sub;
        this.subject.attach(this); //雙向綁起來 妳知道我 我知道你
    }
    Update():void{ //當被subject通知更新時，會執行以下方法
        console.log(this.name+": get Updating...");
        console.log(this.name+": get New State...");
        console.log(this.name+": New State: "+this.subject.getState());//並自行去取得最新狀態
    }
}
```

以下Demo就可以依序看到更新狀態以及個別訊息。
```
Demo.ts
import {Person} from './Person';
import {Observer} from './Observer';
import {Subject} from './Subject';

let subject:Subject = new Subject();
let amy:Observer = new Person('Amy',subject);
let jack:Observer = new Person('Jack',subject);
let peter:Observer = new Person('Pater',subject);

subject.setState('fuck');
```

### 結論
Observer Pattern讓我又想來規劃一聊天的平台，順便整合最近所學的，Travis-ci、Webpack、等等方便工具以及Typescript寫法，雖然說真的我覺得Typescript寫前端不套框架我還沒有想到比較好寫的方法，模組化時return html這樣組成一網頁嗎，感覺直接用框架似乎比較優？還沒有特別研究。

### 參考
[Design Patterns - Observer Pattern](https://www.tutorialspoint.com/design_pattern/observer_pattern.htm)