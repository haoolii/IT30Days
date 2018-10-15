import {Composite} from './Composite';

import {Circle} from './Circle';
import {Square} from './Square';
import {ShapeDiagram} from './ShapeDiagram';

let diagram:Composite = new ShapeDiagram();
let circle1:Composite = new Circle();
diagram.add(circle1);
let square1:Composite = new Square();
diagram.add(square1);
let circle2:Composite = new Circle();
diagram.add(circle2);
diagram.draw();
diagram.remove(square1);
square1.add(square1);
diagram.draw();