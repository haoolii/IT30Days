import {Shape} from './Shape';
import {Circle} from './Circle';
import {Square} from './Square';

export class Factory{
    constructor(){

    }
    getCircle():Shape{
        return new Circle();
    }

    getSquare():Shape{
        return new Square();
    }
}