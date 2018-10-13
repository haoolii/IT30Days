# TypeScript - Gof 23 Design Pattern (13)：State Pattern
### 前言
今天是慵懶的星期六，每天發文真的滿ㄍㄧㄥ的，堅持住啊，今天來個State Pattern。

### State Pattern
---
#### 說明
還記得早年的時候，寫了一簡易的溝通平台，結果太傻了寫了一堆if、elase判斷狀態，變成程式非常肥，很多重複的指令，但可能也是太懶惰，雖然if、else簡單可以解決，寫乾淨一點也是沒問題的。但如果專案架構非常大的時候，可能就不是那麼優了，這時候才發現，原來有一個State Pattern，早就替我們解決的狀態的問題了。
寫完範例的時候很有感觸，因為之前就想用State Pattern，現在整理且寫出範例還滿感動的。

#### 範例
首先我們這個聊天平台呢，只有兩種狀態，**登入狀態**以及**登出狀態**，先大概想一下，應該會有聊天這動作，登入動作，登出動作三個動作，如果以if else寫是不會太多行，架構也算清晰，但會...
```
if(state=='登入'){
    console.log('登入');
}else if(state == '登出'){
    console.log("請先登入");
}else{
    console.log("聊天");
}
```
看起來算還可以，但當遇到兩裝狀態有相同動作時，可能會抽出方法封裝起來，但抽來抽去最後的結果就是一坨很長的if else，因為礙於篇幅並沒有做實際好幾十種狀態的模擬。
#### 解決方案 
先來定義狀態會有的行為
```
//State.ts
export interface State{
    chat():void;
    login():void;
    logout():void;
}
```
暫時先這三種動作
以下為使用者這物件的初步概念
```
//Person.ts
import {State} from './State';
import {IsLogin} from './IsLogin';
import {IsLogout} from './IsLogout';

export class Person{
    private isLogin:State; //先讓使用者有這兩種狀態：登入、登出
    private isLogout:State; 
    private state:State; //使用者目前的狀態
    
    constructor(){
       
    }
    //使用者使用chat()將會觸發該狀態對應的方法
    public chat():void{
        this.state.chat();
    }
    //使用者使用login()將會觸發該狀態對應的方法
    public login():void{
        this.state.login();
    }
    //使用者使用logout()將會觸發該狀態對應的方法
    public logout():void{
        this.state.logout();
    }
}
```
大致寫了一下我們的使用者 現在該來定義那兩個狀態
```
//IsLogin.ts
import {State} from './State';
import {Person} from './Person';

export class IsLogin implements State{
    private person:Person; //每一狀態會綁上使用者的物件，這是Mediatro的雙相溝通方法。
    constructor(p:Person){ //透過建構子進行綁定
        this.person = p;
    }
    public chat():void{//因為是已經登入得狀態，所以就聊天ing。
        console.log('Chating!!!!'); 
    }
    public login():void{//那因為已經是登入狀態，當然會回應已經登入了！
        console.log('You are already logged in!');
    }
    public logout():void{//登入狀態是可以執行登出的動作，所以當他執行時，就會切換回登出動作
        console.log('Logout....');
        this.person.setState(this.person.getisLogoutState()); //這方法還未新增在Person.ts
        //更改使用者的狀態，且決定該狀態的物件還是由使用者本身
    }
}
```
同理另一IsLogout也是相同概念
```
//IsLogout.ts
import {State} from './State';
import {Person} from './Person';

export class IsLogout implements State{
    private person:Person; 
    constructor(p:Person){
        this.person = p;
    }
    public chat():void{ //登出狀態當然沒有辦法聊天
        console.log('Please Login first!'); 
    }
    public login():void{ //登出狀態是可以執行登入動作的
        console.log('Login....');
        this.person.setState(this.person.getisLoginState());//更改使用者狀態 還未新增在使用者
    }
    public logout():void{
        console.log('You already out!'); //登出狀態再登出？當然不行
    }
}
```
那我們來補齊使用者Person.ts的程式碼吧，要補齊的就是變更裝態的方法以及把以上兩個狀態綁進去使用者
```
//Person.ts
import {State} from './State';
import {IsLogin} from './IsLogin';
import {IsLogout} from './IsLogout';

export class Person{
    private isLogin:State;
    private isLogout:State;
    private state:State;
    
    constructor(){//透過建構子將自己綁進去狀態，mediator的雙向概念。
        this.isLogin = new IsLogin(this);
        this.isLogout = new IsLogout(this);
        this.state = this.isLogout; //預設狀態是登出狀態
    }
    //====
    //各個方法執行時，會呼叫狀態的方法。 所以我不會有一串邏輯判斷，因為會透過切方法來找到對應的回應。
    public chat():void{
        this.state.chat();
    }
    public login():void{
        this.state.login();
    }
    public logout():void{
        this.state.logout();
    }
    //===
    //取得登入狀態以及登出狀態。
    public getisLoginState():State{
        return this.isLogin;
    }
    public getisLogoutState():State{
        return this.isLogout;
    }
    //=====
    //曲的目前狀態，好像沒用到呵呵。
    public getState():State{
        return this.state;
    }
    //設定狀態
    public setState(s:State):void{
        this.state = s;
    }
}
```
最後的主執行方式
```
import {Person} from './Person';

let person:Person = new Person();

person.chat(); 
person.login(); 
person.chat();
person.login();
person.logout();
```

> 因為程式碼篇幅比較大，程式碼完整的將放在我的Github上，有興趣的可以去試試看呢！[我的GitHub](https://github.com/unnhao/IT30Days/tree/master/Day13)

### 結論
這Pattern我覺得是用途非常大的，因為我興趣都是寫小東西，但連小東西都會遇到if else判斷邏輯一堆，導致隔幾天看，都要很久才能了解當初在想什麼，透過標準State pattern，維護可讀都提升不少，讓專案在後期都很好增加功能。

### 參考
參考大學講義，但有版權問題不提供。