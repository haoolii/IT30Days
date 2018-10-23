
export abstract class Game{
    abstract initialize():void;
    abstract startPlay():void;
    abstract endPlay():void;
    
    play():void{        
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
    
}