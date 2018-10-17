import {Strategy} from './Strategy';

export class NuclearPower implements Strategy{
    Operation():void{
        console.log("Ohhh!! 好可怕哦");
        console.log("Power Coming!!");
    }
    getName():string{
        return 'NuclearPower';
    }
}
