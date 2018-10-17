import {Strategy} from './Strategy';

export class FirePower implements Strategy{
    Operation():void{
        console.log("Ohhh!! 乾淨的煤");
        console.log("A lot of Smoke!!");
        console.log("Power Coming!!");
    }
    getName():string{
        return 'FirePower';
    }
}
