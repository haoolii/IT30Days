import {Weapon} from './Weapon';
import {Knife} from './Knife';
import {Gun} from './Gun';
import {WeaponDecorator} from './WeaponDecorator';
import {SoundsDecorator} from './SoundsDecorator';
import {WarmDecorator} from './WarmDecorator';

let myknife = new Knife();
myknife.attack();
console.log('');
let myknife_leve2:WeaponDecorator = new SoundsDecorator(myknife);
myknife_leve2.attack();
console.log('');
let myknife_leve3:WeaponDecorator = new WarmDecorator(myknife_leve2);
myknife_leve3.attack();
console.log('');