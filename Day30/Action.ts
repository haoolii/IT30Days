import {Dispatcher} from './Dispatcher';
export class Action{
    private dispatcher:Dispatcher;
    //變更事件，綁一個Dispatcher
    constructor(dispatcher:Dispatcher){
        this.dispatcher = dispatcher; 
    }

    public changeState(str:string){
        this.dispatcher.dispatch(str);
    }
}