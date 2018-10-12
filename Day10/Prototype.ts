export class Prototype{

    constructor(){

    }
    public saySomething():void{
        console.log('hello!');
        
    }

    public clone():Prototype{
        let cloned = Object.create(Prototype.prototype || null);
        return cloned;
    }
}