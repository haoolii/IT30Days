import {CareTaker} from './CareTaker';
import {Originator} from './Originator';

let originator:Originator = new Originator();
let careTaker:CareTaker = new CareTaker();

originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #3");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #4");
console.log("Current State: " + originator.getState());
originator.getStateFromMemento(careTaker.get(0));
console.log("First saved State: " + originator.getState());
