import {Action} from './Action';
import {Store} from './Store';

export class View{
    private action:Action;
    private store:Store;

    constructor(store:Store,action:Action){
        this.store = store;
        this.action = action;
    }

    //顯示狀態 會去call getState的方法
    public display():void{
        console.log("State: "+this.getState());
    }

    //如果要編更State需呼叫Action的變更
    public setMyState(str:string):void{
        this.action.changeState(str);
    }
    
    //getState會去抓Store的方法
    private getState():string{      
        return this.store.getState();
    }
    
}