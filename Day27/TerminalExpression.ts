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