
export interface Composite{
    add(c:Composite):void;
    remove(c:Composite):void;
    draw():void;
}