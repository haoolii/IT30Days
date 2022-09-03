## TypeScript - Gof 23 Design Pattern (06)：Variable Declarations
### 前言
今天是舒服的星期六，參加了一場Webpack的活動受益良多，於是今天繼續...

### Variable Declarations
---
#### 說明
let和var是javascript比較新的變數宣告方式，前幾張有說到let和var非常相似，但在作用域上，let可以幫你省去很多麻煩和問題。const是let的增強，可以避免再次被賦值。
這一章我覺得如果徹底了解，往後的日子可以少掉不少麻煩，希望是如此哈哈

#### Var
一般宣告
```
var a = 10;
```

function內的變數
```
function f() {
    var message = "Hello, world!";

    return message;
}
```

下面例子，g()仍可以取得到a變數。即使f()已經執行完了，意指f()已經將g()return了，但透過g()依然能讀到變數a。
```
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
```

#### var作用域
這案例就是一個詭異的地方，var在if內宣告但卻仍然讀得到，這是什麼鬼。
這是因為var宣告他是可以在包含它的function，module，namespace或global scope内部任何位置被存取。
```
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'
```
那作用域這麼詭異，會有什麼影響呢?
以下範例就是例子，外部回圈才跑一第一次就結束了，原因就是變數吃到對方了。
```
function sumMatrix(matrix: number) {
    var sum = 0;
    for (var i = 0; i < matrix; i++) {
        console.log('out'+i);
        for (var i = 0; i < matrix; i++) {
            console.log('in'+i);
        }
    }
    return sum;
}
```
#### 經典範例
```
for(var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1);
}
```
我們期待印出1到10，結果噴出10個10。
原因是var在此宣告時會因[提升（Hoisting）](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)被存至全域，又因setTimeout是非同步的function，因次當setTimeout要執行時，其實i早就已經是10且註冊在全域。

#### let
```
for(let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1);
}
```
沒錯，用了let就解決了，遵照我們所想的1到10了。
let是有範圍的概念，且只存在於{}迴圈內。一開始不了解的我，還以為是因為迴圈遭到let鎖住，沒有往前所以才會各別列出，但其實是因為let獨立存在每一個{}範圍內，我做了以下範例測試一下。
```
for(let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1*(10-i));
}
```
這一段就是判斷出迴圈是持續進行並非被block，而是每一{}範圍是獨立的i，透過延遲印出9到0。
> 實務上應該全面使用 let 取代 var，若你使用 var，language service 也會提出警告，要你改用 let。

#### const
常數通常會設定為const，因常數不會再被變更。
```
const numLivesForCat = 9;
```

>傳統我們都是確定此變數不能被修改，才會宣告成 const，但在 TypeScript 中是反過來，變數應該盡量宣告成 const，除非要修改才宣告成 let，事實上，若 language service 發現變數從來沒被修改過，會主動提出警告，要求你改成 const，這是希望大家盡量寫出 immutable 的 pure function，減少不必要的 side effect。

### 參考資料

[mozilla.org](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
[深入探討 TypeScript 之變數宣告與建立](https://old-oomusou.goodjack.tw/typescript/variable/)
[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)