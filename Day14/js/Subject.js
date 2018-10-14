"use strict";
exports.__esModule = true;
var Subject = /** @class */ (function () {
    function Subject() {
        this.list = [];
    }
    Subject.prototype.attach = function (p) {
        this.list.push(p);
    };
    Subject.prototype.setState = function (m) {
        this.state = m;
        this.notifyAll();
    };
    Subject.prototype.getState = function () {
        return this.state;
    };
    Subject.prototype.notifyAll = function () {
        this.list.forEach(function (p) {
            p.Update();
        });
    };
    return Subject;
}());
exports.Subject = Subject;
