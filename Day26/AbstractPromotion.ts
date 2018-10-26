export abstract class AbstractPromotion{

    protected PromotionCombo:string[] =[];
    protected nextPromotion:AbstractPromotion;
    constructor(combo:string[]){
        this.PromotionCombo = combo;
    }
    public setNextPromotion(nextPromotion:AbstractPromotion):void{
        this.nextPromotion =  nextPromotion;
    }
    public usePromotion(goods:string[]):void{
        if(this.compareArray(goods,this.PromotionCombo)){
            this.use();
        }
            if(this.nextPromotion != null){
                this.nextPromotion.usePromotion(goods);

            }else{
                console.log('check out!');
            }
        
    }

    abstract use():void;
    
    protected compareArray(arrA:string[], arrB:string[]):boolean{
        return arrB.length == (arrA.filter(a => arrB.filter(b => a == b)[0])).length;
    }
}