import {Food} from './Food';
import {Salt} from './Salt';
import {Oil} from './Oil';
export class Builder{
    prepareSteak():Food{
        let steak:Food = new Food();
        steak.addComponent(new Salt());
        steak.addComponent(new Oil());
        return steak;
    }
}