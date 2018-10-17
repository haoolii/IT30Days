# TypeScript - Gof 23 Design Pattern (16)：Strategy Pattern
### 前言
今天是Strategy Pattern策略模式，有另一Pattern跟這個很像，之後就會遇到了呢。

### Strategy Pattern
---
#### 說明
Strategy Pattern，目的是可以切換實作方法，可能有一把槍，撞針都會撞到某個位置，所以子彈只要在那個位置可以引發擊發即可，所以可以自己實作自己的方法。可能再打巨大動物時，可以替換成麻醉，但仍然是擊發只是彈頭可能是大量麻醉藥，那切換對象時就是更換子彈也就是更換策略。

那以下範例是用電池來舉例，GOGORO是新興的電動機車，那由於使用電力所以行駛上並不會產生廢氣，這也是環保的一步，那反對者認為GOGORO電池來源的電不乾淨，雖然是乾淨的煤但仍然不乾淨，支持者認為內燃機似乎更不環保，以燃燒比率來反擊。但不可否認的是當如果大家行動動力來自電池時，可以透過更換發電方式，輕鬆達到更換綠能，降低機車動力對燃油的直接依賴，不會因為為了要換核能發電，所有人機車都必須配備核動力配備，這也是Pattern達到增加了中間關聯的Object，達到降低耦合的實例。不過關鍵還是在台灣能源政策是否能找到解決方法。

#### 範例
先來做Strategy
```
//Strategy.ts
export interface Strategy{
    Operation():void; //發電操作的方法
    getName():string; //發電型態名稱
}
```

核能發電
```
//NuclearPower.ts
import {Strategy} from './Strategy';

export class NuclearPower implements Strategy{
    Operation():void{
        console.log("Ohhh!! 好可怕哦"); //很怕欸 核能安不安全啊 
        console.log("Power Coming!!"); //電來囉~~
    }
    getName():string{
        return 'NuclearPower';
    }
}
```

水力發電
```
//WaterPower.ts
import {Strategy} from './Strategy';

export class WaterPower implements Strategy{
    Operation():void{
        console.log("Waiting..."); //很慢
        console.log("Waiting..."); //缺水
        console.log("Waiting..."); //就只能發那麼多 不要急
        console.log("Power Coming!!"); //電來囉
    }
    getName():string{
        return 'WaterPower';
    }
}
```
火力發電
```
//FirePower.ts
import {Strategy} from './Strategy';

export class FirePower implements Strategy{
    Operation():void{
        console.log("Ohhh!! 乾淨的煤"); //別擔心！乾淨的煤
        console.log("A lot of Smoke!!"); //是霧霾 可憐的台中
        console.log("Power Coming!!");  //電來囉
    }
    getName():string{
        return 'FirePower';
    }
}
```

再來就是制定電池了，電池可以更換充電策略，其實是台電拉，但那樣太麻煩了，簡化為電池。
```
import {Strategy} from './Strategy';
import {NuclearPower} from './NuclearPower';
import {WaterPower} from './WaterPower';

export class Battery{

    private strategy:Strategy; //充電策略
    
    setPowerStrategy(str:Strategy){
        this.strategy = str; //設定充電策略
    }

    charge():void{        
        console.log('Use: '+this.strategy.getName()+' Charging...'); //正在用什麼電充電
        this.strategy.Operation(); //充電吧
    }
    discharge():void{
        console.log('Discharging...');
    }
}
```

最後就是Demo
```
import {Strategy} from './Strategy';
import {NuclearPower} from './NuclearPower';
import {FirePower} from './FirePower';
import {WaterPower} from './WaterPower';
import {Battery} from './Battery';

let gogorobattery:Battery = new Battery(); //新增一電池

gogorobattery.setPowerStrategy(new FirePower()); //更改電池充電方法
gogorobattery.charge(); //幫電池充電囉
gogorobattery.discharge(); //耗電池的電
console.log('沒電了 拿去充電');

gogorobattery.setPowerStrategy(new NuclearPower());
gogorobattery.charge();
gogorobattery.discharge();
console.log('沒電了 拿去充電');

gogorobattery.setPowerStrategy(new WaterPower());
gogorobattery.charge();
gogorobattery.discharge();
```

### 結論
策略模式我認為在使用上，可能大家都用到了，只是不知道這也是個Pattern，我認為這非常實用。

### 參考
[Design Patterns - Strategy Pattern](https://www.tutorialspoint.com/design_pattern/strategy_pattern.htm)