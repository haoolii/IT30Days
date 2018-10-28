import {ComputerPart} from './ComputerPart';
import {ComputerPartVisitor} from './ComputerPartVisitor';

export class Monitor implements ComputerPart{

    public accept(computerPartVisitor:ComputerPartVisitor):void{
        computerPartVisitor.visit(this);
    }
}