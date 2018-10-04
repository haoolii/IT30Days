### 前言
今天本來要先來看一下Var、Let的差異，但下班有點耽誤怕時間不夠。今天介紹瀏覽一下 Interfaces吧！

### Interfaces
---
#### 介紹
官網HandBook寫了這麼一段
>One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

裡面提到對形狀做判斷、且稱為鴨子型別。照鴨子型別的解釋來看，只要是看起來像鴨子、吃起來像鴨子、聞起來像鴨子、摸起來像鴨子，那就是鴨子。後半段以物件導向的概念解釋上述，意指Interface可以替class進行定義，也就是像契約一搬，要達到鴨子就必須達到某些功能，鴨子Interface並不是實際的鴨子，但定義規範了鴨子必須具備的功能。

---
#### 初嚐
官方提供了一段Code，可以讓我們了解Interface運用場景
懶得裝環境的可以運用官方的[Playground](http://www.typescriptlang.org/play/)

```
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
上述的例子，就是TypeScript神奇的地方，只要符合LabelledValue這Interface的物件，即可通過printLabel的型別判斷，也就是你看起來像鴨子、吃起來像鴨子就給你過。
不像其他語言需宣告並實作才算是該型態，這也是TypeScript前面提到 **type-checking focuses on the shape** 

---
#### 可選屬性
```
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
```
定義不一定會使用到的屬性，也就是在後面加一個問號，color或width不一定要存在，也可以通過型別判斷。

---
#### Readonly properties 唯獨屬性
```
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```
也就是說物件的readonly屬性只有在宣告時能賦予值且不能再變更。

---
#### readonly vs const
>The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property. Variables use const whereas properties use readonly.
意旨唯獨屬性就是用在屬性，而變數是使用const。[變數vs屬性](https://javascriptweblog.wordpress.com/2010/08/09/variables-vs-properties-in-javascript/)
---
### Excess Property Checks 額外屬性檢查 
```
interface SquareConfig {
    color?: string;
    width?: number;

}
```
透過型別判斷，還有可選屬性，讓我們的介面有了彈性，但如果出現非介面定義的屬性，比如烤鴨出現了烤得很香的味道，就會跳錯，這不是鴨子。
可以透過類似型態指定的方式，讓這隻烤鴨一樣可以被識別為鴨子。
```
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```
那另一種方式是讓介面可以避開這個錯誤。但我是認為介面就是用來約束，如果預留太多彈性，還是會讓程式在後期很難維護。
```
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```
---
#### Function Types 函式型態
當然也可以作為Function的介面
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```
以上定義一SearchFunc必須必須有兩參數且返回一布林值。
```
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```
以上就是實際用法，以上程式碼是等同於以下。
```
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}
```
---
#### Indexable Types 索引型態
看例子就懂了吧，針對索引類定義介面。
```
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```
---
#### Class Types 類別型態
因為初學物件導向語言為Java，Class的介面是比較熟悉的，應該也會是我最常用的吧哈哈。
```
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```
沒錯，這就是我們常見的。另外官方有提到介面並不會用來檢查private，介面就是用來定義這物件必須擁有某些方法或是依照某些規則，private是使用在隱藏細節，況且就算介面定義了private方法，還是得依靠物件自己執行，是沒什麼道理以及意義的。

---
#### 參考資料 
[TypeScript HandBook](https://www.typescriptlang.org/docs/handbook/interfaces.html)
[Why doesn't Java allow private members in interface?](https://stackoverflow.com/questions/10169654/why-doesnt-java-allow-private-members-in-interface)
[鴨子型別](https://zh.wikipedia.org/wiki/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B)