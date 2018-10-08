export class NoobEmployee {
    name:string;
    constructor(n){
        this.name = n;
    }
    punishmented():void{
        console.log(this.name + 'say: oh no!');
    }
}