# TypeScript - Gof 23 Design Pattern (19)：Bridge Pattern
### 前言
今天來個跟Strategy很容易搞混的Bridge Pattern吧！

### Bridge Pattern
---
#### 說明
首先先說，Strategy Pattern是歸類在behavior pattern(行為)，所以是針對操作行為等等的設計模式。那Bridge Pattern是Struct Pattern(結構)，是針對程式架構的設計模式。也許ClassDiagram會非常相近，但動機以及用途不一樣。

#### 範例
範例是以GOGORO電池為例，GOGORO電池內的組成方式有鋰電池以及碳鋅電池，這只是舉例而已。那首先先定義一組成物必需要能儲存能源。
```
//Composition.ts
export interface Composition{
    storePower():void;
}
```
再來碳鋅組件，且依照Composition的規範
```
//CarbonComposition.ts
import {Composition} from './Composition';

export class CarbonComposition implements Composition{
    storePower():void{
        console.log('Storing in CarbonComposition');
    }   
}
```
接著是鋰組件
```
//LithiumComposition.ts
import {Composition} from './Composition';

export class LithiumComposition implements Composition{
    storePower():void{
        console.log('Storing in LithiumBattery');
    }   
}
```

那新增完組建之後就來制定一下我們電池
```
//Battery.ts
import {Composition} from './Composition';
import {LithiumComposition} from './LithiumComposition';
import {CarbonComposition} from './CarbonComposition';

export abstract class Battery{
    protected storeComposition:Composition;
    constructor(sc:Composition){
        this.storeComposition = sc;
    }
    abstract store():void;    
}
```

此電池是一抽象類別，那他已經有牽制電池的共用方法，就是必須要有組成物(廢話)，且會有一儲存的抽象方法。
```
//Battery.ts
import {Composition} from './Composition';
import {LithiumComposition} from './LithiumComposition';
import {CarbonComposition} from './CarbonComposition';

export abstract class Battery{
    protected storeComposition:Composition;
    
    constructor(sc:Composition){
        this.storeComposition = sc;
    }
    abstract store():void;    
}
```

再來就是出現GOGORO電池
```
//GogoroBattery.ts
import {Battery} from './Battery';
import {Composition} from './Composition';

export class GogoroBattery extends Battery{
    constructor(cp:Composition){
        super(cp);
    }
    store():void{
        this.storeComposition.storePower();
    }
}
```
GOGORO電池繼承了Battery也就是是一種(is-a)的概念。
再來就是Demo
```
//Demo.ts
import {Battery} from './Battery';
import {GogoroBattery} from './GogoroBattery';
import {Composition} from './Composition';
import {LithiumComposition} from './LithiumComposition';
import {CarbonComposition} from './CarbonComposition';

let gogoroBattery1:Battery = new GogoroBattery(new LithiumComposition());
let gogoroBattery2:Battery = new GogoroBattery(new CarbonComposition());
gogoroBattery1.store();
gogoroBattery2.store();
```

### 結論
最後總結一下，到底跟Strategy差在哪裡呢？我們很明顯感受到這樣制定並不是為了要切換組件(鋰、碳鋅)而制定的統一介面，是因為要抽離出儲存電池的方法，且當電池街口發生更動時，也不會影響到組件。

### 參考
https://stackoverflow.com/questions/5863530/strategy-vs-bridge-patterns