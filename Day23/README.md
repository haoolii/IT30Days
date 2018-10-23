# TypeScript - Gof 23 Design Pattern (23)：Template Pattern
### 前言
今天寫Template Pattern才發現，竟然竟然..Typescript並沒有final防止子類別複寫父類別的方法，爬文發現這真的滿有爭議的，因為真的沒有..

### Template Pattern
---
#### 說明
Template Pattern意思就是，有一大致相同的流程，但各自方法些微不同，可以透過Template Pattern來管理控制，像是遊戲通常都是有初始化、開始遊戲、結束遊戲，所以就制定了這三個大流程，且順序就是，初始化、開始、結束，我們將方法設置為抽象，讓子類別實現，並限制該流程，但是因為Typescript沒有final限制子類別不能複寫，所以會導致主流程可能遭到修改，那這部分可能就要其他方法達成，但也可能封裝方法流程等等其實在Typescript不實用？所以才沒被納入...？

#### 範例
先來制定我們的方法規範
```
//Game.ts
export abstract class Game{
    abstract initialize():void;
    abstract startPlay():void;
    abstract endPlay():void;
    
    play():void{      //流程在這裡哦   
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
}
```

再來分別制定兩種遊戲，並實現繼承的抽象方法
```
//Cricket.ts
import {Game} from './Game';

export class Cricket extends Game{
    initialize():void{
        console.log('Cricket initializing..');
    }
    startPlay():void{
        console.log('Cricket startPlaying..');
    }
    endPlay():void{
        console.log('Cricket endPlaying..');
    }
}
```
還有一種遊戲
```
import {Game} from './Game';

export class Football extends Game{
    initialize():void{
        console.log('Football initializing..');
    }
    startPlay():void{
        console.log('Football startPlaying..');
    }
    endPlay():void{
        console.log('Football endPlaying..');
    }
}
```
然後就Demo
```
import {Football} from './Football';
import {Cricket} from './Cricket';
import {Game} from './Game';

let football = new Football();
let cricket = new Cricket();
football.play();
cricket.play();
```

### 結論
是不是很簡單，其實就是將流程制定好，讓我們可以輕易地使用，但這部分可能也可以用組合的方式，制定一很像是巨集的方法集，然後使用，但..這Pattern標準是這樣，就參考囉！至少知道Typescript沒有final。

### 參考
https://www.tutorialspoint.com/design_pattern/template_pattern.htm