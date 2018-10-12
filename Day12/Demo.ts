import {Factory} from './Factory';

 let ShapeFactory = new Factory();
 let circle = ShapeFactory.getCircle();
 circle.draw();
 let square = ShapeFactory.getSquare();
 square.draw();