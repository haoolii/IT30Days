import {Expression} from './Expression';
import {TerminalExpression} from './TerminalExpression';
import {OrExpression} from './OrExpression';
import {AndExpression} from './AndExpression';

function getMaleExpression():Expression{
    let robert:Expression = new TerminalExpression("Robert");
    let john:Expression = new TerminalExpression("John");
    return new OrExpression(robert, john);	
}

function getMarriedWomanExpression():Expression{
    let julie:Expression = new TerminalExpression("Julie");
    let married:Expression = new TerminalExpression("Married");
    return new AndExpression(julie, married);	
}

let isMale:Expression = getMaleExpression();
let isMarriedWoman:Expression = getMarriedWomanExpression();
console.log("John is male? " + isMale.interpret("John"));
console.log("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));
