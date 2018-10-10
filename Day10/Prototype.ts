export class Prototype{

    constructor(){

    }
    public saySomething():void{
        console.log('hello! my memory location: '+this);
        
    }
    
    public clone():Prototype{
        let cloned = Object.create(Prototype.prototype || null);
        return cloned;
    }
}