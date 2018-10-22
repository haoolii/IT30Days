# TypeScript - Gof 23 Design Pattern (22)：Adapter Pattern
### 前言
今天一個衝動買錯了東西，還買貴了...今天來的Adapter Pattern吧！

### Adapter Pattern
---
#### 說明
Adapter Pattern，透過組合的方式讓我們可以以新物件來包舊物件，達到像是轉接頭的概念，舊的接口可以透過新的接口呼叫，其中這很像是Proxy一樣，透過組合的方式增加判斷以及限制，但與Proxy不相同的是，Adapter是針對新的function介面，並不是維持原本的呼叫介面，於是差異最大的就在於Adapter新的呼叫介面與舊的不同，而Proxy是維持同樣的呼叫介面，在概念層面也是如此。

#### 範例
這是舊的Player有奇怪的呼叫方法
```
//OldPlayer.ts
export class OldPlayer{
    playTheMusicPlease(oldSetting:string):void{
        console.log('playing...')
    }
}
```

為了可以改變舊的呼叫方法，我們先來訂一Player介面，包含轉接器
```
//Player.ts
export interface Player{
    play():void;
}
```

一轉接的類別，裡面有一舊的播放物件，他可以透過if else各種方式來想辦法以舊的方式播放。
```
//Adpater.ts
import {Player} from './Player';
import {OldPlayer} from './OldPlayer';
export class Adpater implements Player{
    private OldPlayer:OldPlayer;
    constructor(){
        this.OldPlayer = new OldPlayer();
    }
    play():void{
        //if... else ...
        this.OldPlayer.playTheMusicPlease('oldSetting');
    }
}
```

新的播放器，裡面有一轉接的播放器，他會呼叫轉接的來幫他執行播放動作。
```
import {Player} from './Player';
import {Adpater} from './Adpater';

export class AudioPlayer implements Player{
    private AdapterPlayer;
    constructor(){
        this.AdapterPlayer = new Adpater();
    }
    play():void{
        this.AdapterPlayer.play();
    }
}
```

最後的Demo
```
//Demo.ts
import {Player} from './Player';
import {AudioPlayer} from './AudioPlayer';

let player:Player = new AudioPlayer();
player.play();
```

### 總結
差異跟Proxy、Decorator搞清楚就不太會搞混，用途就會更明確！

### 參考
https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm
