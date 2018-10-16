import {Door} from './Door';
import {Light} from './Light';
import {Command} from './Command';
import {DoorOpenCommand} from './DoorOpenCommand';
import {DoorCloseCommand} from './DoorCloseCommand';
import {LightOnCommand} from './LightOnCommand';
import {LightOffCommand} from './LightOffCommand';

let commandList:Command[] =[];
let door = new Door();
let light = new Light();
commandList.push(new DoorOpenCommand(door));
commandList.push(new LightOnCommand(light));
commandList.push(new LightOffCommand(light));
commandList.push(new DoorCloseCommand(door));

commandList.forEach( (command, index) => {
    command.execute();
  });
