# TypeScript - Gof 23 Design Pattern (26)：Chain of Responsibility Pattern
### 前言
前幾天學弟遇到購物車優惠的檢查機制問題，今天就來使用Chain of Responsibility試試看吧！

### Chain of Responsibility Pattern
---
#### 說明
這是將一連串的連續式判斷類似Case拆成Object，這一個節點可以處理就處理或是移動到下一個節點處理，有點像是單向LinkList，一個屁股串一個屁股，可以讓我們新增判斷很方便。

#### 範例
就是以購物車來當範例，判斷有沒有符合優惠項目。

主要就是這一抽象類別。
```
//AbstractPromotion.ts
export abstract class AbstractPromotion{
    protected PromotionCombo:string[] =[]; //優惠的項目
    protected nextPromotion:AbstractPromotion; //下一個優惠
    constructor(combo:string[]){
        this.PromotionCombo = combo; //建構時先將優惠項目綁上去
    }
    public setNextPromotion(nextPromotion:AbstractPromotion):void{
        this.nextPromotion =  nextPromotion; //設置下一個優惠
    }
    public usePromotion(goods:string[]):void{ //使用優惠
        if(this.compareArray(goods,this.PromotionCombo)){
            this.use(); //透過下方的交集判斷，判斷是否購物車內的商品符合我們的優惠combo。
                       //如果符合就可以使用use()，那現在use是抽象方法，由子類別實踐。
        }
            if(this.nextPromotion != null){ //如果還有下一個優惠判斷
                this.nextPromotion.usePromotion(goods); //就使用下一個優惠
            }else{
                console.log('check out!'); //沒有了就結帳了！
            }     
    }

    abstract use():void; 
    
    //交集判斷，採用filter，有興趣自己去找怎麼寫更好。
    protected compareArray(arrA:string[], arrB:string[]):boolean{
        return arrB.length == (arrA.filter(a => arrB.filter(b => a == b)[0])).length;
    }
}
```

再來就是子類別的優惠，因為沒有特別做數字計算，單純log出來而已，在子類別可以做更複雜的金額預算。
```
//PromotionA.ts
import {AbstractPromotion} from './AbstractPromotion';
export class PromotionA extends AbstractPromotion{    
    use():void{
        console.log('Use PromotionA');
    }
}

```

```
//PromotionB.ts
import {AbstractPromotion} from './AbstractPromotion';
export class PromotionB extends AbstractPromotion{    
    use():void{
        console.log('Use PromotionB');
    }
}
```

```
//PromotionC.ts
import {AbstractPromotion} from './AbstractPromotion';
export class PromotionC extends AbstractPromotion{    
    use():void{
        console.log('Use PromotionC');
    }
}
```

Demo使用的方法！
```
//Demo.ts
import {AbstractPromotion} from './AbstractPromotion';
import {PromotionA} from './PromotionA';
import {PromotionB} from './PromotionB';
import {PromotionC} from './PromotionC';

let promotionA:AbstractPromotion = new PromotionA(['a','b']); //優惠A 需要有商品a和b
let promotionB:AbstractPromotion = new PromotionB(['c','b']); //優惠B 需要有商品c和b
let promotionC:AbstractPromotion = new PromotionC(['e','a']); //優惠C 需要有商品e和a
 promotionA.setNextPromotion(promotionB);
 promotionB.setNextPromotion(promotionC);

 let shoppingCart:string[] = ['a','b','shie','e']; //購物車有四項商品
 promotionA.usePromotion(shoppingCart);
 ```
 
 ### 結論
 今天太晚開始寫，那個交集的刻意要用filter一行寫害我花了點時間，不過還好趕上了呵呵。如果要單一優惠擇一，就要動usePromotion內的判斷式，來中斷他繼續往下判斷。
 
 ### 參考資料
[tutorialspoint](https://www.tutorialspoint.com/design_pattern/chain_of_responsibility_pattern.htm)
[mozilla filter](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)