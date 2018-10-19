import {Battery} from './Battery';
import {Composition} from './Composition';

export class GogoroBattery extends Battery{
    constructor(cp:Composition){
        super(cp);
    }
    store():void{
        this.storeComposition.storePower();
    }
}