import {Keyboard} from './Keyboard';
import {Mouse} from './Mouse';
import {Monitor} from './Monitor';
import {Computer} from './Computer';

export interface ComputerPartVisitor{
    visit(computer:Keyboard):void;
    visit(mouse:Mouse):void;
    visit(keyboard:Keyboard):void;
    visit(monitor:Monitor):void;
}