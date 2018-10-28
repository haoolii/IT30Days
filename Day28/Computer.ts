import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';
import {Keyboard} from './Keyboard';
import {Monitor} from './Monitor';
import {Mouse} from './Mouse';

export class Computer implements ComputerPart{
    private parts:ComputerPart[];

    constructor(){
        this.parts = [new Keyboard(),new Monitor(),new Mouse()];
    }

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        this.parts.forEach( (part) => {
            part.accept(computerPartVisitor);
          });
          computerPartVisitor.visit(this);
    }
}