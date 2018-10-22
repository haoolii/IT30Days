import {Player} from './Player';
import {Adpater} from './Adpater';

export class AudioPlayer implements Player{
    private AdapterPlayer;
    constructor(){
        this.AdapterPlayer = new Adpater();
    }
    play():void{
        this.AdapterPlayer.play();
    }
}