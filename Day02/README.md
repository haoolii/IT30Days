## TypeScript - Design Pattern(02) ：TypesScript基礎介紹
===

### 前言
今天先來輕鬆的基礎型態吧！

Typescript Version 3.1

基本型態
===
### Boolean
一如往常的布林本人
```
let isDone: boolean = false;
```
---
### Number
與javascript一樣皆為浮點值，且有十六進位和十進位外，還支援ES6的二進位和八進位。
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
---
### String
必備字串，可用單引號或雙引號。
```
let color: string = "blue";
color = 'red';
```
還可使用反引號(\`)，達到跨行且類似模板語言嵌入的寫法。
```
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
```
等同於
```
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```
---
* ### Array
陣列如同Javascript的一樣
```
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```
---
### Tuple
翻譯元組(?)，意思就是宣告該陣列個別型態。
```
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK [0]為string [1]為數字
// Initialize it incorrectly
x = [10, "hello"]; // Error 錯誤[0]不為字串 [1]不為數字
```
比較特殊的如下，可以透過已經宣告的型態來判斷是否有該方法，可以確定該元組型態一定有該方法或屬性。
```
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```
---
### Enum
宣告常數，就像C#一樣的宣告
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
可設定起始值
```
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
還可透過編號來尋找該名稱，第一個非為**0**而為**1**
```
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
```
---
### Any
可能資料來源為外部資料，為了保持程式彈性可以先不設定型態，在compile時可以跳過型別檢查，且讓值通過檢查。
```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
以下為範例，Any型態編譯時是可以通過的。
```
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```
---
### Void 
官方稱似Any的相反，但就是Void，不會返回值。
```
function warnUser(): void {
    console.log("This is my warning message");
}
```
宣告Void型態，值只能undefined或null。
```
let unusable: void = undefined;
```
---
### Null and Undefined
null和undefined為所有型態的子類別，所以我們可以針對所有型態宣告為undefined或是null。
```
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

---
### Never
有些function，像是只會拋出例外或是無限迴圈，針對void語意上不精確，而提出的Never型態，專門針對無限迴圈以及例外。
```
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```
---
### Object
即是non-primitive(非原始型別)，非number, string, boolean, symbol, null, undefined。
官方有提供一個範例來解釋。
```
declare function create(o: object | null): void;

create({ prop: 0 }); // OK object型態
create(null); // OK 

create(42); // Error 數字是原始型別
create("string"); // Error 字串是原始型別
create(false); // Error 布林是原始型別
create(undefined); // Error 未定義是原始型別
```
### Type Assertions
型態轉換用途，有兩種標示方式，轉換型態時使用。
第一種為angle-bracket
```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
第二種為as-syntax
```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
### Let 
官方文件聲明Let使用的時機會多大於var，原因是因為var無scope概念，也關乎於生命週期的原因，這偏不多做說明。

[深入探討 TypeScript 之變數宣告與建立](https://old-oomusou.goodjack.tw/typescript/variable/)
[JavaScript variables lifecycle: why let is not hoisted](https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted/)

---




[Typescriptlang.org HandBook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

