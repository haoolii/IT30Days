# TypeScript - Gof 23 Design Pattern (17)：Decorator Pattern
### 前言
今天收到兵單了，也就是我11月初就會去陰間待四個月，希望時間過很快，但時間總是過去才覺得很快，當下一定是超級漫長。今天來Decorator Pattern吧！

### Decorator Pattern
---
#### 說明
Decorator Pattern顧名思義就是裝飾，意思是在原本的物件上加上一些功能，但並不會改變原本的型態，就像馬桶蓋，加了功能變會熱的馬桶蓋，但他還是馬桶蓋。那實際運作起來會有點樣..有時候男性同胞們會去看一些片片，片片的網站都會有一些額外的功能，明明點擊播放鍵，卻會觸發到上層透明的彈跳廣告，沒錯！地方的媽媽就跑出來了。就是大概這種感覺，他一樣是個網站只是被廣告包起來，也就是外層是一層透明的廣告裝飾，讓我們觸及時會引發裝飾效果。

#### 實際範例
用武器舉例最好了！先來制武器規格，都有攻擊這個功能。
```
// Weapon.ts
export interface Weapon{
    attack():void;
}
```
來把刀吧！
```
//Knife.ts
import {Weapon} from './Weapon';

export class Knife implements Weapon{
    attack():void{
        console.log("Knife attacking");
    }
}
```
並且我增加了一裝飾用的抽象類別，用來表示裝飾類的行為。
```
//WeaponDecorator.ts
import {Weapon} from './Weapon';

export abstract class WeaponDecorator implements Weapon{
    public decoratorweapon:Weapon;
    constructor(w:Weapon){
        this.decoratorweapon = w;
    }
    attack():void{
        this.decoratorweapon.attack();
    }
}
```
再來實作一下Decorator的類，我希望有發熱功能。
```
import {Weapon} from './Weapon';
import {WeaponDecorator} from './WeaponDecorator';

export class WarmDecorator extends WeaponDecorator{

    constructor(w:Weapon){
        super(w);
    }
    attack():void{ //這邊當你觸發attack時，會一併觸發發熱功能，併呼叫原武器的攻擊方法。
        super.attack();
        this.warmDecorator();
    }
    private warmDecorator():void{
        console.log('Warming your heart!');
    }
}
```
再來就是Demo!
```
//Demo.ts
import {Weapon} from './Weapon';
import {Knife} from './Knife';
import {WeaponDecorator} from './WeaponDecorator';
import {WarmDecorator} from './WarmDecorator';

let myknife = new Knife();
myknife.attack();
console.log('');
let myknife_leve2:WeaponDecorator = new WarmDecorator(myknife_leve2);
myknife_leve2.attack();
console.log('');
```

### 結論
Decorator是可以多層包，也就是你的一個點擊可能不只是地方媽媽，地方爸爸也跑出來了，就會像剝洋蔥一樣，一層一層的解開這個Decorator，最後解開的卻是Error影片，呵呵。

### 參考資料
我的腦袋瓜