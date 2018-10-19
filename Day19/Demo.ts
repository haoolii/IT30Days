import {Battery} from './Battery';
import {GogoroBattery} from './GogoroBattery';
import {Composition} from './Composition';
import {LithiumComposition} from './LithiumComposition';
import {CarbonComposition} from './CarbonComposition';

let gogoroBattery1:Battery = new GogoroBattery(new LithiumComposition());
let gogoroBattery2:Battery = new GogoroBattery(new CarbonComposition());
gogoroBattery1.store();
gogoroBattery2.store();