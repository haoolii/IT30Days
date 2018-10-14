import {Observer} from './Observer';
import {Subject} from './Subject';

export class Person implements Observer{
    name:string;
    subject:Subject;    
    constructor(n,sub){
        this.name = n;
        this.subject = sub;
        this.subject.attach(this);
    }
    Update():void{
        console.log(this.name+": get Updating...");
        console.log(this.name+": get New State...");
        console.log(this.name+": New State: "+this.subject.getState());
    }
}