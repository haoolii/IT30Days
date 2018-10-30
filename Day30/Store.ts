export class Store{
    private state:string = '';
    //這邊就是我們儲存的狀態

    //取得狀態 會由View來這邊取
    public getState():string{
        return this.state;
    }

    //更改狀態
    public changeState(str:string):void{
        this.state = str;
    }
    
}