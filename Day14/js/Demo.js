"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Subject_1 = require("./Subject");
var subject = new Subject_1.Subject();
var amy = new Person_1.Person('Amy', subject);
var jack = new Person_1.Person('Jack', subject);
var peter = new Person_1.Person('Pater', subject);
subject.setState('fuck');
