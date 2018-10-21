import {Memento} from './Memento';

export class CareTaker{
    private list:Memento[] =[];
    
    add(state:Memento):void{
        this.list.push(state);
    }

    get(index:number):Memento{
        return this.list[index];
    }
}