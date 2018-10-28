import {ComputerPart} from './ComputerPart';
import {Computer} from './Computer';
import {ComputerPartDisplayVisitor} from './ComputerPartDisplayVisitor';

let computer:ComputerPart = new Computer();
computer.accept(new ComputerPartDisplayVisitor());