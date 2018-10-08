## TypeScript - Gof 23 Design Pattern (08)：Facade Pattern
### 前言
今天是上班日的第一天，好累.. 今天就來個Facade Pattern!!

### Facade Pattern
---
#### 說明
隨著系統規模越來越大，子系統也越來越大，其實很常我們就會整合子系統成為一子系統的介面，這也就是Facade Pattern的概念，整合子系統，讓操作子系統有更方便的街面，也避免日後維護產生相互依賴，導致衛護起來相當困難的問題。
舉例：總經理不必直接幹樵某個底層員工，他可以透過幹瞧他的主管，進而主管去幹樵那個員工，達到目的。
#### 範例
首先我們先來建個子原件，延續說明的例子，來新增幾個員工。
這是笨笨的員工
```
// NoobEmployee.ts
export class NoobEmployee {
    name:string;
    constructor(n){
        this.name = n;
    }
    punishmented():void{
        console.log(this.name + 'say: oh no!');
    }
}
```
以及普通的員工
```
// NormalEmployee.ts
export class NormalEmployee {
    name:string;
    constructor(n){
        this.name = n;
    }
	reward():void{
        console.log(this.name + 'say: yaa');
    }
}
```
普通員工有被獎勵的方法，笨笨員工有被懲罰的方法，那我是習慣class獨立，還有一種namespace的做法，但我覺得看起來很亂，而且老實講我不太清楚怎麼使用哈哈。
這時總經理就是你，因為心血來潮想要來獎勵一下員工，但其實你一個一個去講，超辛苦還要記起來那麼多員工的名字，於是想到解決方法，就是Facade主管，可以來幫我做到這件事。
```
import { NoobEmployee } from './NoobEmployee';//引入
import { NormalEmployee } from './NormalEmployee';//引入

export class Facade {
	public employee1:NoobEmployee = new NoobEmployee('Amy'); //有amy員工
	public employee2:NormalEmployee = new NormalEmployee('Ben');//有ben員工
	public employee3:NoobEmployee = new NoobEmployee('Cherry');//有cherry員工
	public employee4:NormalEmployee = new NormalEmployee('Dimo');//有dimo員工
	
	RewardNormalEmployee():void{ //獎賞普通努力的員工
		this.employee2.reward();
		this.employee4.reward();
	}
	punishmentMakeMistakeEmployee():void{//懲罰笨笨員工
		this.employee1.punishmented();
		this.employee3.punishmented();
	}
}
```
其實很簡單可以看得出來，多了一層主管，讓我們管理起來，就只要把主管叫過來，並透過他來達到我們要的要求即可，非常方便呢！總經理也不用記得所有員工的名字。 以下是上層總經理叫主管的流程
```
// app.ts
import { Facade } from './Facade'; //引入

const facade: Facade = new Facade(); //主管生出來
facade.punishmentMakeMistakeEmployee(); //電一波笨笨員工
facade.RewardNormalEmployee(); //獎賞普通努力的員工
```
這樣就是Facade Pattern的精神，透過整合統一窗口介面，讓高階元件不必特別了解低階元件如何運作，且可減少依賴低階元件，這個Pattern應該常常用到呢！概念也很簡單。
