export class Memento{
    private state:string;

    constructor(state:string){
        this.state = state;
    }
    getState():string{
        return this.state;
    }
}