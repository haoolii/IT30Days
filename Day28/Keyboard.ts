import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';

export class Keyboard implements ComputerPart{

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        computerPartVisitor.visit(this);
    }
}