import {Command} from './Command';
import {Door} from './Door';

export class DoorCloseCommand implements Command{

    private door:Door;
    constructor(d:Door){
        this.door = d;
    }
    execute():void{
        this.door.close();
    }
}