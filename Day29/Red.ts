import {Color} from './Color';

export class Red implements Color{
    fill():void{
        console.log("Inside Red::fill() method.");
    }
}