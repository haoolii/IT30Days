import {Weapon} from './Weapon';
import {WeaponDecorator} from './WeaponDecorator';

export class SoundsDecorator extends WeaponDecorator{

    constructor(w:Weapon){
        super(w);
    }
    attack():void{
        super.attack();
        this.soundsDecorator();
    }
    private soundsDecorator():void{
        console.log('Very Powerful Sound!');
    }
}