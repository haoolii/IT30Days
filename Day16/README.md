# TypeScript - Gof 23 Design Pattern (16)：Command Pattern
### 前言
持續整合自身技術好像是關鍵，但是時間好像不夠用，啊啊啊啊～～不停的奮鬥啊，今天來個Command Pattern吧！

### Command Pattern
---
#### 說明
那這Pattern主要是用來封裝方法，把方法以物件方式，可以像是參數傳遞或是可以使用list且當成巨集使用。感覺很多此一舉？看看範例吧。

#### 範例
先來做個門跟燈
```
//Door.ts
export class Door{
    open():void{
        console.log('door is open');
    }
    close():void{
        console.log('door is close');
    }
}
//Light.ts
export class Light{ 
    on():void{
        console.log('light is on');
    }
    off():void{
        console.log('light is off');
    }
}
```

做好門和燈，就來制定一下我們Command該有什麼方法。
```
export interface Command{
    execute():void
}
```
沒錯就是一個執行方法，一個Command就是用來執行的。

實作Command介面，做出一開門指令。
```
//DoorOpenCommand.ts
import {Command} from './Command';
import {Door} from './Door';

export class DoorOpenCommand implements Command{
    
    private door:Door;
    constructor(d:Door){
        this.door = d;
    }
    execute():void{
        this.door.open();
    }
}
```
有開門當然要關門
```
//DoorCloseCommand.ts
import {Command} from './Command';
import {Door} from './Door';

export class DoorCloseCommand implements Command{

    private door:Door;
    constructor(d:Door){
        this.door = d;
    }
    execute():void{
        this.door.close();
    }
}
```

再來關燈
```
//LightOffCommand.ts
import {Command} from './Command';
import {Light} from './Light';

export class LightOffCommand implements Command{
    
    private light:Light;
    constructor(d:Light){
        this.light = d;
    }
    execute():void{
        this.light.off();
    }
}
```

開燈
```
//LightOnCommand.ts
import {Command} from './Command';
import {Light} from './Light';

export class LightOnCommand implements Command{
    
    private light:Light;
    constructor(d:Light){
        this.light = d;
    }
    execute():void{
        this.light.on();
    }
}
```

好了，都做好了，也就是說我們有四個操做，操作兩個物件，燈與門。一般如果要平常要寫不就是Door.Open()、Door.Close()就好嗎？寫好多好累喔。但想想，如果今天門是需要鑰匙的，雖然可以給每個人一把鑰匙，但如果今天鎖頭換了，人人都要重打鑰匙，非常麻煩，於是出現了看門小弟，只要跟看門小弟講「喂開門，你知道我是誰」，開門小弟有鑰匙就可以幫大家打開，就算換鎖頭，也只要跟看門小弟換鑰匙，大家也許根本都不知道換鑰匙了，且透過封裝成物件，可以存在一個List當作是一連串的接技。

```
//Demo.ts
import {Door} from './Door';
import {Light} from './Light';
import {Command} from './Command';
import {DoorOpenCommand} from './DoorOpenCommand';
import {DoorCloseCommand} from './DoorCloseCommand';
import {LightOnCommand} from './LightOnCommand';
import {LightOffCommand} from './LightOffCommand';

let commandList:Command[] =[];
let door = new Door();
let light = new Light();
commandList.push(new DoorOpenCommand(door)); //第一步開門
commandList.push(new LightOnCommand(light)); //第二部開燈
commandList.push(new LightOffCommand(light)); //第三步關燈
commandList.push(new DoorCloseCommand(door)); //第四步脫衣服 阿啊啊 是關門才對

commandList.forEach( (command, index) => {
    command.execute();
  });
```

以上就可以製作出一奇怪的巨集，達到循序執行的方法，且不直接操作物件，多了一層看門小弟，所以降低了相依，在更換方法時並不需要去修改呼叫端，只要更改看門小弟身上的鑰匙就可以了。

### 結論
好方法！

### 參考
學習階段的講義，有版權
