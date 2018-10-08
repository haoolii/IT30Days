export class NormalEmployee {
    name:string;
    constructor(n){
        this.name = n;
    }
	reward():void{
        console.log(this.name + 'say: yaa');
    }
}