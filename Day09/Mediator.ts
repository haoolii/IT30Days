import { Person } from './Person';

export class Mediator {//中介人
    person1:Person; //員工1 
    person2:Person; //員工2

	constructor(){
        this.person1 = new Person(this,'Amy'); //塞名子給他
        this.person2 = new Person(this,'Ted'); //塞名子給他
    }
    
    public talkTo(who:string,message:string):void{//說指定的人
        if(this.person1.name == who){
            this.person1.told(message);
        }
        if(this.person2.name == who){
            this.person2.told(message);
        }
    }
}