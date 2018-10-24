import {Builder} from './Builder';
import {Food} from './Food';

let foodbuilder:Builder = new Builder();
let steak:Food = foodbuilder.prepareSteak();
steak.getDetail();