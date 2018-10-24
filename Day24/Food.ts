import {Component} from './Component';

export class Food{
    Componentlist:Component[] =[];
    addComponent(c:Component):void{
        this.Componentlist.push(c);
    }
    getDetail():void{
        this.Componentlist.forEach( (c, index) => {
                console.log(c.getTaste());
          });        
    }
}