# TypeScript - Gof 23 Design Pattern (20)：Proxy Pattern
### 前言
今天的Proxy Pattern跟 Decorator有一點相似，可以來比較一下！

### Proxy Pattern
---
#### 說明
ProxyPattern強調在限制物件的操作，或是另一種用途是快取載入、網頁壓縮圖片顯示等等狀況。目的都是限制我們直接存取物件，Proxy像是一個保姆會先看看是否要載入真實的物件，或是透過Proxy進行存取。

#### 範例
    本次範例是採用限制使用者是否該Token還存活，如果在伺服器端還是存活的，就可以讓使用者聊天，如果Token已經不存在於伺服器端，則將Token註冊。這範例不是實際網頁運作狀況，因為我還不太了解JWT等等Token登入認證，但我很快會了解的。
    
首先新增一使用者的介面
```
//User.ts 
export interface User{
    chat():void;
}
```

再來制定使用者物件
```
//AccountUser.ts
import {User} from './User';

export class AccountUser implements User{
    private accountToken:string;
    constructor(id:string){
        this.accountToken = id;
    }
    chat():void{
        console.log('Chating...');
    }
}
```

緊接著是Proxy物件
```
//ProxyUser.ts
import {User} from './User';
import {AccountUser} from './AccountUser';

export class ProxyUser implements User{
    private accountUser:User; //真實使用者物件
    private existUser:User = new AccountUser('1234'); //已經存在在伺服器端的使用者Token
    private accountToken:string;  //Token

    constructor(token:string){ 
        this.accountToken = token; //準備聊天的使用者
    }

    chat():void{ 
        if(!this.authcheck(this.accountToken)){ //確定是否有Token
            this.accountUser = new AccountUser(this.accountToken); //沒有的話就註冊Token
            console.log('Creating Auth Token') //建立中~~~
            this.accountUser.chat(); //一樣去聊天
        }else{
            console.log('Existing Auth Token') //有該Token直接拿出該Token的使用者物件
            this.existUser.chat(); //聊天吧
        }
    }

    private authcheck(token:string):boolean{ //簡易檢測
        return token == '1234' ? true : false;
    }
}
```

最後就是Demo!
```
//Demo.ts
import {ProxyUser} from './ProxyUser';
import {User} from './User';

let user1:ProxyUser = new ProxyUser('12345');
user1.chat();

let user2:ProxyUser = new ProxyUser('1234');
user2.chat();
```

### 結論
這是一限制用的Pattern，與Decorator最不相同的就是Decorator是擴增功能，兩個都是基於結構制定的設計模式，本來想結合StatePattern，但後來想想這樣太混亂，而且似乎使用是有衝突的，且目的上State Pattern 與 Proxy Pattern在這種狀況看似可以替代，但Proxy著重在單個物件操作上，且是細節的Token存取概想，State Pattern像是大範圍概念。

### 資料來源
https://sourcemaking.com/design_patterns/proxy