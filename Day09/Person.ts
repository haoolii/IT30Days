import { Mediator } from './Mediator';

export class Person { //員工
    public name:string; //故意打開的
    private mediator:Mediator; //中介人
    
	constructor(m:Mediator,n:string){ //設定中介人和名字
        this.mediator = m;
        this.name = n;
    }
    public told(message):void{ //有人幹瞧你
        console.log(name+'收到訊息: '+message);
    }
    public blameSomeOne(message):void{ //罵人
        this.mediator.talkTo('Amy','y r dog'); //透過中介者溝通
    }
}