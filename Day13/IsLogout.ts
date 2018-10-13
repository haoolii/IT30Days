import {State} from './State';
import {Person} from './Person';

export class IsLogout implements State{
    private person:Person;
    constructor(p:Person){
        this.person = p;
    }
    public chat():void{
        console.log('Please Login first!'); 
    }
    public login():void{
        console.log('Login....');
        this.person.setState(this.person.getisLoginState());
    }
    public logout():void{
        console.log('You already out!');
    }
}