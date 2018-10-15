import {Composite} from './Composite';
export class ShapeDiagram implements Composite{
    private list:Composite[] =[];
    add(c:Composite):void{
        this.list.push(c);
    }
    remove(c:Composite):void{
        this.list.forEach( (item, index) => {
            if(item === c) this.list.splice(index,1);
          });
    }
    draw():void{
        this.list.forEach( (item, index) => {
            item.draw();
          });
    }
}