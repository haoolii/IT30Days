import {AbstractPromotion} from './AbstractPromotion';
import {PromotionA} from './PromotionA';
import {PromotionB} from './PromotionB';
import {PromotionC} from './PromotionC';

let promotionA:AbstractPromotion = new PromotionA(['a','b']);
let promotionB:AbstractPromotion = new PromotionB(['c','b']);
let promotionC:AbstractPromotion = new PromotionC(['e','a']);
 promotionA.setNextPromotion(promotionB);
 promotionB.setNextPromotion(promotionC);

 let shoppingCart:string[] = ['a','b','shie','e'];
 promotionA.usePromotion(shoppingCart);