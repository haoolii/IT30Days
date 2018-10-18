import {Weapon} from './Weapon';

export abstract class WeaponDecorator implements Weapon{
    public decoratorweapon:Weapon;
    constructor(w:Weapon){
        this.decoratorweapon = w;
    }
    attack():void{
        this.decoratorweapon.attack();
    }
}