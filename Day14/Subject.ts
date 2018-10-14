import {Person} from './Person';
import {Observer} from './Observer';
export class Subject{
    private list:Observer[] =[];
    private state:string;
    constructor(){
        
    }
    attach(p:Observer):void{
        this.list.push(p);
    }
    setState(m){
        this.state = m;
        this.notifyAll();
    }

    getState():string{
        return this.state;
    }

    notifyAll(){
        this.list.forEach(function (p) {
            p.Update();
        }); 
    }
}