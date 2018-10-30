import {Store} from './Store';

//在Pattern內就是一種Observer的概念，當數據發生變更時，會通知所有Store要變更，但這邊只有使用單一Store
export class Dispatcher{
    private store:Store;
    constructor(store:Store){
        this.store = store;
    }
    public dispatch(str:string):void{
        this.store.changeState(str);
    }
}