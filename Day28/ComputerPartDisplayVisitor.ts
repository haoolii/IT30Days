import {ComputerPartVisitor} from './ComputerPartVisitor';
import {Computer} from './Computer';
import {Mouse} from './Mouse';
import {Keyboard} from './Keyboard';
import {Monitor} from './Monitor';
import {ComputerPart} from './ComputerPart';

export class ComputerPartDisplayVisitor implements ComputerPartVisitor{
    
     visit(part:ComputerPart):void {
        let partType = part.constructor.toString().match(/\w+/g)[1]
        switch(partType) { 
            case 'Computer': { 
               this.visit1(<Computer>part);
               break; 
            } 
            case 'Mouse': { 
                this.visit2(<Mouse>part);
               break; 
            } 
            case 'Keyboard': { 
                this.visit3(<Keyboard>part);
                break; 
             } 
            case 'Monitor': { 
                this.visit4(<Monitor>part);
                break; 
             } 
            default: { 
               console.log('something error');
               break; 
            } 
         } 
     }
    private visit1(computer:Computer):void {
        console.log('Displaying Computer');
     }
    private visit2(mouse:Mouse):void {
        console.log('Displaying Mouse');
    }
    private visit3(keyboard:Keyboard):void {
        console.log('Displaying Keyboard');
    }
    private visit4(monitor:Monitor):void {
        console.log('Displaying Monitor');
    }
}

