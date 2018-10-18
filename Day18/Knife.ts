import {Weapon} from './Weapon';

export class Knife implements Weapon{
    attack():void{
        console.log("Knife attacking");
    }
}