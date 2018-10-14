"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(n, sub) {
        this.name = n;
        this.subject = sub;
        this.subject.attach(this);
    }
    Person.prototype.Update = function () {
        console.log(this.name + ": get Updating...");
        console.log(this.name + ": get New State...");
        console.log(this.name + ": New State: " + this.subject.getState());
    };
    return Person;
}());
exports.Person = Person;
