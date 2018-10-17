import {Strategy} from './Strategy';
import {NuclearPower} from './NuclearPower';
import {FirePower} from './FirePower';
import {WaterPower} from './WaterPower';
import {Battery} from './Battery';

let gogorobattery:Battery = new Battery();
gogorobattery.setPowerStrategy(new FirePower());
gogorobattery.charge();
gogorobattery.discharge();
console.log('沒電了 拿去充電');
gogorobattery.setPowerStrategy(new NuclearPower());
gogorobattery.charge();
gogorobattery.discharge();
console.log('沒電了 拿去充電');
gogorobattery.setPowerStrategy(new WaterPower());
gogorobattery.charge();
gogorobattery.discharge();