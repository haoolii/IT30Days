import {Person} from './Person';
import {Observer} from './Observer';
import {Subject} from './Subject';

let subject:Subject = new Subject();
let amy:Observer = new Person('Amy',subject);
let jack:Observer = new Person('Jack',subject);
let peter:Observer = new Person('Pater',subject);

subject.setState('fuck');


