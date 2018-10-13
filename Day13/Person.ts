import {State} from './State';
import {IsLogin} from './IsLogin';
import {IsLogout} from './IsLogout';

export class Person{
    private isLogin:State;
    private isLogout:State;
    private state:State;
    
    constructor(){
        this.isLogin = new IsLogin(this);
        this.isLogout = new IsLogout(this);
        this.state = this.isLogout;
    }
    //====
    public chat():void{
        this.state.chat();
    }
    public login():void{
        this.state.login();
    }
    public logout():void{
        this.state.logout();
    }
    //===
    public getisLoginState():State{
        return this.isLogin;
    }
    public getisLogoutState():State{
        return this.isLogout;
    }
    //=====
    public getState():State{
        return this.state;
    }

    public setState(s:State):void{
        this.state = s;
    }
}