import {Strategy} from './Strategy';

export class WaterPower implements Strategy{
    Operation():void{
        console.log("Waiting...");
        console.log("Waiting...");
        console.log("Waiting...");
        console.log("Power Coming!!");
    }
    getName():string{
        return 'WaterPower';
    }
}
