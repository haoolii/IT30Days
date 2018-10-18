import {Weapon} from './Weapon';

export class Gun implements Weapon{
    attack():void{
        console.log("Gun attacking");
    }
}