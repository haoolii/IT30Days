## TypeScript - Gof 23 Design Pattern (07)：Singleton pattern
### 前言
今天終於開始了Pattern！第一個是Singeton Pattern！

### Singleton pattern
---
#### 說明
目的：保證某個類(class)只會產生一個實例(instance)，而且要提供存取該物件的統一方法。
意思就是要確保所有人存取這個方法物件時都是同一個，像是資料庫存取。

### 範例
用SingetonDB來代表我們要期待統一使用的物件，大家都要用這個SingetonDB哦！
```
class SingetonDB{

}
```
我們思考到只能有這一物件，所以我必須防止SingetonDB被其他人建構出來。
```
class SingetonDB{
    private constructor()
    {
        //哈哈 只有我能創建 別人別想
    }
}
```
這時候一個問號，這樣防止建構出來？這樣怎麼用？
不要急下一步就是要來創建他、並新增取用方式

```
class SingetonDB{
    private static _instance: SingetonDB = new SingetonDB(); //創建一實例且也是private在內部，外部無法直接取用，且直接宣告在記憶體，
    
    private constructor(){
        //哈哈 只有我能創建 別人別想
    }
    
    //一方法直接宣告在記憶體，當作存取此instance的方法，且因宣告在static也不可能透過外部創建，也確保唯一的instance
    public static getInstanceDB(){
        return this._instance;
    }
    
    //此物件含有getInfo的方法，且為public。但因為這是class內的方法，必須實例化才能使用，getInstanceDB，也就達到唯一的實例了。
    public getInfo():string{
     return 'i am unique';
    }    
}

//使用看看
let onlyOneDB = SingetonDB.getInstanceDB();//取得實例物件
console.log(onlyOneDB.getInfo()); 
```

---
這時候又有問題了，如果這個SingetonDB非常的肥大，載入大概需要10-20分鐘，使用時機非常的少，以至於每次開啟都要載入很久，該怎麼辦呢？
**Lazy Initialization**是一種方法，就是懶懶的初始化，你媽叫你去洗澡你才去洗澡的概念。
```
class SingetonDB{
    private static _instance: SingetonDB = null //制定一變數來放這傢伙，但是空的，一開始並沒有初始化。
    
    private constructor(){
        //哈哈 只有我能創建 別人別想
    }
    
    //跟上面的狀況不一樣式，只有在有需要用到此instance時，這instance才會被建構，這也就是Lazy Initialization延緩初始化到要取用時，反正就是你媽叫你洗澡你才去洗澡。
    public static getInstanceDB(){
        return this._instance || (this._instance = new this());
    }
    
    //此物件含有getInfo的方法，且為public。但因為這是class內的方法，必須實例化才能使用，getInstanceDB，也就達到唯一的實例了。
    public getInfo():string{
     return 'i am unique';
    }    
}

//使用看看
let onlyOneDB = SingetonDB.getInstanceDB();//取得實例物件
console.log(onlyOneDB.getInfo()); 
```

---
在Java世界中有另外一種問題，同時可能會被建構多個Singeton，也就是在Singeton尚未被建立時，有多個getInstanceDB()被執行，可能會造成Singeton的失效，但在Typescript看似不需要特別Block，單執行續的延伸的問題，所以我在此篇並沒有特別解釋，因為我怕我講錯哈哈哈。
可以參考這篇[深入理解JavaScript執行（單執行緒的JS）](https://itw01.com/ZQ5SETS.html)

### 參考來源
[How to define Singleton in TypeScript](https://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript)
[Singleton模式](https://openhome.cc/Gossip/DesignPattern/SingletonPattern.htm)
