import {AbstractFactory} from './AbstractFactory';
import {ShapeFactory} from './ShapeFactory';
import {ColorFactory} from './ColorFactory';
import {Shape} from './Shape';
import {Color} from './Color';
import {FactoryProducer} from './FactoryProducer';

let shapeFactory:AbstractFactory = FactoryProducer.getFactory('Shape');
shapeFactory.getShape('Square').draw();

let colorFactory:AbstractFactory = FactoryProducer.getFactory('Color');
colorFactory.getColor('Red').fill();