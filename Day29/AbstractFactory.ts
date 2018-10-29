import {Color} from './Color';
import {Shape} from './Shape';

export abstract class AbstractFactory{
    abstract getColor(type:string):Color;
    abstract getShape(type:string):Shape;
}