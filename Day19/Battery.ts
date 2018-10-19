import {Composition} from './Composition';
import {LithiumComposition} from './LithiumComposition';
import {CarbonComposition} from './CarbonComposition';

export abstract class Battery{
    protected storeComposition:Composition;
    constructor(sc:Composition){
        this.storeComposition = sc;
    }
    abstract store():void;    
}