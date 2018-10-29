import {AbstractFactory} from './AbstractFactory';
import {Color} from './Color';
import {Shape} from './Shape';
import {Rectangle} from './Rectangle';
import {Square} from './Square';

export class ShapeFactory extends AbstractFactory{
    public getShape(type:string):Shape{
         if(type == 'Square'){                
             return new Square();
         }else if(type == 'Rectangle'){
            return new Rectangle();
         }         
    }
    public getColor(type:String):Color{
        return null;
    }
    public test():string{
        return 'test1';
    }
}