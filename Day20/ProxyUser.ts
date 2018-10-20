import {User} from './User';
import {AccountUser} from './AccountUser';

export class ProxyUser implements User{
    private accountUser:User;
    private existUser:User = new AccountUser('1234');
    private accountToken:string;

    constructor(token:string){
        this.accountToken = token;
    }

    chat():void{
        if(!this.authcheck(this.accountToken)){
            this.accountUser = new AccountUser(this.accountToken);
            console.log('Creating Auth Token')
            this.accountUser.chat();
        }else{
            console.log('Existing Auth Token')
            this.existUser.chat();
        }
    }

    private authcheck(token:string):boolean{
        return token == '1234' ? true : false;
    }
}