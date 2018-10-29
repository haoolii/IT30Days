import {AbstractFactory} from './AbstractFactory';
import {Color} from './Color';
import {Shape} from './Shape';
import {Red} from './Red';
import {Green} from './Green';

export class ColorFactory extends AbstractFactory{
    public getShape(type:string):Shape{        
        return null;
    }
    public getColor(type:String):Color{
        if(type == null){
            return null;
         }		
         if(type == 'Red'){
             return new Red();
         }else if(type == 'Green'){
            return new Green();
         }         
        return null;
    }
}