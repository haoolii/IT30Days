import {ComputerPartVisitor} from './ComputerPartVisitor';

export interface ComputerPart{
    accept(computerPartVisitor:ComputerPartVisitor):void;
}