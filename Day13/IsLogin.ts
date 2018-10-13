import {State} from './State';
import {Person} from './Person';

export class IsLogin implements State{
    private person:Person;
    constructor(p:Person){
        this.person = p;
    }
    public chat():void{
        console.log('Chating!!!!'); 
    }
    public login():void{
        console.log('You are already logged in!');
    }
    public logout():void{
        console.log('Logout....');
        this.person.setState(this.person.getisLogoutState());
    }
}