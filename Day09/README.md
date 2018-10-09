## TypeScript - Gof 23 Design Pattern (09)：Mediator Pattern
### 前言
明天是國慶日，該不該去領雙倍薪水上班呢？今天介紹的是 MediatorPattern中介者模式。

### Mediator Pattern
---
#### 說明
Mediator Pattern是行為類型的模式，用於過於複雜交錯的溝通，達到解耦合的效果，沒錯！乍聽他非常像Facade Pattern的感覺，這23個Pattern很多其實都有相似的部分，但差在使用時機跟狀況。Facade是結構類型的模式，至於為什麼會很像呢？看完範例你也會了解。

#### 範例
來個例子，我覺得像是每一個公司，同事彼此一定會有摩擦，這時候就會需要中介人來調解紛爭當個一個管道，且能讓大家把話說明白，也讓公司知道狀況。如果私底下約出來喬，公司不僅不知道這種狀況，且資訊不對稱，就會像我們社會一樣？呵呵
```
export class Mediator {//中介人
    person1:Person; //員工1 
    person2:Person; //員工2

	constructor(){
        this.person1 = new Person(this,'Amy'); //塞名子給他
        this.person2 = new Person(this,'Ted'); //塞名子給他
    }
    
    public talkTo(who:string,message:string):void{//說指定的人
        if(this.person1.name == who){
            this.person1.told(message);
        }
        if(this.person2.name == who){
            this.person2.told(message);
        }
    }
}
```
以上是中介人，他不僅知道員工有誰，也會講自己塞入員工內，讓中介人可以呼叫員工，員工也可以呼叫中介人。
這和facade不同的地方就在這，雙向溝通跟單向溝通的差別。
接下來來看員工
```
export class Person { //員工
    public name:string; //故意打開的
    private mediator:Mediator; //中介人
    
	constructor(m:Mediator,n:string){ //設定中介人和名字
        this.mediator = m;
        this.name = n;
    }
    public told(message):void{ //有人幹瞧你
        console.log(name+'收到訊息: '+message);
    }
    public blameSomeOne(message):void{ //罵人
        mediator.talkTo('Amy','y r dog'); //透過中介者溝通
    }
}
```
接下來是員工透過mediator與要被幹樵的人溝通，透過中介者我們可以讓多對多的的溝通方式，改為多對一，方便管理，且讓資訊流通窗口單一。

#### 結論
除了與facade差異在雙向以及單向溝通外，另外是facade有隱藏子元件細節的目的，可能是針對系統外部使用者等等隱藏細節的操作，mediator著重的點是在於讓溝通的行為管單單一，網路上還有更多範例，針對比較做出更完善的解答，我只能說...我也是還在學習的路上。

### 參考資料
[Façade vs. Mediator](https://stackoverflow.com/questions/481984/fa%C3%A7ade-vs-mediator)

