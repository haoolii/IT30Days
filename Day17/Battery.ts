import {Strategy} from './Strategy';
import {NuclearPower} from './NuclearPower';
import {WaterPower} from './WaterPower';

export class Battery{

    private strategy:Strategy;
    
    setPowerStrategy(str:Strategy){
        this.strategy = str;
    }

    charge():void{        
        console.log('Use: '+this.strategy.getName()+' Charging...');
        this.strategy.Operation();
    }
    discharge():void{
        console.log('Discharging...');
    }
}