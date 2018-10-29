import {Shape} from './Shape';
export class Square implements Shape{
    public draw():void{
        console.log("Inside Square::draw() method.");
    }
}