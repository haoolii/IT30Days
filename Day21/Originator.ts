import {Memento} from './Memento';

export class Originator{
    private state:string;

    setState(state:string):void{
        this.state = state;
    }
    getState():string{
        return this.state;
    }
    saveStateToMemento():Memento{
        return new Memento(this.state);
    }
    getStateFromMemento(memento:Memento):void{
        this.state = memento.getState();
    }
}