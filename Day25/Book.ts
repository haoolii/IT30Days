export class Book{
    private name:string;
    constructor(n:string){
        this.name = n;
    }
    public getName():string{
        return this.name;
    }
}