### 前言
今天是輕鬆星期五，就繼續完成Interface吧，今天工作上遇到了一些CSS弔詭的問題，晚點再來研究研究。
*註記，此篇日後得翻修*
### Interfaces
---
#### Difference between the static and instance sides of classes
這段標題是在探討**static side** 與**instance side**。
首先先講到有class level和object level。之前在網路上看過一篇文章說明，大致就像是女人跟女朋友的關係，這解釋應該也是滿明白的了吧？有一種類型的生物叫女人，有一天你跟老天說給我一個女人吧，老天就送你一個女人且是你的女朋友，粗淺直白的解釋。class可用來定義object的屬性以及方法。
言而總之**static side**屬於class level，非**static side**屬於 object level。

#### Constructor Interface
Class interface並不會去定義constructor，但基於依賴反轉原則DIP，有時建立物件時會期待我們所建立的物件，有我們期待的引數(signatur)又或者是參數，所以會定義constructor interface，制約class得實踐該interface，且經TypeScript編譯檢查。以下是大致我們期待的。
```
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```
但編譯時會有錯誤，錯誤內容是Clock找不到interface ClockConstructor有new這方法。
> Object level 的 property 與 method 要透過 new 之後才能使用，所以 new 不該屬於 object level，只能是 class level。

**Clock**實作了**ClockConstructor**，TypeScript編譯時嘗試在Object level判斷是否有**new**，但**constructor(h: number, m: number)**是屬於class level，所以無吻合的new引數才報錯。

```
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

//這邊就是用法 如同引言的解釋
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

>Constructor interface 不能直接使用 implements，必須要搭配 constructor function / factory method，在其 parameter 使用 constructor interface，如此 TypeScript 就會在此檢查 class 是否有實踐 constructor interface。

我的認知上是透過create讓該方法產生Object Level的條件，此方法就是一Factroy method，用於建構等同於建構子的概念。
但我真的認為這邊有點混亂，日後真的要好好研讀。

#### Extending Interfaces
字面意思相信也很清楚，就是繼承，介面也是可以繼承的。同下
```
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```
是可以實作多個介面的哦！同下
```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

#### Hybrid Interface
混合介面是指，可以同時是function或Object。
```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```
> Hybrid寫法主要是相容於ES5，新寫的TypeScript或Angular不建議使用。

#### Interfaces Extending Classes
這就是我比較陌生的地方了，在先前並沒有看過介面去繼承Class。
補充一下：Interface是沒有實作方法的，Class才有哦！
以下為Interface去繼承Class。
```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```
大致解釋一下，**SelectableControl**繼承**Control**，所以該interface具備了**Control**的**private state**屬性。
**Button**繼承了**Control**所以也繼承了private屬性，並實作了**SelectableControl**Interface，也符合規範，所以是OK。
**TextBox**繼承了**Control**，並無是非對錯，因為就是一個單純繼承了private屬性。
**Image**會噴錯的原因在於，他實作了**SelectableControl**，但並無**private state**屬性，所以報錯。 *我有想說自己宣告補上去可以嗎，是不行的哦private是不行的，這還要再去研究一下*


#### 參考資料
[深入探討 TypeScript 之 Interface](https://oomusou.io/typescript/interface/)
[TypeScript HandBook](https://www.typescriptlang.org/docs/handbook/interfaces.html)

