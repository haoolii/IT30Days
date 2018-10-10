// app.ts
import { Prototype } from './Prototype';


let prototype1: Prototype = new Prototype();
let prototype2: Prototype = new Prototype();
prototype1.saySomething();
prototype2.saySomething();
let prototype3: Prototype = prototype1.clone();

//兩個獨立Create 記憶體位置不同
prototype1 == prototype3 ? console.log('Yes it\'s same!') : console.log('No it\'s different!');


