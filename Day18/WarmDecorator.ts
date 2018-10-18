import {Weapon} from './Weapon';
import {WeaponDecorator} from './WeaponDecorator';

export class WarmDecorator extends WeaponDecorator{

    constructor(w:Weapon){
        super(w);
    }
    attack():void{
        super.attack();
        this.warmDecorator();
    }
    private warmDecorator():void{
        console.log('Warming your heart!');
    }
}