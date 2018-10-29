import {AbstractFactory} from './AbstractFactory';
import {ShapeFactory} from './ShapeFactory';
import {ColorFactory} from './ColorFactory';

export class FactoryProducer{
    static getFactory(type:string):AbstractFactory{
        if(type == 'Shape'){
            return new ShapeFactory();
        }else if(type == 'Color'){
            return new ColorFactory();
        }        
    }    
}