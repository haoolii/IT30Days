import {Command} from './Command';
import {Light} from './Light';

export class LightOffCommand implements Command{
    
    private light:Light;
    constructor(d:Light){
        this.light = d;
    }
    execute():void{
        this.light.off();
    }
}