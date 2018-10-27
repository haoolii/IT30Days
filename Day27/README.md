# TypeScript - Gof 23 Design Pattern (27)：Interpreter Pattern
### 前言
今天搬家了，太忙碌！就來個Interpreter Pattern！

### Interpreter Pattern
---
#### 說明
字面意思，就是定義一個語言與其文法，使用一個解譯器來表示這個語言的敘述。

#### 範例
這個範例有點意義不明，但感覺一下就好。

制定一下我們Interpreter的規格。
```
//Expression.ts
export interface Expression{
    interpret(context:string):boolean;
}
```

用來判斷是否有包含該字串。
```
//TerminalExpression.ts
import {Expression} from './Expression';

export class TerminalExpression implements Expression{
    private data:string;
    constructor(data:string){
        this.data = data;
    }
    public interpret(context:string):boolean{
        if(context.indexOf(this.data) >= 0){
            return true;
         }
         return false;
    }
}
```


Or的Interpreter，會去判斷兩個Expression。
```
//OrExpression.ts
import {Expression} from './Expression';

export class OrExpression implements Expression{
    private expr1:Expression = null;
    private expr2:Expression = null;
    constructor(expr1:Expression, expr2:Expression){
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    public interpret(context:string):boolean{
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}
```

And的Interpreter，會去判斷兩個Expression。
```
//AndExpression.ts
import {Expression} from './Expression';

export class AndExpression implements Expression{
    private expr1:Expression = null;
    private expr2:Expression = null;
    constructor(expr1:Expression, expr2:Expression){
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    public interpret(context:string):boolean{
        return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
}
```

Demo!
```
//Demo.ts
import {Expression} from './Expression';
import {TerminalExpression} from './TerminalExpression';
import {OrExpression} from './OrExpression';
import {AndExpression} from './AndExpression';

function getMaleExpression():Expression{
    let robert:Expression = new TerminalExpression("Robert"); //Robert綁進去
    let john:Expression = new TerminalExpression("John");//John綁進去
    return new OrExpression(robert, john);	 //只有輸入 Robert or John才會回傳 true
}

function getMarriedWomanExpression():Expression{
    let julie:Expression = new TerminalExpression("Julie"); //Julie綁進去
    let married:Expression = new TerminalExpression("Married"); //Married綁進去
    return new AndExpression(julie, married); //如果收到Julie的名字，跟判斷是否結婚，就會回傳And
}

let isMale:Expression = getMaleExpression();
let isMarriedWoman:Expression = getMarriedWomanExpression();
console.log("John is male? " + isMale.interpret("John"));
console.log("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));
```

### 結論
這Pattern範例真的滿沒意義的，但..我也想不到什麼好範例，暫時用一下囉！

### 參考
https://www.tutorialspoint.com/design_pattern/interpreter_pattern.htm